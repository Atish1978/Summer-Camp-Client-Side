import { useEffect, useState } from "react";

import PopularClassesCard from "./PopularClassesCard";


const PopularClasses = () => {
    const [data, SetData]=useState([]);

    useEffect(()=>{
        fetch('https://summer-camp-server-eta.vercel.app/campdata')
        .then(res=>res.json())
        .then(data=>{
            SetData(data);
        })
    } , [])

    const compareClasses = (a, b) => {
        const maxStudentsA = a.studentsNumber;
        const maxStudentsB = b.studentsNumber;
        return maxStudentsB - maxStudentsA;
      };
    
      const sortedData = [...data].sort(compareClasses).slice(0, 6);


    return (
        <div className="my-6">
        <div className="text-center">
            <h3 className='text-5xl'>Popular Classes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
                {
                    sortedData.map(pclass=><PopularClassesCard
                    key={pclass._id}
                    pclass={pclass}></PopularClassesCard>)
                }
            </div>
        </div>
        </div>
    );
};

export default PopularClasses;