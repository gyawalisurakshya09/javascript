const form = document.querySelector('form')
form.addEventListener("submit", function(e){
e.preventDefault()

 const height = parseInt(document.querySelector("#height").value);
 const weight = parseInt(document.querySelector("#weight").value);
 const results =document.querySelector("#results")
 const result =document.querySelector("#result")


if(height==="" || height<0 || isNaN(height)){
results.innerHTML = `please give a valid height ${height}`
}


else if(weight==="" || weight<0 || isNaN(weight)){
results.innerHTML = `please give a valid weight ${weight}`
}

else{
 const bmi = (weight / ((height*height)/10000)).toFixed(2)
//show th result
results.innerHTML=`<span>${bmi}</span>`


}


if("${bmi}"<18.6){
    result.innerHTML = `<span>Under weight</span>`
}

else if("${bmi}">18.6 &&"${bmi}"<24.9){
    result.textContent = `<span>Normal Range</span>`
} 
else{
    result.innerHTML = `<span>Overweight</span>`
}



})
