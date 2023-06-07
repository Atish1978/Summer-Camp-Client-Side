import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";


const SignUp = () => {

    const {createUser}=useContext(AuthContext);


    const handleSignUp=(event)=>{
        event.preventDefault();
        const form=event.target;
            const name=form.name.value;
            const email=form.email.value;
            const password=form.password.value;
            const photo=form.photo.value;
            const newValue={name, email, password, photo}
            console.log(newValue);

            createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
          })
          .catch((error) => {
            console.log(error)
          });
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
        </div>
    );
};

export default SignUp;