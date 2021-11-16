/** 
    Module that contains Async Math functions to help you.
**/
declare module 'async-maths' {
    /**
        - Sum two numbers.
        You can set a delay, the result will be returned after delay.
        ---
        @param delay Delay to return the result
    **/
    export async function sum(a: number, b: number, delay?: number): Promise<number>;

    /**
        - Multiplies two numbers.
        You can set a delay, the result will be returned after delay.
        ---
        @param delay Delay to return the result
    **/
    export async function mul(a: number, b: number, delay?: number): Promise<number>;

    /**
        - Divide two numbers.
        You can set a delay, the result will be returned after delay.
        ---
        @param delay Delay to return the result
    **/
    export async function div(a: number, b: number, delay?: number): Promise<number>;

    /**
        - Subtract two numbers.
        You can set a delay, the result will be returned after delay.
        ---
        @param delay Delay to return the result
    **/
    export async function sub(a: number, b: number, delay?: number): Promise<number>;

    /**
        - Potentiate two numbers.
        You can set a delay, the result will be returned after delay.
        ---
        @param delay Delay to return the result
    **/
    export async function pot(a: number, b: number, delay?: number): Promise<number>;

    /**
        - Return the square root of the number.
        You can set a delay, the result will be returned after delay.
        ---
        @param delay Delay to return the result
    **/
    export async function sqr(a: number, delay?: number): Promise<number>;

    /**
     * A class that contains the data of the maths operations.
     */
    export class mathType {
        /**
         * Type for sum.
         */
        public sum: string[];

        /**
         * Type for mul.
         */
        public mul: string[];

        /**
         * Type for div.
         */
        public div: string[];

        /**
         * Type for sub.
         */
        public sub: string[];

        /**
         * Type for pot.
         */
        public pot: string[];
    };

    /**
     * ### Do a operation according to the type
     *
     * @param a The first Number
     * @param b The second Number
     * @param delay Delay to return the result
     * @param type Type to operate
     * @param types Identifier to the type
     */
    export async function doOperation(a: number, b: number, delay: number, type: string, types?: mathType): Promise<number>;
    /** 
     * ### Do a operation according to the type
     * 
     * @param a The first Number
     * @param b The second Number
     * @param type Type to operate
     */
    export async function doOperation(a: number, b: number, type: string): Promise<number>;
}