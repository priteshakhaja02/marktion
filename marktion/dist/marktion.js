import { CodemirrorRenderer } from './renderer-codemirror';
import { ProseMirrorRenderer } from './renderer-prosemirror';
const defaultOptions = {
    content: '# Hello\nWorld.',
    renderer: 'WYSIWYG',
    theme: 'dark'
};
export class Marktion {
    constructor(options = defaultOptions) {
        Object.defineProperty(this, "options", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: options
        });
        Object.defineProperty(this, "rootEl", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "renderer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "content", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "theme", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "pmRenderer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "cmRenderer", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.renderer = options.renderer;
        this.content = options.content;
        this.theme = options.theme || 'light';
        this.pmRenderer = new ProseMirrorRenderer({
            theme: this.theme,
            content: options.content,
            plugin: options.plugins,
            uploadOptions: options.uploadOptions,
            onChange: () => {
                options.onChange?.(this);
            }
        });
        this.cmRenderer = new CodemirrorRenderer({
            theme: this.theme,
            content: options.content,
            onChange: () => {
                options.onChange?.(this);
            }
        });
    }
    hasFocus() {
        return this.getRenderer().hasFocus();
    }
    getTheme() {
        return this.theme;
    }
    setTheme(theme) {
        this.theme = theme;
        this.getRenderer().setTheme(theme);
    }
    getContent() {
        return this.getRenderer().getContent();
    }
    setContent(content) {
        this.getRenderer().setContent(content);
    }
    getRenderer() {
        if (this.renderer === 'SOURCE') {
            return this.cmRenderer;
        }
        return this.pmRenderer;
    }
    setRenderer(renderer) {
        const rootEl = this.rootEl;
        if (!rootEl) {
            throw new Error('This is no root element founded, did editor mounted?');
        }
        const content = this.getContent();
        const theme = this.getTheme();
        this.renderer = renderer;
        this.getRenderer().attach(rootEl, {
            content,
            theme
        });
        this.getRenderer().focus();
        rootEl.setAttribute('data-renderer', renderer);
    }
    mount(root) {
        this.rootEl = root;
        this.setRenderer(this.options.renderer);
    }
}
