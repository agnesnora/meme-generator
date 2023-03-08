import TrollFace from "../TrollFace.png";
export default function Header() {
  return (
    <div className="header">
      <div className="header--logo">
        <img
          className="header--logo--img"
          src={TrollFace}
          alt="troll face"
        ></img>
        <h1>Meme Generator</h1>
      </div>
      <h3>React Course - Project 3</h3>
    </div>
  );
}
