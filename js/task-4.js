 /*------------ з оглошенням змінної яку можна перевизначити, ціни на паливо не стабільні------------- */
function getShippingCost(country) {
    let countryDeliveryChina = 100;
    let countryDeliveryChile = 250;
    let countryDeliveryAustralia = 170;
    let countryDeliveryJamaica = 120;
    switch (country) {
        case 'China': 
        return (`"Shipping to China will cost ${countryDeliveryChina} credits"`);
            break;
        case 'Chile': 
        return (`"Shipping to Chile will cost ${countryDeliveryChile} credits"`);
            break;
        case 'Australia': 
        return (`"Shipping to Australia will cost ${countryDeliveryAustralia} credits"`);
            break;
        case 'Jamaica': 
        return (`"Shipping to Jamaica will cost ${countryDeliveryJamaica} credits"`);
            break;
    
        default:
        return (`"Sorry, there is no delivery to your country"`);
            break;
    }
}
    /*------------ без оглошення змінних------------- */
// function getShippingCost(country) {
//     switch (country) {
//         case 'China': 
//         return (`"Shipping to China will cost 100 credits"`);
//             break;
//         case 'Chile': 
//         return (`"Shipping to Chile will cost 250 credits"`);
//             break;
//         case 'Australia': 
//         return (`"Shipping to Australia will cost 170 credits"`);
//             break;
//         case 'Jamaica': 
//         return (`"Shipping to Jamaica will cost 120 credits"`);
//             break;
    
//         default:
//         return (`"Sorry, there is no delivery to your country"`);
//             break;
//     }
// }


console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"


