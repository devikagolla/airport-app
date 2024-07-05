import {Image} from '@adobe/react-spectrum'
import './index.css'

const Header = () => (
  <div className='header-container'>
    <h1 className='heading'>hava havai</h1>
    <Image
      src='https://res.cloudinary.com/dbusahm1c/image/upload/v1720117259/hava_havai_ssils7.jpg'
      alt='website-logo'
      width='40px'
      height='40px'
      margin='20px 20px 5px 0px'
    />
  </div>
)
export default Header
