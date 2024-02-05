import styles from './Header.module.css'

interface NavBarProps {
  home: string;
  aboutUs: string;
  services: string;
  contactUs: string;
  showNavButtons: boolean;
  setShowNavButtons: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Header = ({
  home,
  aboutUs,
  services,
  contactUs,
  showNavButtons,
  setShowNavButtons
}: NavBarProps) => {

  const toggleNavButtons = () => {
    setShowNavButtons(!showNavButtons)
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerElements}>
        <div className={styles.logo}>
          <img
            src={require('../../assets/logos/Dispatch hub logo 1.png')}
            className={styles.blogLogo}
            alt='Blog Logo'
          />
        </div>

        <div className={styles.searchBar}>
          <img
            src={require('../../assets/icons/Search Icon.png')}
            className={styles.searchIcon}
            alt='Search Icon'
          />
          <input className={styles.searchBarInput} type='text' placeholder='Search' />
        </div>

        <button className={styles.menu} onClick={toggleNavButtons}>
          <h1>Menu</h1>
          <div className={styles.dropdownButton}>
            <img
              src={require('../../assets/icons/Dropdown.png')}
              className={styles.dropdown}
              alt='menuDropdown'
            />
          </div>
        </button>

        <div className={`${styles.navButtons} ${showNavButtons ? styles.show : ''}`}>
          <div className={styles.searchBar}>
            <img
              src={require('../../assets/icons/Search Icon.png')}
              className={styles.searchIcon}
              alt='Search Icon'
            />
            <input className={styles.searchBarInput} type='text' placeholder='Search' />
          </div>
          <ul>
            <a href='#' className={styles.navLinks}><li>{home}</li></a>
            <a href='#' className={styles.navLinks}><li>{aboutUs}</li></a>
            <a href='#' className={styles.navLinks}><li>{services}</li></a>
            <a href='#' className={styles.navLinks}><li>{contactUs}</li></a>
          </ul>
        </div>
      </div>
    </div>
  )
}