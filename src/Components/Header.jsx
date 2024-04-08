import {ICON_URL, MENU_URL, YTICON_URL} from "../constants"
import {useDispatch,useSelector} from "react-redux"
import {toggleMenu} from "../utils/appSlice"
import {useState,useEffect} from "react"
import {YT_SEARCH_API} from "../constants"
import {cacheResults} from "../utils/searchSlice"
const Header = () => {
  const[searchQuery,setSearchQuery]=useState("")
  const[suggestions,setSuggestions]=useState([])
  const[showSuggestions,setShowSuggestions]=useState(false)
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
   useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugsestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugsestions = async () => {
    const data = await fetch(YT_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
    const toggleMenuHandler=()=>{
        dispatch(toggleMenu())
    }
  return (
    <div className="flex justify-between shadow-lg"> 
    <div className="flex">
        <img
        onClick={()=>toggleMenuHandler()}
        className="pl-3 h-12 w-12 pt-4 cursor-pointer"
        alt="ham-icon"
        src={MENU_URL}
        />
        <a href="/">
        <img
        className="cursor-pointer h-16 w-[100px]"
        alt="YT-icon"
        src={YTICON_URL}
        /></a></div>
        <div className="pt-5">
        <div>
          <input
            className="px-5 w-96 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed  bg-gray-100 py-2 px-2 w-[24rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-200">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
        <div>
        <img 
        className="h-12 m-3 pr-6"
        alt="icon-icon"
        src={ICON_URL}
        /></div>
        </div>
  )
}
export default Header