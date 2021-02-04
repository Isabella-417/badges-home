import React from "react";
import "./styles/PageLoading.css";

function PageError(props){
    return (
       <div className="PageLoading">
           {props.error.message}
       </div> 
    );
}

export default PageError;