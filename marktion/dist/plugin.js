class IntergarteSystem {
    constructor(editor) {
        Object.defineProperty(this, "editor", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: editor
        });
        Object.defineProperty(this, "intergrates", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: []
        });
    }
    use(factory) {
        const intergrate = factory(this);
        this.intergrates.push(intergrate);
    }
    getDOMIntergrate() {
        const el = document.createElement('div');
        this.editor.rootEl?.append(el);
        return el;
    }
}
export {};
