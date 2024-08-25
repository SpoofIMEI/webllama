import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./css/app.css"
import { useState } from "react"

export default function Header() {
    const [mode, setMode] = useState(true)
    if (typeof window !== 'undefined') {
        document.documentElement.setAttribute('data-bs-theme',(mode?"dark":"light"))
    }
    return <nav className="navbar d-flex mx-4">
            <a href="https://github.com/R00tendo/webllama" target="blank"><b>Webllama</b></a>
            <div className="grow-1"></div>
            <button onClick={()=>setMode(!mode)} style={{border: "none", background: "none", color: "var(--bs-body-color)"}}>
                {mode?
                    <i style={{fontSize: "25px"}} className="bi bi-sun-fill"></i>:
                    <i style={{fontSize: "25px"}} className="bi bi-moon-fill"></i>}
            </button>
        </nav>
}