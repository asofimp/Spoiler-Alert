import './footer.scss'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="logo-container">
            <img className='logo' src="./spoilerAlert.png" alt="" />
        </div>
        <div className="redes">
            <FacebookIcon sx={{fontSize:'50px', margin:'1rem'}}/>
            <InstagramIcon sx={{fontSize:'48px', margin:'1rem'}}/>
        </div>
    </div>
  )
}

export default Footer