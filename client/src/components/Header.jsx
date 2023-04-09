import React, { useState } from 'react';

const storeDropDown = ['HOME', 'DISCOVERY QUEUE', 'WISHLIST', 'POINTS SHOP', 'NEWS', 'STATS'];
const communityDropDown = ['HOME', 'DISCUSSION', 'WORKSHOP', 'MARKET', 'BROADCASTS'];
const languagesDropDown = [
  "简体中文 (Simplified Chinese)",
  "繁體中文 (Traditional Chinese)",
  "日本語 (Japanese)",
  "한국어 (Korean)",
  "ไทย (Thai)",
  "Български (Bulgarian)",
  "Čeština (Czech)",
  "Dansk (Danish)",
  "Deutsch (German)",
  "Español - España (Spanish - Spain)",
  "Español - Latinoamérica (Spanish - Latin America)",
  "Ελληνικά (Greek)",
  "Français (French)",
  "Italiano (Italian)",
  "Magyar (Hungarian)",
  "Nederlands (Dutch)",
  "Norsk (Norwegian)",
  "Polski (Polish)",
  "Português (Portuguese - Portugal)",
  "Português - Brasil (Portuguese - Brazil)",
  "Română (Romanian)",
  "Русский (Russian)",
  "Suomi (Finnish)",
  "Svenska (Swedish)",
  "Türkçe (Turkish)",
  "Tiếng Việt (Vietnamese)",
  "Українська (Ukrainian)",
  "Report a translation problem"
];


const DropDowns = ({ dropDownList }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const renderDropDownList = dropDownList.map((listItem, index) => (
    <option key={index}>{listItem}</option>
  ));

  return (
    <>
      <select value={selectedOption} onChange={handleChange}>
        {renderDropDownList}
      </select>
    </>
  );
};

const HeaderTextButtons = ({ text, showDropdown, listDisplayed }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a type="submit">{text}</a>
      {showDropdown && isHovering && <DropDowns dropDownList={listDisplayed} />}
    </div>
  );
};

function Header() {
  return (
    <>
      <img src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016" alt="Steam Logo" />
      <HeaderTextButtons text="STORE" showDropdown={true} listDisplayed={storeDropDown} />
      <HeaderTextButtons text="COMMUNITY" showDropdown={true} listDisplayed={communityDropDown} />
      <HeaderTextButtons text="ABOUT" />
      <HeaderTextButtons text="SUPPORT" />
      // these below three are in the top right get rid of this text once that is resolved
      <HeaderTextButtons text ="install steam"/>
      <HeaderTextButtons text= "login" />
      <HeaderTextButtons text= 'languages' showDropdown={true} listDisplayed={languagesDropDown}/> 
    </>
  );
}

export default Header;
