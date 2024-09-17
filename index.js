import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import {IMG_CDN_URL } from "./config";
import RestrauntCard from "./RestrauntCard";
import {restrauntList} from './config';

/*
   Header
     -Logo(Title)
     -Nav Items(Right side)
     Cart

    Body
     -SearchBar
     -RestrauntList
        -RestrauntCard(many cards)
           -image
           -Name 
           -rating
           -Cusines
         
    Footer
     - FooterText
     -links
     -copyright text       


*/


const AppLayout = () => {
    return(
         <>
           <Header/>
           <Body/>
           <Footer/>
         </>  
    );

};

const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(<AppLayout />); 