import { useSelector } from "react-redux"
import {Link} from "react-router-dom"
const SideBar = () => {
  const isMenuOpen=useSelector(store=>store.app.isMenuOpen)
  if(!isMenuOpen) return null
  return (
    <div className="m-3 shadow-lg w-36 pl-3">
        <h1 className="font-bold pt-3">YOU</h1>
        <ul>
            <li><Link to="/">🏠  Home</Link></li>
            <li>🩳  Shorts</li>
            <li>📽️  Videos</li>
            <li>🤴  You</li>
        </ul>
        <h1 className="font-bold pt-4">Subscriptions</h1>
        <ul>
            <li>🏠  Home</li>
            <li>🩳  Shorts</li>
            <li>📽️  Videos</li>
            <li>🤴  You</li>
        </ul>
        <h1 className="font-bold pt-4">Watch Later</h1>
        <ul>
            <li>🏠  Home</li>
            <li>🩳  Shorts</li>
            <li>📽️  Videos</li>
            <li>🤴  You</li>
        </ul>
    </div>
  )
}

export default SideBar