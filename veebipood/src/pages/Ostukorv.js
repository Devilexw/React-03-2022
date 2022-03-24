import { useState } from "react";

function Ostukorv() {
    const [ostukorv, muudaOstukorvi] = useState(["element nr1","element nr2",4,5,6]);

    function kustutaToode(element) {
        console.log(element);
        console.log(ostukorv);
        const index = ostukorv.indexOf(element);
        console.log(index);
        ostukorv.splice(index,1);
        console.log(ostukorv);
        muudaOstukorvi(ostukorv.slice());
    }

    function lisaToode(element) {
        ostukorv.push(element);
        muudaOstukorvi(ostukorv.slice());
    }

    return(
        <div>
            {ostukorv.length > 0 && 
            <div>
                <div>Kokku on {ostukorv.length} toodet ostukorvis</div>
                <button onClick={() => muudaOstukorvi([])}>Tühjenda</button>
            </div>}
            {ostukorv.length === 0 && <div>Ostukorv on tühi</div>}
            { ostukorv.map(element => 
                <div>
                    <div>Nimi: {element}</div>
                    <div>Hind: 3</div>
                    <div>Kategooria: karastusjoogid</div>
                    <button onClick={() => kustutaToode(element)}>X</button>
                    <button onClick={() => lisaToode(element)}>Lisa</button>
                </div>
            ) }
        </div>
        )
}

export default Ostukorv;