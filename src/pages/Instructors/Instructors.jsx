import { useEffect, useState } from "react";
import Banner from "../Home/Banner/Banner";

import InstructorAllCard from "./InstructorAllCard";


const Instructors = () => {
    const [instructors, SetInstructors]=useState([]);

    useEffect(()=>{
        fetch('classes.json')
        .then(res=>res.json())
        .then(data=>{
            SetInstructors(data);
            
        })
        
    } , [])


    return (
        <div>
            <Banner></Banner>
            <div className="my-8">
        <div className="text-center">
            <h3 className='text-5xl'>All Instructors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
                {
                    instructors.map(instructor=><InstructorAllCard
                    key={instructor._id}
                    instructor={instructor}></InstructorAllCard>)
                }
            </div>
        </div>
        </div>
        </div>
    );
};

export default Instructors;