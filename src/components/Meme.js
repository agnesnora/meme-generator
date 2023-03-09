import MemesData from "../MemesData";

export default function Meme() {
  const memeArray = MemesData.data.memes;

  const randomMeme = memeArray[Math.floor(Math.random() * memeArray.length)];

  console.log(randomMeme.url);
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button">Get a new meme image 🖼️</button>
      </div>
    </main>
  );
}
