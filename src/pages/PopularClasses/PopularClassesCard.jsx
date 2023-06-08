

const PopularClassesCard = ({pclass}) => {
    const {sportsImage, sportsName, studentsNumber}=pclass;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={sportsImage} alt="" className="rounded-xl h-56" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{sportsName}</h2>
                <h2 className="text-xl mt-2 text-left">Number of Students: {studentsNumber}</h2>
            
            </div>
        </div>
    );
};


export default PopularClassesCard;