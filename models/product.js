class Product {
    constructor (id, code, title, imageUrl, price, quantity, description, categoryId, isInCart) {
        this.id = id,
        this.code = code,
        this.title = title, 
        this.imageUrl = imageUrl,
        this.price = price,
        this.quantity = quantity,
        this.description = description,
        this.categoryId =categoryId,
        this.isInCart = isInCart
    }
}

export default Product;