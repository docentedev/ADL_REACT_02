import productos, { Producto } from '../../productos';

const Home = () => {
    return (
        <div>
            {productos.map((producto: Producto, index: number) => (
                <div key={index}>
                    <strong>{producto.nombre}</strong>
                </div>
            ))}
        </div>
    )
}

export default Home
