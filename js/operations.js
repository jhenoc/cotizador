function calculate(){
    objectCalculate = new calculatePaint(jsonElbow90, priceM2, elbow90Quant, diameterSelected)
totalPrice.innerText = `${objectCalculate.calcAreaTotal}`
}

buttonCalculate.addEventListener("click", calculate);
