import React from 'react';
export const MarktionContext = React.createContext(null);
export function useMarktion() {
    return React.useContext(MarktionContext);
}
