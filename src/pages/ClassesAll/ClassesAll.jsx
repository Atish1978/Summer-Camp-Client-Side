import { useEffect, useState } from "react";
import Banner from "../Home/Banner/Banner";
import ClassesAllCard from "./ClassesAllCard";


const ClassesAll = () => {
    const [classes, SetClasses]=useState([]);

    useEffect(()=>{
        fetch('https://summer-camp-server-eta.vercel.app/campdata')
        .then(res=>res.json())
        .then(data=>{
            SetClasses(data);
            
        })
        
    } , [])


    return (
        <div>
            <Banner></Banner>
            <div className="my-8">
        <div className="text-center">
            <h3 className='text-5xl'>All Classes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
                {
                    classes.map(aclass=><ClassesAllCard
                    key={aclass._id}
                    aclass={aclass}></ClassesAllCard>)
                }
            </div>
        </div>
        </div>
        </div>
    );
};

export default ClassesAll;