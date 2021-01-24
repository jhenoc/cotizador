
/*N° para cada diametro
1	 1/2"
2	 3/4"
3	1"
4	1 1/4"
5	1 1/2"
6	2"
7	2 1/2"
8	3"
9	4"
10	5"
11	6"
12	8"
13	10"
14	12"
15	14"
16	16"
17	18"
18	20"
19	24"
*/

const price = 10;//Dolares

function getSelectedDiameter ()
{
    const selectDiameter = document.getElementById("inputGroupSelect02").value;
    localStorage.setItem('diameter',selectDiameter);
}
                                                                                                                                                               



const factorElbow90 = [0.030,0.045,0.060,0.075,0.090,0.120,0.150,0.180,0.240,0.300,0.360,0.480,0.600,0.720,0.840,0.960,1.080,1.200,1.450];//cada accesorio tiene una factor por cada diametro de tubo. Posteriormente se cargaran los factores para otros accesorios
const factorElbow45 = [0.015,0.023,0.030,0.038,0.045,0.060,0.075,0.090,0.120,0.150,0.180,0.240,0.300,0.360,0.420,0.480,0.540,0.600,0.725];


class Painting{
constructor(diameter, elbow90, elbow45, te, reduction, flange, lengthTube){
    this.diameter = diameter;
    this.elbow90 = elbow90;
    this.elbow45 = elbow45;
    this.te = te;
    this.reduction = reduction;
    this.lengthTube = lengthTube;
}
                
    calculateAreaTotal (){
        let elbow90Area = this.elbow90 * factorElbow90[localStorage.getItem('diameter')];
        return elbow90Area;

    }
    calculateTotalPrice(){
        let totalPrice = price * this.calculateAreaTotal;
        return totalPrice;
}
    }


/* Test para un accesorio de codo de 90
let area1 = new Painting(1);
let total = area1.calculateAreaAcc();
console.log(total);
*/