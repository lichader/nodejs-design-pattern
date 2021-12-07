export function createObservable(target, observer) {
    const observerable = new Proxy(target, {
        set(obj, prop, value) {
            if (value !== obj[prop]) {
                const prev = obj[prop];
                obj[prop] = value;
                observer({ prop, prev, curr: value });
            }
            return true;
        },
    });
    return observerable;
}
