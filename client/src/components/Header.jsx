import React, { useState } from "react";
import "../styles/Header.css";

const storeDropDown = [
  "HOME",
  "DISCOVERY QUEUE",
  "WISHLIST",
  "POINTS SHOP",
  "NEWS",
  "STATS",
];
const communityDropDown = [
  "HOME",
  "DISCUSSION",
  "WORKSHOP",
  "MARKET",
  "BROADCASTS",
];
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
  "Report a translation problem",
];

const DropDowns = ({ dropDownList }) => {
  const [selectedOption, setSelectedOption] = useState("");

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

const HeaderTextButtons = ({
  text,
  showDropdown,
  listDisplayed,
  id,
  className,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ position: "relative", display: "inline-block" }}
    >
      <a type="submit" id={id} className={className}>
        {text}
      </a>
      {showDropdown && isHovering && (
        <div style={{ position: "absolute", left: 0, top: "100%" }}>
          <DropDowns dropDownList={listDisplayed} />
        </div>
      )}
    </div>
  );
};

function Header() {
  return (
    <div id="global_header">
      <div className="content"> 
      <div class="logo">
        <div id='logo'>
        <img
          src="https://store.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
          alt="Steam Logo"
        />{" "}
        </div>
      </div>
      <div className="supernav_container">
        <HeaderTextButtons
          className="menu_item"
          text="STORE"
          showDropdown={true}
          listDisplayed={storeDropDown}
        />
        <HeaderTextButtons
          className="menu_item"
          text="COMMUNITY"
          showDropdown={true}
          listDisplayed={communityDropDown}
        />
        <HeaderTextButtons className="menu_item" text="ABOUT" />
        <HeaderTextButtons className="menu_item" text="SUPPORT" />
      </div>
      <div id="global_action_menu">
        <HeaderTextButtons text="Install Steam" id="install-steam" />
        <HeaderTextButtons className="next-to-install" text="login" />
        <HeaderTextButtons
          className="next-to-install"
          text="languages"
          showDropdown={true}
          listDisplayed={languagesDropDown}
        />
      </div>
      </div>
    </div>
  );
}

export default Header;
