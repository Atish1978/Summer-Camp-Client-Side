
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Swal from 'sweetalert2'
// import app from "../../firebase/firebase.config";


// const auth = getAuth(app);
const Login = () => {

    const { signIn, signInWithGoogle} = useContext(AuthContext);

    const [user, setUser] = useState(null);
    // const [error, setError] = useState('');
    // const [success, setSuccess] = useState('');
    const navigate=useNavigate();
    const location=useLocation();
    console.log(user);
   
    
    const from = location.state?.from?.pathname || "/";
    

      const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const newValue = { email, password }
        console.log(newValue);
        signIn(email, password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            Swal.fire({
              title: 'User Login Successful.',
              showClass: {
                  popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
              }
          });
            navigate(from, { replace: true });
        })
        .catch(error=>console.log(error));

        // setError('');
        // setSuccess('');

         // SignIn with Email:
    // signInWithEmailAndPassword(auth, email, password)
    // .then(result => {
    //   const loggedUser = result.user;
    //   console.log(loggedUser);
    //   setUser(loggedUser);
    //   setSuccess('User login successful.');
    //   setError('');
    // })
    // .catch(error => {
    //   setError(error.message);
    // })
}


         // SignIn with google:
  const handleGoogleSingIn = () => {
    signInWithGoogle()
      .then(result => {
        const loggedUser = result.user;
        setUser(loggedUser);
        navigate (from, {replace: true});
      })
      .catch(error => {
        console.log(error);
      })
  }
 
    
    return (
        <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handleLogin} className="w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                </div>
                <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                <div className='flex gap-4' >
                    <div className='mt-4 ms-52'>
                        <button onClick={handleGoogleSingIn} className="btn btn-outline btn-warning ">Signin with Google</button>
                    </div>
                   
                </div>
            </form>
            <p className='my-4 text-center'>New to This Site? Please  <Link className='text-orange-600 font-bold' to='/signup'>Sign Up</Link></p>
            {/* <p className='text-danger'>{error}</p>
      <p className='text-success'>{success}</p> */}
        </div>
    );
};

export default Login;