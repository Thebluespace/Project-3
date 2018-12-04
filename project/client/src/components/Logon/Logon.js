
import React from "react";
// import "./Login.css";


const Logon = props => (

    <div>
<<<<<<< HEAD:project/client/src/components/Logon/Logon.js
        <h1>Who's Bad</h1>
=======
        <video autoplay loop id="video-background" muted plays-inline>
            <source src="https://player.vimeo.com/external/287831458.sd.mp4?s=ea1c5ae2328fb88b03335bd198970d9736c271e7&profile_id=165" type="video/mp4" />
        </video>
        <h1 className="title"> WHO'S BAD? </h1>
>>>>>>> 48fe3d8fb6bbb3ed45d5a3c04b7bfaa9795bd353:project/client/src/components/Login/Login.js

        <div className="login">
            <div className="wrapper">
                <div className="notification">
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input className="input" type="  email" placeholder=" Email" >
                                <span className="icon is-small is-left">
                                    <i className="fas fa-envelope"></i>
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fas fa-check"></i>
                                </span>
                            </input>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type=" password" placeholder=" Password" />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div className="loginbtn" />
                    <div className="field is-grouped">
                        <p className="control">
                            <a className="button is-primary">
                                Login</a>
                        </p>
                        <div className="signUpbtn" />
                        <p className="control"><a className="button is-light">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Logon;






/* <form id="signinform" name="signin">
<label for="email">Email Address</label>
<br />
<input className="text" id="email" name="email" type="text" />
<br />
 <label for="password">Password</label>
<br />
 <input name="password" id="password" type="password" />
<br  />
<button className="loginbtn" type="button">Login</button>

<button className="signUpbtn" type="button">Sign Up</button>
</form> */


