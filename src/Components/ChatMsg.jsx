import { ICON_URL } from "../constants" 
const ChatMsg = ({name,msg}) => {
  return (
    <div className="flex items-center shadow-sm p-2">
        <img 
        className="h-10"
        alt="user"
        src={ICON_URL}/>
        <span className="font-bold px-2">{name}</span>
        <span className="text-black">{msg}</span>
    </div>
  )
}

export default ChatMsg