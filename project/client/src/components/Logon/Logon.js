
import React from "react";
// import "./Login.css";


const Logon = props => (

    <div>
        <h1>Who's Bad</h1>

        <div class="login">
            <div class="container">
                <div class="notification">
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input class="input" type="  email" placeholder=" Email" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div class="field">
                        <p class="control has-icons-left">
                            <input class="input" type=" password" placeholder=" Password" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div class="loginbtn" />
                    <div class="field is-grouped">
                        <p class="control">
                            <a class="button is-primary">
                                Login</a>
                        </p>
                        <div class="signUpbtn" />
                        <p class="control"><a class="button is-light">Sign Up</a></p>
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
<input class="text" id="email" name="email" type="text" />
<br />
 <label for="password">Password</label>
<br />
 <input name="password" id="password" type="password" />
<br  />
<button class="loginbtn" type="button">Login</button>

<button class="signUpbtn" type="button">Sign Up</button>
</form> */


