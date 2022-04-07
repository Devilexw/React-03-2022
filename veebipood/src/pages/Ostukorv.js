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

    function maksma() {
        const andmed ={       
            "api_username": "92ddcfab96e34a5f",
            "account_name": "EUR3D1",
            "amount": arvutaOstukorviKoguSumma(),
            "order_reference": Math.random() * 999999,
            "nonce": "a9b7f7e7943erg5456773154a01b9902" + new Date() + Math.random() * 999999,
            "timestamp": new Date(),
            "customer_url": "https://www.postimees.ee"               
        }

        fetch("https://igw-demo.every-pay.com/api/v4/payments/oneoff",{
            method: "POST",
            body: JSON.stringify(andmed),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Basic OTJkZGNmYWI5NmUzNGE1Zjo4Y2QxOWU5OWU5YzJjMjA4ZWU1NjNhYmY3ZDBlNGRhZA=="
            }
        }).then(response => response.json())
        .then(body => window.location.href = body.payment_link);
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
            {ostukorv.length > 0 && <div>
                <div>KOKKU: {arvutaOstukorviKoguSumma()} €</div>
                <button onClick={() => maksma()}>MAKSMA</button>
            </div>}
        </div>
        )
}

export default Ostukorv;