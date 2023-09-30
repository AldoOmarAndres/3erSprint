import Cards from 'react-credit-cards-2'
import { leerSessionStorage } from "../../utils/sessionStorage"
export default function Tarjeta({card, ocult}){
    return(
        <Cards
            number={card.number}
            expiry={ocult ? card.expiry : "****"}
            cvc={card.cvc}
            name={"Juan Carlos"}
            focused={"name"}
            preview={true}
            issuer={"mastercard"}
        />
    )
}