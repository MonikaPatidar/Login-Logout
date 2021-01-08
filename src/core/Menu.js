import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { signin, signout } from "../auth";
import {isAuthenticated } from '../auth/index'
import {getName } from '../auth/index';
import {definerole} from '../auth/index'
const isActive = (history, path) => {
 
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};
// const[Username,setUsername]=useState(" ");
// const getUsername=()=>{
//     setUsername(Username={getName});
// }

const Menu = ({ history}) => (
    
    <>
     
    <div>
         
        <ul className="nav nav-tabs bg-primary">
      
      
            <li className="nav-item">
                <Link
                    className="nav-link"
                    style={isActive(history, "/")}
                    to="/"
                >
                    Home
                </Link>
            </li>
        
            {!isAuthenticated() &&
            (
                <>
                   <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/Deshboard")}
                            to="/Deshboard"
                        >
                            desh
                        </Link>
                    </li>
                    

                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signin")}
                            to="/signin"
                        >
                            Signin
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/signup")}
                            to="/signup"
                        >
                            Signup
                        </Link>
                    </li>

                    
                </>
            )}
           
           
            {/* <li className="nav-item">
                <span
                    className="nav-link"
                    style={{ cursor: "pointer", color: "#ffffff" }}
                >
                 <p>hiii +{getName()}</p>
                </span>
            </li> */}
            {(isAuthenticated() && 
            <li className="nav-item">
                <span
                    className="nav-link"
                    style={{ cursor: "pointer", color: "#ffffff" }}
                    onClick={() =>
                        signout(() => {
                            history.push("/");
                        })
                    }
                >
                    Signout
                </span>
            </li>
            )}

            {isAuthenticated() && isAuthenticated.user.role===1(
                <>
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "./user/DeshBoard")}
                        to="/admin/dashboard"
                    >
                        Dashboard
                    </Link>
                </li>
            </>
            )}

            {isAuthenticated() && isAuthenticated().user.role===0(
                <>
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={isActive(history, "/")}
                        to="/"
                    >
                        Dashboard
                    </Link>
                </li>
            </>
            )}
       
            
        </ul>
    </div>
    </>
);

export default withRouter(Menu);
