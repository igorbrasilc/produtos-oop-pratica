import Item from "./Item";

export default class Eletronics extends Item {
    constructor(description, price) {
        super(description, price);
        this.taxRate = 0.3;
    }

    getTax() {
        return this.taxRate * this.price;
    }
}