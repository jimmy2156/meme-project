import Troll from "../images/Troll Face.png"



function Header() {
    return (
        <div className="header">
            <div className="heading1">
                <img src={Troll} className="troll" alt="troll face" />
                <h1>Meme Generator</h1>
            </div>
            <p className="heading2">React Course - Project 3</p>


        </div>
    )
}
export default Header