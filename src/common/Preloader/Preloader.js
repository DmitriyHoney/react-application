import React from "react";
import defaultPreloader from '../../assets/image/preloader.svg';

const Preloader = (props) => {
    return(
        <div>
            <img src={defaultPreloader} alt="Preloader"/>
        </div>
    )
}

export default Preloader;