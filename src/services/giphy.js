import axios from "axios";

const GIPHY_URL = "https://api.giphy.com/v1/gifs";
const API_KEY = "tAEFUgagRjRNkU24orQdFB8EHMcNTUSe";
const SEARCH_TERMS = ["cats", "dogs", "elephants", "lions", "monkeys"];


const getRandomSearchQuery = () => {
 const index = Math.floor(Math.random() * (SEARCH_TERMS.length - 1));
  return SEARCH_TERMS[index];
}


export const getRandomGif = async () => {
    try {
        const results = await axios(`${GIPHY_URL}/search`, {
          params: {
            api_key: API_KEY,
            q: getRandomSearchQuery(),
            limit: 1
          }
        });

        return results.data.data[0];
      } catch (err) {
        return err;
      }
}