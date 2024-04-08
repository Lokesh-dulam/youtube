import {useDispatch} from "react-redux"
import {closeMenu} from "../utils/appSlice"
import {useEffect} from "react"
import {useSearchParams} from "react-router-dom"
import CommentsContainer from "./CommentsContainer"
import LiveChat from "./LiveChat"
const WatchPage = () => {
  const [searchParams]=useSearchParams()
  const dispatch=useDispatch()
  useEffect(()=>{dispatch(closeMenu())},[])
  return (
    <div className="w-full">
      <div className="flex">
    <div className="m-3 p-2">
    <iframe className="justify-self-center w-[1130px] h-[500px]"
    src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
    title="YouTube video player" 
    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    </div>
    <div className="w-full">
      <LiveChat/>
    </div>
    </div> 
    <div>
      <CommentsContainer/>
    </div>
    </div>
  )
}
export default WatchPage