import { Producto } from "../../productos"

interface ProductProps {
    product: Producto
}

const Product = ({ product }: ProductProps) => {
    return (
        <div>
            <strong>{product.nombre}</strong>
            <hr />
        </div>
    )
}

export default Product
