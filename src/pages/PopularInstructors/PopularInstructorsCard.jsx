

const PopularInstructorsCard = ({instructor}) => {

    const {instructorImage, instructorName, sportsName, studentsNumber}=instructor;

 
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10 h-[300px]">
                <img src={instructorImage} alt="" className="rounded-full" width={150} height={150}/>
            </figure>
            <div className="card-body">
                <h2 className="text-3xl text-center">{instructorName}</h2>
                <h2 className="text-2xl mt-2 text-center">{sportsName}</h2>
                <h2 className="text-xl mt-2 text-center">Number of Students: {studentsNumber}</h2>
            </div>
        </div>
    );
};

export default PopularInstructorsCard;