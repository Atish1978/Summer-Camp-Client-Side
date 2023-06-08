import PopularClasses from "../../PopularClasses/PopularClasses";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularClasses></PopularClasses>
           <Gallery></Gallery>
            
        </div>
    );
};

export default Home;