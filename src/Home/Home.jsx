import Banner from "./Shared/Banner";
import Gallery from "./Shared/Gallery";
import ProductsCard from "./Shared/ProductsCard";
import Teams from "./Shared/Teams";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <ProductsCard></ProductsCard>
            <Teams></Teams>
        </div>
    );
};

export default Home;