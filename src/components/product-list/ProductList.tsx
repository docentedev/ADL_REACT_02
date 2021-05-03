import { Producto } from "../../productos"
import Product from "../product/Product"

interface ProductListProps {
    productos: Producto[];
}

const ProductList = ({ productos }: ProductListProps) => {
    return (
        <div>
            {productos.map((product: Producto, index: number) => (
                <Product key={index} product={product} />
            ))}
        </div>
    )
}

export default ProductList
