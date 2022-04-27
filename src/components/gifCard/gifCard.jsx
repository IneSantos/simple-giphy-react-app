import React from "react";
import Gif from "../gif/gif.jsx";
import "./gifCard.css";

const GifCard = (props) => {
    const { title, src, altText, onClick } = props;
    return  (
        <div className="gif-card-wrapper">
            <div className="gif-card-container" onClick={onClick}>
                <Gif src={src} altText={altText}/>
                <label className="gif-label">{title}</label>
            </div>
        </div>
    )
  }
  
  export default GifCard;