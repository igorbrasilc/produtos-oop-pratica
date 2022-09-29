import Item from "./Item";

export default class Beer extends Item {
    constructor(description, price) {
        super(description, price);
        this.taxRate = 0.2;
    }

    getTax() {
        return this.taxRate * this.price;
    }
}