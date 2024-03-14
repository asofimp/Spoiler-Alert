import { Link } from "react-router-dom"
import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="">
          <img className="logo" src="./spoilerAlert.png" alt="" />
        </div>
        <div className="links">
            <Link to={'/'} style={{textDecoration:'none'}}>
                <div className="link">Home</div>
            </Link>

            <Link to={'movie'} style={{textDecoration:'none'}}>
                <div className="link">Movie</div>
            </Link>

            <Link to={'serie'} style={{textDecoration:'none'}}>
                <div className="link">Serie</div>
            </Link>
        </div>

    </div>
  )
}

export default Navbar