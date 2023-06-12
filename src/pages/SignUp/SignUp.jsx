import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import Swal from 'sweetalert2'


const SignUp = () => {
    
    const [error, setError]=useState('');
    // const [user, setUser]=useState('');

    const {createUser}=useContext(AuthContext);
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";


    const handleSignUp=(event)=>{
        event.preventDefault();
        const form=event.target;
            const name=form.name.value;
            const email=form.email.value;
            const password=form.password.value;
            const confirm=form.confirm.value;
            const photo=form.photo.value;
            const newValue={name, email, password, photo, confirm}
            console.log(newValue);
            if (!/(?=.*[A-Z])/.test(password)){
                setError('Please add at least one Upper Case.');
                return
            }
            else if (!/(?=.*[@$!%*#?&])/.test(password)){
                setError('Please add a Special Character.');
                return
            }

            else if (password.length<6){
                setError('Password must be 6 characters.')
                return
            }
     
            if(password!==confirm){
                setError('Your password did not match');
                return;
            }
           

            createUser(email, password)
        .then(result=>{
            const loggedUser=result.user;
            console.log(loggedUser);
            // setUser(loggedUser);
            // const saveUser = { name:name, email: email }
            fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(loggedUser)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                      
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(from, { replace: true });
                    }
                })
        })
        .catch(error=>{
            console.log(error);
            setError(error.message);
        })

       
    }
    return (
        <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSignUp} className="w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text mb-2">Name</span>
                    </label>
                    <input type="text" name='name' placeholder="name" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text mb-2">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text mb-2">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text mb-2">Confirm Password</span>
                    </label>
                    <input type="password" name='confirm' placeholder="password" className="input input-bordered" required/>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text mb-2">Photo URL</span>
                    </label>
                    <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                </div>
                <div className="form-control"></div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Sign Up" />
                </div>
            </form>
            <p className='my-4 text-center'>Already have an account?  <Link className='text-orange-600 font-bold' to='/login'>login</Link></p>
            <p className='text-error text-center'>{error}</p>
           
        </div>
    );
};

export default SignUp;