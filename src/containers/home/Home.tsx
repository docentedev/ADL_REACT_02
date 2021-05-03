import ProductList from '../../components/product-list/ProductList';
import productos from '../../productos';

const Home = () => {
    return (
        <div>
            <ProductList productos={productos} />
        </div>
    )
}

export default Home
