import { useContext } from "react";
import GameDataContext from "../context/GameDataContext";

export const UseGameData = () => {
    const  {gameData} = useContext(GameDataContext);
    return gameData;
}
