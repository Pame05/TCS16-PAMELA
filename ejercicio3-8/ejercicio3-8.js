'Use strict'
class Product{
    constructor(description,price,stock){
        this.description=description;
        this.price=price;
        this.stock=stock
    }
    showInfo(){
        alert(`El producto ${this.description} tiene un precio de ${this.price} y en stock hay ${this.stock}`);

    }

    decreadeStock(reducirStock){
        if (reducirStock>this.stock) {
            alert(`Solo existen ${this.stock}`);
        }
        else{
            this.stock=this.stock-reducirStock;
        }
       
    }

    increaseStock(increaseQuantity){
        this.stock=this.stock+increaseQuantity;

    }

    updatePrice(newPrice){
        this.price = newPrice;
    }
}

let product = new Product ('pernos M6', '1 dolar',25);
product.decreadeStock(15)
product.showInfo()
product.increaseStock(20)
product.showInfo()
