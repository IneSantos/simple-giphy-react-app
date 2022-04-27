import React from "react";
import Gif from "./Gif";

const GifCard = (props) => {
    const { title, src, altText } = props;
    return  (
        <div>
            <Gif src={src} altText={altText}/>
            <label>{title}</label>
        </div>
    )
  }
  
  export default GifCard;