import React, {useState} from 'react';
 import { Link } from 'react-router-dom';
// import { useAuth } from '../context/auth-context';


export function Login(){
    const [classContainerSide, setClassContainerSide] = useState(true);


return(
    <React.Fragment>
    <h2>COME TO HANG OUT WITH US</h2>
<div className={`container ${classContainerSide === true && 'right-panel-active' }` }id="container">
	<div className="form-container sign-up-container">
		<form action="#">
			<h1>Create Account</h1>
			
			<span>or use your email for registration</span>
			<input type="text" placeholder="Name" />
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<button type="button">Sign Up</button>
		</form>
	</div>
	<div className="form-container sign-in-container">
		<form action="#">
			<h1>Sign in</h1>
			
			<span>or use your account</span>
			<input type="email" placeholder="Email" />
			<input type="password" placeholder="Password" />
			<Link to ="/">Forgot your password?</Link>
			<button type="button">Sign In</button>
		</form>
	</div>
	<div className="overlay-container"> 
		<div className="overlay">
			<div className="overlay-panel overlay-left">
				<h1>Welcome Back!</h1>
				<p>To keep connected with us please login with your personal info</p>
				<button className="ghost" id="signIn" onClick =  {()=>setClassContainerSide(!classContainerSide)}>Sign In</button>
			</div>
			<div className="overlay-panel overlay-right">
				<h1>Hello, Friend!</h1>
				<p>Enter your personal details and start journey with us</p>
				<button className="ghost" id="signUp" onClick =  {()=>setClassContainerSide(!classContainerSide)}>Sign Up</button>
			</div>
		</div>
	</div>
</div>


</React.Fragment>
)

}

