import { Plugin } from 'prosemirror-state';
import { Marktion } from './marktion';
export type Intergarte = {
    plugin?: Plugin[];
};
export type ExtensionFactory = (ctx: IntergarteSystem) => Intergarte;
declare class IntergarteSystem {
    editor: Marktion;
    intergrates: Intergarte[];
    constructor(editor: Marktion);
    use(factory: ExtensionFactory): void;
    getDOMIntergrate(): HTMLDivElement;
}
export {};
//# sourceMappingURL=plugin.d.ts.map