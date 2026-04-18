export const powerBankCart = []





export function addTocart(powerBankProductId){
    let matchingPowerBank;

        powerBankCart.forEach((powerBankCartItem)=>{
            if(powerBankProductId === powerBankCartItem.powerBankProductId){
                matchingPowerBank = powerBankCartItem
            }
        })
        const quantity = Number(document.querySelector(`.js-power-bank-options-${powerBankProductId}`).value)

        if(matchingPowerBank){
            matchingPowerBank.quantity += quantity
        }else{
             powerBankCart.push({
            powerBankProductId,
            quantity
        })
        }

}