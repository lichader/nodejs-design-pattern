// option 1: composite

class SafeCalculator {
    constructor(calculator) {
        this.calculator = calculator;
    }

    divide() {
        // additional validation logic
        const divisor = this.calculator.peekValue();
        if (divisor === 0) {
            throw Error("Division by 0");
        }

        return this.calculator.divide();
    }

    putValue(value) {
        return this.calculator.putValue(value);
    }

    // this rest goes same
}

// option 2: composite
function createSafeCalculator(calculator) {
    return {
        divide() {
            // additional validation logic
            const divisor = calculator.peekValue();
            if (divisor === 0) {
                throw Error("Division by 0");
            }

            return calculator.divide();
        },
        putValue(value) {
            return calculator.putValue(value);
        },
        // the rest goes same
    };
}

// option 3: monkey patching
// Watch out! This comes with cost of mutating object and likely cause proble problem in multi task world
function patchToSafeCalculator(calculator) {
    const divideOrig = calculator.divide;
    calculator.divide = () => {
        // additional validation logic
        const divisor = calculator.peeakValue();
        if (divisor === 0) {
            throw Error("Division y 0");
        }

        return divideOrig.apply(calculator);
    };

    return calculator;
}

// ES6 proxy instance
const SafeCalculatorHandler = {
    get: (target, property) => {
        if (property === "divide") {
            //proxied method
            return function () {
                // additional validation logic
                const divisor = target.peekValue();
                if (divisor === 0) {
                    throw Error("Division by 0");
                }

                return target.divide();
            };
        }
        return target[property];
    },
};

const calculator = new StackCalculator();

const proxiedSafeCalculator = new Proxy(calculator, SafeCalculatorHandler);
// note, the proxiedSafeCalculator inherites the prototype of the subject, therefore
// running safeCalculator instanceof StackCalculator will return true
