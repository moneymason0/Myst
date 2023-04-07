import React, { useState } from 'react'
// import './Header.css'

// these components will be top down in ascending order of size.



// The drop down that happens on hover over text buttons in header 
const ButtonDropDowns = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <select value={selectedOption} onChange={handleChange}>
        <option value="home">Main Page</option>
        <option value="discovery queue">Explore</option>
        <option value="wish list">My Wishlist</option>
        <option value="points shop">Rewards Store</option>
        <option value="news">Latest News</option>
        <option value="stats">Statistics</option>
      </select>
    </>
  );
};




// buttons have a text parameter for what is displayed and a showDropdown boolean to determine if we want to show a drop down on them
const HeaderTextButtons = ({ text, showDropdown }) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
setIsHovering(false)
  }


  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a type="submit" > {text}</a>
      {showDropdown && isHovering && <ButtonDropDowns />}
    </div>
  );
};


function Header() {
    return (
      <>
      <img src ="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"></img>
      <HeaderTextButtons text="STORE" showDropdown={true}/>
      <HeaderTextButtons text="COMMUNITY" showDropdown={true}/>
      <HeaderTextButtons text="ABOUT"/>
      <HeaderTextButtons text="SUPPORT"/>
   
      </>
    );
  }

export default Header;