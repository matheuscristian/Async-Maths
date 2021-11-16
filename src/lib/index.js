class asyncMath {
    static async asyncSum(a, b, delay = 0) {
        let s = a + b;

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(s);
            }, delay * 1000)
        });
    }

    static async asyncMul(a, b, delay = 0) {
        let s = a * b;

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(s);
            }, delay * 1000)
        });
    }

    static async asyncDiv(a, b, delay = 0) {
        let s = a / b;

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(s);
            }, delay * 1000)
        });
    }

    static async asyncSub(a, b, delay = 0) {
        let s = a - b;

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(s);
            }, delay * 1000)
        });
    }

    static async asyncPot(a, b, delay = 0) {
        let s = a;

        for (let i = 1; i < b; i++) {
            s = s * a;
        }

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(s);
            }, delay * 1000)
        });
    }

    static async asyncSqr(a, delay = 0) {
        let s = Math.sqrt(a);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(s);
            }, delay * 1000)
        });
    }

    static async doOperation(a, b, delay, type, types = new this.mathType()) {
        if (typeof(delay) == "string") {
            type = delay;
        }
        
        if (types.sum.indexOf(type) >= 0) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(a + b);
                }, delay * 1000);
            });
        } else if (types.mul.indexOf(type) >= 0) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(a * b);
                }, delay * 1000);
            });
        } else if (types.div.indexOf(type) >= 0) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(a / b);
                }, delay * 1000);
            });
        } else if (types.sub.indexOf(type) >= 0) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(a - b);
                }, delay * 1000);
            });
        } else if (types.pot.indexOf(type) >= 0) {
            let s = await this.asyncPot(a, b, 0);
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(s);
                }, delay * 1000);
            });
        } else {
            throw "Type not found";
        }
    }

    static mathType = class {
        constructor() {
            this.sum = ["+", "a"];
            this.mul = ["m", "*"];
            this.div = ["d", "/"];
            this.sub = ["s", "-"];
            this.pot = ["p", "^"];
        }
    }
}

module.exports = asyncMath;