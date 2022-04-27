import React, {useEffect, useState} from "react";
import { getRandomGif } from "./services/giphy";
import "./App.css";
import Loader from "./components/loader/loader.jsx";
import GifCard from "./components/gifCard/gifCard.jsx";

const App = () => {
  const [gif, setGif] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const generateGif = () => {
    getRandomGif().then(response => {
      setGif(response);
      setIsLoading(false);
    }).catch(err => {
      setIsError(true);
    });
  }

  useEffect(() => {
    generateGif();
  }, []);

  if(isLoading) return <Loader />

  return (
    <GifCard title={gif.title} src={gif.images.fixed_height.url} altText={gif.title} onClick={generateGif}/>
  );
};

export default App;
