// hacer console.log de cada variable
class calculatePaint{
    constructor (jsonElbow90, priceM2, elbow90Quant, diameterSelected){
        this.diameterSelected = diameterSelected;
        this.elbow90Quant = elbow90Quant;
        this.priceM2 = priceM2;

        this.factorElbow90 = function() {         
            let far = 1
               let r = diameterSelected.find(r => r.diam == this.diameterSelected)
               far = r.factor
            return far
            console.log(far,"esto es far");
         }    
        
        this.calcElbow90Area = function() {
            let elbow90Area = this.elbow90Quant * factorElbow90;
            return elbow90Area;
        }
        this.calcAreaTotal = function(){
            let totalPriceArea = this.calcElbow90Area*priceM2
            return totalPriceArea.toFixed(2)
        }

    }
}

console.log(diameterSelected);