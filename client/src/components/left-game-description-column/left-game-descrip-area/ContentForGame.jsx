import { useContext } from 'react';
import '../styles/ContentForGame.css'

function ContentForGame() {
    return (
        <><div className="game_area_dlc_section">
            <h2>Content For This Game
                <span>
                    <a className="browse_tag">
                        Browse all
                        <em>(1)</em>
                    </a>
                </span>
            </h2>
            <div>
                <form>
                    <input type="hidden" />
                    <input type="hidden" />
                    <div>
                        <div>
                            <a>
                                <div>Half-Life Soundtrack</div>
                                <div>Free</div>
                            </a>
                        </div>
                    </div>
                    <div></div>
                </form>
            </div>
        </div></>
    )
}

export default ContentForGame;