

const PopularClassesCard = ({pclass}) => {
    const {_id, sportsImage, sportsName, studentsNumber, availableSeats}=pclass;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={sportsImage} alt="" className="rounded-xl h-56" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{sportsName}</h2>
               
                <div className="card-actions">
                   <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};


export default PopularClassesCard;