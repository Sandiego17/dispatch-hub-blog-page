import './Footer.css'

export const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerContainer'>
        <div className='footerBody'>
          <div className='footerLogo'>
            <img src={require('../../assets/logos/Logo.png')} className='footerLogo' alt='footer-logo' />
          </div>
          <div className='links'>
            <div className='linkSections'>
              <h3>Dispatch Hub</h3>
              <p>download</p>
              <p>states</p>
              <p>cities</p>
            </div>
            <div className='linkSections'>
              <h3>Partner with us</h3>
              <p>Courier</p>
              <p>Vehicle owner</p>
            </div>
            <div className='linkSections'>
              <h3>Company</h3>
              <p>About Dispatch Hub</p>
              <p>Blog</p>
            </div>
          </div>
        </div>
        <div className='buttons'>
          <div className='icons'>
            <button><img src={require('../../assets/icons/FACEBOOK ICON 1.png')} className='facebook' alt='facebook' /></button>
            <button><img src={require('../../assets/icons/X ICON 1.png')} className='x' alt='x' /></button>
            <button><img src={require('../../assets/icons/INSTAGRAM ICON 1.png')} className='instagram' alt='instagram' /></button>
            <button><img src={require('../../assets/icons/LIKEDI ICON 1.png')} className='linkedIn' alt='linkedIn' /></button>
          </div>
          <div className='track'>
            <button>Get the App</button>
            <button>Track</button>
          </div>
        </div>
        <div className='copyright'>
          <p>&#169; 2023 Dispatch Hub</p>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy</li>
            <li>Cookies</li>
            <li>Security</li>
          </ul>
        </div>
      </div>
    </div>
  )
}