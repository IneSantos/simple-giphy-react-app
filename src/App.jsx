import React, {useEffect, useState} from "react";
import { getRandomGif } from "./services/giphy";
import "./App.css";
import GifCard from "./components/GifCard";

const App = () => {
  const [gif, setGif] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRandomGif().then(response => {
      setGif(response);
      console.log(response)
      setIsLoading(false);
    });
  }, []);

  return (
    <div>
      {!isLoading && <GifCard title={gif.title} src={gif.images.fixed_height.url} altText={gif.title}/>}
    </div>
  );
};

export default App;
