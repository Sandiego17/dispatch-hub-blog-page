import React, { useState } from 'react';
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
  // const [showNavButtons, setShowNavButtons] = useState(false);

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
            <li className={styles.navLinks}>{home}</li>
            <li className={styles.navLinks}>{aboutUs}</li>
            <li className={styles.navLinks}>{services}</li>
            <li className={styles.navLinks}>{contactUs}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}