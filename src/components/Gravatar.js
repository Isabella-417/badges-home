import React from "react";
import md5 from "md5";

import "../global.css";

function Gravatar(props){
    const email = props.email;
    const hash = md5(email);

    return(
        <img className="profile-picture" src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} alt="profile" width="120" />
    )
}

export default Gravatar;