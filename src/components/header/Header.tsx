import styles from './Header.module.css'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerElements}>
        <div className={styles.logo}>
          <img src={require('../../assets/logos/Dispatch hub logo 1.png')} className={styles.blogLogo} alt='Blog Logo' />
        </div>

        <div className={styles.searchBar}>
          <img src={require('../../assets/icons/Search Icon.png')} className={styles.searchIcon} alt='Search Icon' />
          <input className={styles.searchBarInput} type='text' placeholder='Search' />
        </div>

        <button className={styles.menu}>
          <h1>Menu</h1>
          <div className={styles.dropdownButton}>
            <img src={require('../../assets/icons/Dropdown.png')} className={styles.dropdown} alt='menuDropdown' />
          </div>
        </button>
      </div>
    </div>
  )
}