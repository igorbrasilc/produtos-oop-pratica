import Item from "./Item";

export default class Cigar extends Item {
    constructor(description, price) {
        super(description, price);
        this.taxRate = 0.25;
    }

    getTax() {
        return this.taxRate * this.price;
    }
}