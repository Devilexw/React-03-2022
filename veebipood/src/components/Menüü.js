import { Link } from "react-router-dom";

function muudaKeelt(lang) {
  const vanaKeel = localStorage.getItem("language");

  console.log("enne oli: " + vanaKeel  + "uus keel on:" + lang);

  localStorage.setItem("language", lang);
}

function Menüü() {
    return ( 
    <div>
        <Link to="/">
          <button className='nupp'>Avalehele</button>
        </Link>
        <Link to="/ostukorv">
          <button>Ostukorvi</button>
        </Link>
        <Link to="/admin">
          <button>Admin vaatesse</button>
        </Link>
        <button onClick={() => muudaKeelt("et")}>EE</button>
        <button onClick={() => muudaKeelt("ru")}>RU</button>

    </div>)
}

export default Menüü;