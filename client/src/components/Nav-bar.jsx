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

