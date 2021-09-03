import "./message.css"
import {format} from "timeago.js"
export default function Message({message,own}) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img className="messageImg" 
                src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="" />
             <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBotoom">{format(message.createdAt)}</div>
        </div>
    )
}
