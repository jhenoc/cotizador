let diameterSelected = document.getElementById("inputGroupSelect02").value;
localStorage.setItem('diameterSelectedSaved', diameterSelected);

let elbow90Quant = document.getElementById("elbow90").value;
localStorage.setItem('elbow90QuantSaved', elbow90Quant);

let elbow45Quant = document.getElementById("elbow45").value;
localStorage.setItem('elbow45QuantSaved', elbow45Quant);

let teeQuant = document.getElementById("tee").value;
localStorage.setItem('teeQuantSaved', teeQuant);

let reductionQuant = document.getElementById("reduction").value;
localStorage.setItem('reductionQuantSaved', reductionQuant);

let flangeQuant = document.getElementById("flange").value;
localStorage.setItem('flangeQuantSaved', flangeQuant);

let lengthTube = document.getElementById("lengthTube").value;
localStorage.setItem('lengthTubeSaved', lengthTube);

let buttonCalculate = document.getElementById("calculateButton");