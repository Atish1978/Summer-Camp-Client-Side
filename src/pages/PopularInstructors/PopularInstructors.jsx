import { useEffect, useState } from "react";
import PopularInstructorsCard from "./PopularInstructorsCard";


const PopularInstructors = () => {
    const [instructors, SetInstructors]=useState([]);

    useEffect(()=>{
        fetch('classes.json')
        .then(res=>res.json())
        .then(data=>{
            SetInstructors(data.slice(0, 6));
            
        })
        
    } , [])
    return (
        <div className="my-6">
        <div className="text-center">
            <h3 className='text-5xl'>Popular Instructors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
                {
                    instructors.map(instructor=><PopularInstructorsCard
                    key={instructor._id}
                    instructor={instructor}></PopularInstructorsCard>)
                }
            </div>
        </div>
        </div>
    );
};
export default PopularInstructors;