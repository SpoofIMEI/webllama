"use server";
import config from "../../webllama.json"

let msg = ""
let convos = {}

setInterval(()=>{
    for (const [id, session] of Object.entries(convos)) {
        let current = new Date().getTime()
        if (current-session["lastmessage"]>60_000*10) {
            delete convos[id]
        }
    }
}, 1000)

export async function message(event) {
    if (event === undefined) {
      return msg
    }
    let ses = event.get('session')
    if (!ses.match(/[a-z0-9+\-]{36}/g)) {
        console.log("no match")
        return
    }
    if (convos[ses] === undefined) {
        convos[ses] = {
            "model": config["model"],
            "messages": []
        }
    }
    msg = event.get("message")
    convos[ses]["messages"].push({
        "role": "user",
        "content": msg,
    })
    if (msg.length>50000) {
        return "Too long message"
    }
    convos[ses]["lastmessage"] = new Date().getTime()
    try {
        let rawRes = await fetch("http://localhost:11434/api/chat", {
            method: "POST",
            body: JSON.stringify({
                "model": convos[ses]["model"],
                "messages": convos[ses]["messages"],
                "stream": false,
            })
        })
        let res = await rawRes.json()
        convos[ses]["messages"].push(res["message"])
        return res["message"]["content"]
    } catch(err) {
        console.log(err)
        return "Error occured"
    }
}