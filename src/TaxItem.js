import Item from './Item';

// NÃO FICOU CLARO PARA MIM O POR QUE DE IMPLEMENTAR TAXITEM

export default class TaxItem extends Item {
    constructor(classCategory, description, price) {
        super(description, price);
        this.classCategory = new classCategory(this.description, this.price);
    }

    getTax() {
        const tax = this.classCategory.getTax();
        return tax;
    }
}