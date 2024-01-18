import { RawCommands } from '../types';
declare global {
    interface Commands<ReturnType> {
        table: {
            insertTable: (options?: {
                rows?: number;
                cols?: number;
                withHeaderRow?: boolean;
            }) => ReturnType;
            addColumnBefore: () => ReturnType;
            addColumnAfter: () => ReturnType;
            deleteColumn: () => ReturnType;
            addRowBefore: () => ReturnType;
            addRowAfter: () => ReturnType;
            deleteRow: () => ReturnType;
            deleteTable: () => ReturnType;
            mergeCells: () => ReturnType;
            splitCell: () => ReturnType;
            toggleHeaderColumn: () => ReturnType;
            toggleHeaderRow: () => ReturnType;
            toggleHeaderCell: () => ReturnType;
            mergeOrSplit: () => ReturnType;
            setCellAttribute: (name: string, value: any) => ReturnType;
            goToNextCell: () => ReturnType;
            goToPreviousCell: () => ReturnType;
            fixTables: () => ReturnType;
            setCellSelection: (position: {
                anchorCell: number;
                headCell?: number;
            }) => ReturnType;
        };
    }
}
export declare const insertTable: RawCommands['insertTable'];
export declare const addColumnBefore: RawCommands['addColumnBefore'];
export declare const addColumnAfter: RawCommands['addColumnAfter'];
export declare const deleteColumn: RawCommands['deleteColumn'];
export declare const addRowBefore: RawCommands['addRowBefore'];
export declare const addRowAfter: RawCommands['addRowAfter'];
export declare const deleteRow: RawCommands['deleteRow'];
export declare const deleteTable: RawCommands['deleteTable'];
export declare const mergeCells: RawCommands['mergeCells'];
export declare const splitCell: RawCommands['splitCell'];
export declare const toggleHeaderColumn: RawCommands['toggleHeaderColumn'];
export declare const toggleHeaderRow: RawCommands['toggleHeaderRow'];
export declare const toggleHeaderCell: RawCommands['toggleHeaderCell'];
export declare const mergeOrSplit: RawCommands['mergeOrSplit'];
export declare const setCellAttribute: RawCommands['setCellAttribute'];
export declare const goToNextCell: RawCommands['goToNextCell'];
export declare const goToPreviousCell: RawCommands['goToPreviousCell'];
export declare const fixTables: RawCommands['fixTables'];
export declare const setCellSelection: RawCommands['setCellSelection'];
//# sourceMappingURL=table.d.ts.map