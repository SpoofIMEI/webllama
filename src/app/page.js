"use client"
import './css/app.css';
import { useRef, useState } from "react"
import { message } from './backend';
import Header from './Header';

const sessionId = crypto.randomUUID()
export default function Home() {
    const [messages, setMessages] = useState([<p key={0}>Say something to the AI, for example &apos;hello&apos;!</p>])
    let loading = false
    function sendMessage(event) {
        if (event.get('message').length === 0) {return}
        if (loading) {return}; loading = true
        document.getElementById("messageform").reset()

        let _messages = []
        let newline = event.get('message').includes('\n')
        _messages.push(<b>{"you: "+(newline?'\n':'')+event.get('message')}</b>)
        setMessages(messages.concat(_messages))
        document.getElementById("loading").classList.add("spinner-grow")
        message(event).then((res) => {
            _messages.push(<p>{(newline?'\n':'')+res}</p>)
            document.getElementById("loading").classList.remove("spinner-grow")
            setMessages(messages.concat(_messages))
            loading = false
        })
    }
    
    let msgRef = useRef()

    const onEnterPress = (e) => {
        if(e.keyCode === 13 && e.shiftKey === false) {
          e.preventDefault();
          msgRef.requestSubmit();
        }
      }
      
    return <div className='p-2'>
        <Header></Header>
        <div className="aibox">
            <div>
                <br></br>
                {messages.map(message => message)}
                <div id="loading"></div>
            </div>
        </div>
        <form className='m-1' id="messageform" action={sendMessage} ref={el => msgRef = el}>
            <textarea onKeyDown={onEnterPress} 
            id="messageinput" 
            name="message" 
            className="form-control"
            placeholder='new message'></textarea>
            <input hidden readOnly name="session" value={sessionId}></input>
        </form>
    </div> 
}