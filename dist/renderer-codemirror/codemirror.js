import { EditorView } from '@codemirror/view';
import { RendererEnum } from '../types';
import { createState } from './createState';
export class CodemirrorRenderer {
    constructor(props) {
        Object.defineProperty(this, "props", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: props
        });
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "state", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "type", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: RendererEnum.SOURCE
        });
        this.state = createState(this);
    }
    getProps() {
        return this.props;
    }
    setProps(props) {
        this.props = {
            ...this.props,
            ...props
        };
        this.state = createState(this);
        this.view.setState(this.state);
        return this.props;
    }
    getTheme() {
        return this.props.theme;
    }
    setTheme(theme) {
        return this.setProps({
            theme
        });
    }
    setContent(content) {
        this.setProps({
            content
        });
    }
    getContent() {
        if (!this.view) {
            return this.props.content;
        }
        return this.view.state.doc.toString();
    }
    focus() {
        requestAnimationFrame(() => {
            this.view.focus();
        });
    }
    hasFocus() {
        return this.view.hasFocus;
    }
    attach(root, props) {
        if (!this.view) {
            const div = document.createElement('div');
            root.appendChild(div);
            div.classList.add('wrapper-source');
            this.view = new EditorView({
                state: this.state,
                parent: div
            });
        }
        return this.setProps(props);
    }
    destroy() {
        this.view.destroy();
    }
}
