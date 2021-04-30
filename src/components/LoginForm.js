import React from 'react'; 
import picture from '../pictures/loginheader.jpg'; 



export default class LoginForm extends React.Component {
    render() {
        return (
            <div className="form-input">
                <img src={picture} alt="cactus with computer"/> 
                <div className="header">
                    <p>Login</p>
                </div>
            <form>
               <div className="form-group text-center">
                   <label for="username">Username</label>
                   <input type="text" className="form-control" id="username"
                     aria-describedby="emailHelp" placeholder="Enter Username"></input>
               </div>
                    <div className="form-group text-center">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter Password"></input>
               </div>
                    <div className="text-center">
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
            </form>
            </div> 
  
        )
    }
}