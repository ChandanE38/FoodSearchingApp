import { useState} from "react";
const LoggedInUser = () => {
    // API call to check LoggedIn
    //if it is success then return true
    //if it is false then return false
}

const Title =() => (
    <a href="/">
        <img
           className="logo"
           alt="logo"
           src="https://i.pinimg.com/originals/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
        /> 

    </a>   
);


const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div className="header">
            
            <Title />
            <div className="nav-items">
               <ul>
                   <li>Home</li>
                   <li>About</li>
                   <li>Contact</li>
                   <li>Cart</li>
               </ul>
               
            </div>
            {
              isLoggedIn ? (
                <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
              ) : (
                <button onClick={()=>setIsLoggedIn(true)}>Login </button>
              )
            }
            
           
        </div>

    );
}; 

//we need to exprt the folder for import in anather folder or file
//so we export the file this way.

export default Header;