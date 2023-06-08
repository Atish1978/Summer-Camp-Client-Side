

const ClassesAllCard = ({aclass}) => {
    const {sportsImage, sportsName, instructorName, availableSeats, price}=aclass;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={sportsImage} alt="" className="rounded-xl h-56" />
            </figure>
            <div className="card-body">
                <h2 className="text-3xl text-left">{sportsName}</h2>
                <h2 className="text-2xl text-left mt-2">Instructor: {instructorName}</h2>
                <h2 className="text-xl mt-2 text-left">Available Seats: {availableSeats}</h2>
                <h2 className="text-xl mt-2 text-left text">Pirce: ${price}</h2>
                <div className="card-actions mt-2">
                   <button className="btn btn-primary">Select</button>
                </div>

            
            </div>
        </div>
    );
};

export default ClassesAllCard;