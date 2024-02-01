import './Header.css';

export const Header = () => {
  return (
    <div className='header'>
      <div className='headerElements'>
        <div className='logo'>
          <img src={require('../../assets/logos/Dispatch hub logo 1.png')} className='blogLogo' alt='Blog Logo' />
        </div>

        <div className='searchBar'>
          <img src={require('../../assets/icons/Search Icon.png')} className='searchIcon' alt='Search Icon' />
          <input className='searchBarInput' type='text' placeholder='Search' />
        </div>

        <div className='menu'>
          <h1>Menu</h1>
          <button className='dropdownButton'>
            <img src={require('../../assets/icons/Dropdown.png')} className='dropdown' alt='menuDropdown' />
          </button>
        </div>
      </div>
    </div>
  )
}