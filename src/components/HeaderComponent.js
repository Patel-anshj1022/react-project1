import { useState } from "react"
import "./HeaderComponent.css"
import { Link } from "react-router-dom"

const HeaderComponent = () => {
    const [links] = useState([
        "Home",
        "About",
        "Contact",
        "Auth"
    ])
    return(
        <header>
            {links.map((li, key) =>{
                return(
                    <div key={key}>
                        <Link className="nav-links" to={`/${li}`}>{li}</Link>
                    </div>
                )
            })}
        </header>
    )
}

export default HeaderComponent