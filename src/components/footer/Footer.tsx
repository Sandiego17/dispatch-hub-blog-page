import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerBody}>
          <div className={styles.footerLogo}>
            <img src={require('../../assets/logos/Logo.png')} className={styles.footerLogo} alt='footer-logo' />
          </div>
          <div className={styles.links}>
            <div className={styles.linkSections}>
              <h3>Dispatch Hub</h3>
              <p>download</p>
              <p>states</p>
              <p>cities</p>
            </div>
            <div className={styles.linkSections}>
              <h3>Partner with us</h3>
              <p>Courier</p>
              <p>Vehicle owner</p>
            </div>
            <div className={styles.linkSections}>
              <h3>Company</h3>
              <p>About Dispatch Hub</p>
              <p>Blog</p>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <div className={styles.icons}>
            <button><img src={require('../../assets/icons/FACEBOOK ICON 1.png')} className={styles.facebook} alt='facebook' /></button>
            <button><img src={require('../../assets/icons/X ICON 1.png')} className={styles.x} alt='x' /></button>
            <button><img src={require('../../assets/icons/INSTAGRAM ICON 1.png')} className={styles.instagram} alt='instagram' /></button>
            <button><img src={require('../../assets/icons/LIKEDI ICON 1.png')} className={styles.linkedIn} alt='linkedIn' /></button>
          </div>
          <div className={styles.track}>
            <button>Get the App</button>
            <button>Track</button>
          </div>
        </div>
        <div className={styles.copyright}>
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