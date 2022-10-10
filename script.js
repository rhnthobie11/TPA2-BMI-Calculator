// let BMI, height, weight

// let button = document.getElementById("btn-bmi");

// button.addEventListener('click', () => {
//     const height = perseFloat(document.getElementById("height").value);
//     const weight = perseFloat(document.getElementById("weight").value);
//     const result = document.getElementById("output");

//     if(height && weight){
//         const bmi = (weight / ((height*height)/10000)).toFixed(2);

//         if(bmi < 18.6){
//             result.innerHTML = 'Under weight :' + bmi;
//         }else if(bmi >= 18.6 && bmi < 24.9){
//             result.innerHTML = 'Normal :' + bmi;
//         }else if(bmi >=25 && bmi <29.9){
//             result.innerHTML = 'Over weight :' + bmi;
//         }else{
//             result.innerHTML = 'Obesity';
//         }
//     }
// });

let bmi_cal = (weight, height) =>{
    let bmi = (weight / ((height*height)/10000)).toFixed(2);
    return bmi.toString()
}

function calculateBMI() {
    // console.log('asdasdss')
    let height = parseFloat(document.getElementById('height').value);
    let weight = parseFloat(document.getElementById('weight').value);
    let result = document.getElementById('result');
    // let bmi_res = document.querySelector('bmi');


    // console.log(bmi)
    // preventDefault()
    let bmi = bmi_cal(weight, height)

    if (bmi > 30) {
        result.innerHTML = "Obesity";
        document.getElementById("bmi").innerHTML = " " + bmi;
    } else if (bmi >= 25 && bmi <= 29.9) {
        result.innerHTML = "Overweight";
        document.getElementById("bmi").innerHTML = " " + bmi;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result.innerHTML = "Normal Weight";
        document.getElementById("bmi").innerHTML = " " + bmi;
    } else {
        result.innerHTML = "UnderWeight";
        document.getElementById("bmi").innerHTML = " " + bmi;
    } 
}

// let height = parseFloat(document.getElementById('height').value);
// let weight = parseFloat(document.getElementById('weight').value);
// let result = document.getElementById('result');
// let button = document.querySelector('.btn-bmi')

// button.addEventListener('click', ()=>{
//     let bmi = (weight / ((height*height)/10000)).toFixed(2);
//     console.log(bmi)
    
//     if (bmi > 30) {
//         result.innerHTML = "Obesity";
//     } else if (bmi >= 25 && bmi <= 29.9) {
//         result.innerHTML = "Overweight";
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//         result.innerHTML = "Normal Weight";
//     } else {
//         result.innerHTML = "UnderWeight";
//     }
     
//     // e.preventDefault()
// });