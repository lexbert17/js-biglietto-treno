// dati 

const kilometresTravelled = parseInt (prompt ("Quanti chilometri devi percorrere con il treno?"));
const userAge = parseInt (prompt("Quanti anni hai?"))
const pricePerKilometre = 0.21
console.log(kilometresTravelled, userAge);

// logica

const ticketPrice = kilometresTravelled * pricePerKilometre ;
console.log( ticketPrice)

const discountChild = ticketPrice * 0.2
const discountSenior = ticketPrice * 0.4
const finalPrice = "" ;
const childPrice = (ticketPrice - discountChild)
const seniorPrice = (ticketPrice - discountSenior)
let twoNum =childPrice.toFixed(2)
let twoDec =seniorPrice.toFixed(2)

let message=""

if (userAge < 18) {
    message = `Il prezzo del tuo biglietto è  ${twoNum}€ con il 20% di sconto`
    console.log(childPrice);

}else if( userAge >= 65) {
    message = `Il prezzo del tuo biglietto è  ${twoDec}€ con il 40% di sconto`
    console.log(seniorPrice);
} else {
    message = `Il prezzo del tuo biglietto è  ${ticketPrice}€`
}

// output 

document.getElementById("result").innerHTML =message



