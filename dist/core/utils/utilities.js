// source: https://stackoverflow.com/a/6969486
export function escapeForRegEx(string) {
    return string.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}
export function minMax(value = 0, min = 0, max = 0) {
    return Math.min(Math.max(value, min), max);
}
export function isRegExp(value) {
    return Object.prototype.toString.call(value) === '[object RegExp]';
}
/**
 * Check if object1 includes object2
 * @param object1 Object
 * @param object2 Object
 */
export function objectIncludes(object1, object2, options = { strict: true }) {
    const keys = Object.keys(object2);
    if (!keys.length) {
        return true;
    }
    return keys.every(key => {
        if (options.strict) {
            return object2[key] === object1[key];
        }
        if (isRegExp(object2[key])) {
            return object2[key].test(object1[key]);
        }
        return object2[key] === object1[key];
    });
}
export function elementFromString(value) {
    // add a wrapper to preserve leading and trailing whitespace
    const wrappedValue = `<body>${value}</body>`;
    return new window.DOMParser().parseFromString(wrappedValue, 'text/html').body;
}
