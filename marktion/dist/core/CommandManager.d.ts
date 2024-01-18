import { EditorView } from 'prosemirror-view';
import { EditorState, Transaction } from 'prosemirror-state';
import { AnyCommands, CanCommands, ChainedCommands, CommandProps, SingleCommands } from './types.js';
export declare class CommandManager {
    props: {
        view: EditorView;
        commands: AnyCommands;
    };
    rawCommands: AnyCommands;
    view: EditorView;
    constructor(props: {
        view: EditorView;
        commands: AnyCommands;
    });
    get state(): EditorState;
    get commands(): SingleCommands;
    get chain(): () => ChainedCommands;
    get can(): () => CanCommands;
    createChain(startTr?: Transaction, shouldDispatch?: boolean): ChainedCommands;
    createCan(startTr?: Transaction): CanCommands;
    buildProps(tr: Transaction, shouldDispatch?: boolean): CommandProps;
}
//# sourceMappingURL=CommandManager.d.ts.map