export default class Item {
    constructor(description, price) {
        if (this.constructor === Item) {
            throw new Error("Item class can't be instantiated");
        };
        this.description = description;
        this.price = price;
    }

    getTax() {
        throw new Error("Method 'getTax()' must be implemented.");
    }
}