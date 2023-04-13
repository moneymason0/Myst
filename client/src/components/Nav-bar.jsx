import React, { useState } from "react";
import "../styles/Nav-bar.css";

const yourStore= ['Home','Community Reccomendations','Recently Viewed','Steam Curators']
const newAndNoteWorthy= ['Steam replay 2022', 'Top Sellers','Most Played','New & Trending', 'Special Offers', 'Recently Updated','Popular Incoming']
const categories= {'SPECIAL SECTIONS':['Free to play','Demos','Early Access','Controller Friendly','Remote Play', 
'Software','Soundtracks','VR Titles','VR Hardware','Steam Deck','Great on Deck','macOS','SteamOS + Linux', 'For PC Cafes'],
'GENRES':[{'action':['Arcade & Rythym','Fighting & Martial Arts','First-Person Shooter','Hack & Slash','Platformer & Runner','Third-Person Shooter','shmup']}],
'Adventure':['Adventure RPG','Casual','Hidden Object','Metroidvania','Puzzle','Story-Rich','Visual Novel'],
'Role-Playing':['Action RPG' , 'Adventure RPG','JRPG','Party-Based','Rogue-Like','Strategy RPG','Turn-Based'],
'Simulation':['Building & Animation','Dating','Farming & Crafting','Hobby & Job','Life & Immersive','Sandbox & Physics','Space & Flight'],
'Strategy':['Card & Board','City & Settlement','Grand & 4X','Military','Real-Time Strategy','Tower Defense','Turn-Based Strategy'],
'Sports & Racing':['All Sports', 'Fishing & Hunting','Individual Sports','Racing','Racing Sim','Sports Sim','Team Sports',]}
const themes= ['Anime','Horror','Mystery & Detective','Open World','Sci-Fi & Cyberpunk','Space','Survival']
const playerSupport = ['Co-Operative','LAN','Local & Party','MMO','Multiplayer','Online Competitive','Singleplayer']
// these are sub categories- go the Genre tab divided by genre so they can be separated as their own elements and distributed appropriately
const specialSections = categories['SPECIAL SECTIONS'];
const genres = categories['GENRES'];
const action = genres[0]['action'];
const adventure = categories['Adventure'];
const rolePlaying = categories['Role-Playing'];
const simulation = categories['Simulation'];
const strategy = categories['Strategy'];
const sportsRacing = categories['Sports & Racing'];



// parameters are the dropDownList inserted into the component, and the fn used
// to handle the click on the drop down

// lets filter for what items need to apply
const DropDowns = ({ dropDownList }) => {
    return (
      <div style={{ position: 'absolute', left: 0, top: '100%' }}>
        <ul>
          {dropDownList.map((listItem, index) => (
            <option key={index}>{listItem}</option>
          ))}
        </ul>
      </div>
    );
  };
  
  function SearchBar() {
    const [searchInput, setSearchInput] =useState('')

    const handleInputChange = (event) => {
        setSearchInput(event.target.value);
    }

    const handleSearch = () => {
        console.log('Search for',searchInput)
    }

return(<div>
    <input type="text" value={searchInput}onChange={handleInputChange}placeholder="search" />
        <button onClick={handleSearch}></button>
   
</div>)}


  const NavBarTextButtons = ({
    text,
    listDisplayed,
    id,
    className,
  }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    //this is the function that will be executed according to onMouseEnter event listener
    const handleMouseEnter = () => {
      setIsOpen(true);
    };
  
    const handleMouseLeave = () => {
      setIsOpen(false);
    };
  
    return (
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ position: 'relative', display: 'inline-block',background:'red' }}
      >
        <option>{text}</option>
        {isOpen && (
          <DropDowns dropDownList={listDisplayed} />
        )}
      </div>
    );
  };
  



//Remember, this is the component that is exported to app. The parameters for the creation of this 
// component are listed above, and prescribed below

  function NavBar() {

  
    return (
      <div id='store-header'>
        <div id="nav-bar-button-list">
          <NavBarTextButtons text="Your Store " listDisplayed={yourStore} id="your-store" className="nav-bar-button-list"/>
          <NavBarTextButtons text=" New & NoteWorthy" listDisplayed={newAndNoteWorthy} id='new-&-noteworthy' className='nav-bar-button-list'/>
          <NavBarTextButtons text=" Categories " listDisplayed={categories['SPECIAL SECTIONS']} id='categories' className='nav-bar-button-list' />
          {/* <NavBarTextButtons text='Points Shop'/>
          <NavBarTextButtons text= 'News'/>
          <NavBarTextButtons text= 'Labs'/>     */}
        </div>
        <SearchBar />
      </div>
    );
  }




  
  export default NavBar