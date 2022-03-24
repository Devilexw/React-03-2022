import { Link } from "react-router-dom";

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
    </div>)
}

export default Menüü;