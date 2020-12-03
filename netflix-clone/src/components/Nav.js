import React,{useEffect,useState} from 'react'
import "./Nav.css"
function Nav() {
    const [handleShow, setHandleShow] = useState(false)

    useEffect(() => {

        window.addEventListener("scroll", () =>{
            if (window.scrollY > 100){
            setHandleShow(true)
        
        }else{
            setHandleShow(false)
        }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])
    
    return (
        <div className={`nav ${handleShow && "nav_black"}`}>
            <img className="nav_image" src="https://res.cloudinary.com/teammates/image/upload/v1606470985/netflixlogo_lonoke.png" alt="Netflix"/>
            <img className="nav_profil" src="https://res.cloudinary.com/teammates/image/upload/v1606471167/icon_netflix_epdlco.png" alt="Profil"/>
        </div>
    )
}

export default Nav
// 