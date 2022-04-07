import { useParams } from "react-router-dom";

function VaataToode() {
    const { toodeId } = useParams();
    console.log(toodeId);

    let toode = {};
    let tooted = localStorage.getItem("tooted");
   
    if (tooted) {
        tooted = JSON.parse(tooted);
        toode = tooted.find(element => element.nimi.replaceAll(" ", "-").toLowerCase() === toodeId);
    }

    return (<div>
        <div>{toode.nimi}</div>
        <div>{toode.hind}</div>
    </div>);
}

export default VaataToode;