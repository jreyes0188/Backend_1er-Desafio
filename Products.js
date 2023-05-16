class ProductManager {
    constructor() {
        this.products = [];
        this.newID = 1
    }

    getProduct() {
        return this.products;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const productExists = this.products.find((product) => product.code === code
        );
        if (productExists) {
            console.log(`ERROR..!! El codigo ${code} ya existe`)
            return;
        }

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log(
                `Se debe completar toda la informacion del ${title} que se esta ingresando`
            )
        } else {

            const product = {
                id: this.newID++,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            }
            this.products.push(product)
            {
                console.log(`El producto ${product.title} fue agregado`)
            }
        }
    }
    getProductById(id) {
        const productId = this.products.find((product) => product.id === id)
        {
            if (!productId) {
                console.log(`El ID numero ${id} de producto NO existe`)
            } else {
                console.log(`El producto con el ID ${id} se encontro`)
                return productId
            }
        }
    }
}

const product = new ProductManager()
product.addProduct(`Producto_Prueba_1`, `Prodcuto_de_Prueba`, 200, `No_Image`, `abc123`, 25)
// Se agrega el producto

product.addProduct(`Producto_Prueba_2`, `Prodcuto_de_Prueba`, 200, `No_Image`, `abc123`, 25)
// Producto con mismo codigo ---> ERROR..!!

product.addProduct(`Producto_Prueba_3`, `Prodcuto_de_Prueba`, 200, `No_Image`)
// Producto con la informacion imcompleta al tratar de agregarse

console.log(product.getProduct());

product.getProductById(1);