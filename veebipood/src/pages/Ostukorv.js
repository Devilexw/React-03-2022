import { useState } from "react";

function Ostukorv() {
    const [ostukorv, muudaOstukorvi] = useState(saaOstukorviTooted());

    function saaOstukorviTooted() {
        if (localStorage.getItem("ostukorviTooted") !== null) {
            return JSON.parse(localStorage.getItem("ostukorviTooted"));
        } else
        return [];
    }

    function kustutaToode(element) {
        console.log(element);
        console.log(ostukorv);
        const index = ostukorv.indexOf(element);
        console.log(index);
        ostukorv.splice(index,1);
        console.log(ostukorv);
        muudaOstukorvi(ostukorv.slice());
        localStorage.setItem("ostukorviTooted", JSON.stringify(ostukorv));
    }

    function lisaToode(element) {
        ostukorv.push(element);
        muudaOstukorvi(ostukorv.slice());
        localStorage.setItem("ostukorviTooted", JSON.stringify(ostukorv));
    }

    function tyhjenda() {
        muudaOstukorvi([]);
        localStorage.setItem("ostukorviTooted", JSON.stringify([]));

    }

    function arvutaOstukorviKoguSumma() {
        let koguSumma = 0;
        ostukorv.forEach(element => koguSumma = koguSumma + element.hind)
        return koguSumma;
    }

    return(
        <div>
            {ostukorv.length > 0 && 
            <div>
                <div>Kokku on {ostukorv.length} toodet ostukorvis</div>
                <button onClick={() => tyhjenda()}>Tühjenda</button>
            </div>}
            {ostukorv.length === 0 && <div>Ostukorv on tühi</div>}
            { ostukorv.map(element => 
                <div>
                    <div>Nimi: {element.nimi}</div>
                    <div>Hind: {element.hind}</div>
                    <div>Kategooria: karastusjoogid</div>
                    <button onClick={() => kustutaToode(element)}>X</button>
                    <button onClick={() => lisaToode(element)}>Lisa</button>
                </div>
            ) }
            <div>KOKKU: {arvutaOstukorviKoguSumma()} €</div>
        </div>
        )
}

export default Ostukorv;