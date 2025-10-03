import axios from "axios";
import { useState, useEffect } from "react";
import Spinner from './Spinner'
import useGif from "../hooks/useGif";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

function Tag() {
//   const [gif, setGif] = useState("");
//   const [loading,setLoading] = useState(false);
  const [tag,setTag] = useState('');

//   async function fetchData() {
//     setLoading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//     const { data } = await axios.get(url);
//     const imageUrl = data.data.images.downsized_large.url;
//     setGif(imageUrl);
//     setLoading(false);
//   }

//   useEffect(()=> {
//     fetchData();
//   }, [])
  const {gif,loading,fetchData} = useGif(tag);

  function clickHandler() {
    fetchData(tag);
  }

  function changeHandler(event){
    setTag(event.target.value);
  }

  return (
    <div className="w-1/2  bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className="mt-[15px] text-2xl underline uppercase font-bold">Random {tag} Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} alt="Random Gif" width="450" />)
      }
      <input
        className="w-11/12 bg-white opacity-75 text-lg py-2 rounded-lg mb-[6px] text-center "
        onChange={changeHandler}
        value={tag}
      />
      <button
        onClick={clickHandler}
        className="w-11/12 bg-white opacity-75 text-lg py-2 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
}

export default Tag;
