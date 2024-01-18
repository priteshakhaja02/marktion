import { createChainableState } from './helpers';
export class CommandManager {
    constructor(props) {
        Object.defineProperty(this, "props", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: props
        });
        Object.defineProperty(this, "rawCommands", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, "view", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.rawCommands = props.commands;
        this.view = props.view;
    }
    get state() {
        return this.view.state;
    }
    get commands() {
        const { rawCommands, state, view } = this;
        const { tr } = state;
        const props = this.buildProps(tr);
        return Object.fromEntries(Object.entries(rawCommands).map(([name, command]) => {
            const method = (...args) => {
                const callback = command(...args)(props);
                if (!tr.getMeta('preventDispatch')) {
                    view.dispatch(tr);
                }
                return callback;
            };
            return [name, method];
        }));
    }
    get chain() {
        return () => this.createChain();
    }
    get can() {
        return () => this.createCan();
    }
    createChain(startTr, shouldDispatch = true) {
        const { rawCommands, state, view } = this;
        const callbacks = [];
        const hasStartTransaction = !!startTr;
        const tr = startTr || state.tr;
        const run = () => {
            if (!hasStartTransaction && shouldDispatch && !tr.getMeta('preventDispatch')) {
                view.dispatch(tr);
            }
            return callbacks.every(callback => callback === true);
        };
        const chain = {
            ...Object.fromEntries(Object.entries(rawCommands).map(([name, command]) => {
                const chainedCommand = (...args) => {
                    const props = this.buildProps(tr, shouldDispatch);
                    const callback = command(...args)(props);
                    callbacks.push(callback);
                    return chain;
                };
                return [name, chainedCommand];
            })),
            run
        };
        return chain;
    }
    createCan(startTr) {
        const { rawCommands, state } = this;
        const dispatch = false;
        const tr = startTr || state.tr;
        const props = this.buildProps(tr, dispatch);
        const formattedCommands = Object.fromEntries(Object.entries(rawCommands).map(([name, command]) => {
            return [name, (...args) => command(...args)({ ...props, dispatch: undefined })];
        }));
        return {
            ...formattedCommands,
            chain: () => this.createChain(tr, dispatch)
        };
    }
    buildProps(tr, shouldDispatch = true) {
        const { rawCommands, view, state } = this;
        const props = {
            tr,
            view,
            state: createChainableState({
                state,
                transaction: tr
            }),
            dispatch: shouldDispatch ? () => undefined : undefined,
            chain: () => this.createChain(tr, shouldDispatch),
            can: () => this.createCan(tr),
            get commands() {
                return Object.fromEntries(Object.entries(rawCommands).map(([name, command]) => {
                    return [name, (...args) => command(...args)(props)];
                }));
            }
        };
        return props;
    }
}
