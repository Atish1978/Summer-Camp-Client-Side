import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import Swal from "sweetalert2";
import {useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const ClassesAllCard = ({aclass}) => {
    const {sportsImage, sportsName, instructorName, availableSeats, price, _id}=aclass;
    const {user} =useContext(AuthContext);
    const [, refetch] = useCart();
    console.log(user);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToClass=(aclass)=>{
        console.log(aclass);
        if(user && user.email){
            const classInfo = { classId: _id, sportsImage, sportsName, availableSeats, price, email: user.email}
            fetch('http://localhost:5000/selectedclass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(classInfo)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch(); 
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Class added on the cart.',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to add Classes',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login', {state: {from: location}})
                }
              })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={sportsImage} alt="" className="rounded-xl h-56" />
            </figure>
            <div className="card-body">
                <h2 className="text-3xl text-left">{sportsName}</h2>
                <h2 className="text-2xl text-left mt-2">Instructor: {instructorName}</h2>
                <h2 className="text-xl mt-2 text-left">Available Seats: {availableSeats}</h2>
                <h2 className="text-xl mt-2 text-left text">Pirce: $ {price}</h2>
                <div className="card-actions mt-2">
                   <button onClick={()=>handleAddToClass(aclass)} className="btn btn-primary">Select</button>
                </div>

            
            </div>
        </div>
    );
};

export default ClassesAllCard;