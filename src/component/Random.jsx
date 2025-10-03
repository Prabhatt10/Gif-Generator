import Spinner from './Spinner'
import useGif from "../hooks/useGif";

function Random() {
//   const [gif, setGif] = useState("");
//   const [loading,setLoading] = useState(false);

//   async function fetchData() {
//     setLoading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//     const { data } = await axios.get(url);
//     const imageUrl = data.data.images.downsized_large.url;
//     setGif(imageUrl);
//     setLoading(false);
//   }

//   useEffect(()=> {
//     fetchData();
//   }, [])

  const {gif,loading,fetchData} = useGif();

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">A Random Gif</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} alt="Random Gif" width="450" />)
      }
      <button
        onClick={clickHandler}
        className="w-11/12 bg-white opacity-75 text-lg py-2 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
}

export default Random;
