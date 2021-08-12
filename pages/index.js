import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Products from './../components/products/Products';
import CartComponent from './../components/cart/Cart';


const Home = () => {
    return (
        <div>
            <Header />
            <Products/>
            <CartComponent/>
            <Footer/>
        </div>
    );
};

export default Home;
