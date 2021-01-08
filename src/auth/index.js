import { API } from "../config";
import AdminPage from "../core/AdminPage";

export const signup = user => {
    return fetch(`${API}/signup`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const signin = user => {
    return fetch(`${API}/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const authenticate = (data, next) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("token", JSON.stringify(data));
        next();
    }
};

export const signout = next => {
    if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        next();
        return fetch(`${API}/signout`, {
            method: "GET"
        })
            .then(response => {
                console.log("signout", response);
            })
            .catch(err => console.log(err));
    }
};

export const isAuthenticated = () => {
    if (typeof window == 'undefined') {
        return false;
    }
    if (localStorage.getItem('token')) {
        console.log("isAuth" + JSON.stringify(localStorage.getItem('token')));
        return JSON.parse(localStorage.getItem('token'));
        
    } else {
        return false;
    }
};
// export const getName=()=>{
//     if (typeof window == 'undefined') {
//         return false;
//     }
//     if (localStorage.getItem('name')) {
//         return JSON.parse(localStorage.getItem('name'));
//     } else {
//         return false;
        
//     }

// }

// export const getName =() => {
//        fetch(`${API}/userName/5fe29644445f0915a8217269`, {
//             method: "Get", 
            
//         })
//         return response.json()
//     }
        

// export const getName = () => {
//     if (typeof window == 'undefined') {
//         return false;
//     }
//     if (localStorage.getItem('name')) {
//         return name(JSON.parse(localStorage.getItem('name')));
//     } else {
//         return false;
//     }
// };
export const definerole=(d)=>{
    const data=JSON.stringify(d.role);
    console.log(data);
    return data;
}