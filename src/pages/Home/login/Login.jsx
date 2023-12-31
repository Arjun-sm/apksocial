import "./login.css"

export default function Login() {
  return (
    <div>
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo"> Apksocial</h3>
                    <span className="loginDesc">
                        Connect with friends and the world arround you on Apksocial.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                         <input placeholder="Email" className="loginInput" />
                         <input placeholder="Password" className="loginInput" />

                         <button className="loginButton">Log In</button>
                         <span className="loginForgot">
                            Forget Password?

                         </span>
                         <button className="loginRegisterButton">Creat a New Account</button>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}
