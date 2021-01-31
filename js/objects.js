class calculatePaint{
    constructor (jsonDiameter, jsonElbow90, priceM2, elbow90Quant, diameterSelected){
        let diameterSelected = jsonDiameter;
        this.elbow90Quant = elbow90Quant;
        this.priceM2 = priceM2;
        this.selectedDiameterCalc = diameterSelected;
        this.factorElbow90 = function() {         
            let far = 1
               let r = diameterSelected.find(r => r.diam == this.selectedDiameterCalc)
               far = r.factor
            return far
         }    
        
        calcElbow90Area(){
            let elbow90Area = this.elbow90Quant * factorElbow90;
            return elbow90Area;
        }
    }
}