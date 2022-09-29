import Item from "./Item";

export default class Water extends Item {
    constructor(description, price) {
        super(description, price);
        this.taxRate = 0;
    }

    getTax() {
        return this.taxRate * this.price;
    }
}