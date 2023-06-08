import PopularClasses from "../../PopularClasses/PopularClasses";
import PopularInstructors from "../../PopularInstructors/PopularInstructors";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <PopularClasses></PopularClasses>
           <PopularInstructors></PopularInstructors>
           <Gallery></Gallery>
            
        </div>
    );
};

export default Home;