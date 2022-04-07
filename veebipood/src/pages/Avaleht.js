import { useState } from "react";
import { Link } from "react-router-dom";

function Avaleht() {


const [tooted, uuendaTooted] = useState(saaTooted());
        
function saaTooted() {
    const tootedLS = localStorage.getItem("tooted");

    if (tootedLS !== null) {
        return JSON.parse(tootedLS);
    } else {
        return [
            {nimi: "Coca", hind: 1, aktiivne: true},
            {nimi: "Fanta", hind: 2, aktivne: false}, 
            {nimi: "Sprite", hind: 3, aktiivne: true},
            {nimi: "Vichy", hind: 5, aktiivne: true},
            {nimi: "Vitamin well", hind: 7, aktiivne: true}
        ];
    }
}

    

function lisaOstukorvi(toode) {
    console.log("jep");
    console.log(toode);
    // 
    // 1. Andmebaas
    // 2. Brauserisse
    // 3. Fail .txt .json
    let ostukorviTooted = localStorage.getItem("ostukorviTooted");
    if (ostukorviTooted !== null) {
        ostukorviTooted = JSON.parse(ostukorviTooted);
    } else {
        ostukorviTooted = [];
    }
    ostukorviTooted.push(toode);
    localStorage.setItem("ostukorviTooted", JSON.stringify(ostukorviTooted));
}

   
return (
<div>
    {tooted.map(element =>
         <div>
            <Link to={"/toode/" + element.nimi.replaceAll(" ", "-").toLowerCase()}>
                <div>{element.nimi}</div>
                <div>{element.hind}</div>
            </Link>
             <button onClick={() => lisaOstukorvi(element)}>Lisa ostukorvi</button>
        </div>)}
</div>)
}

export default Avaleht;