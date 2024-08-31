const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const res = document.querySelector('#result')
   

    // Validate height
    if (height === "" ||  height < 0|| isNaN(height)) {
        //  const addText = document.createTextNode("Please Enter a Valid height")
        // //  results.appendChild(addText)
        res.innerHTML = `Please enter a valid height. ${height}`;
        
    }else if (weight === "" ||  weight < 0|| isNaN(weight)) {
        //  const addText = document.createTextNode("Please Enter a Valid weight")
        // //  results.appendChild(addText)
        res.innerHTML = `Please enter a valid weight. ${weight}`;
        
    }else{
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        if(bmi<18.6){
            res.innerHTML = `Your BMI is Under Weight :${bmi}`;
        }else if(bmi <= 24.9){
            res.innerHTML = `Your BMI is Normal Range : ${bmi}`;

        }else if(bmi > 24.9){
            res.innerHTML = `Your BMI is Over Weight : ${bmi}`;

        }
       
    }

});
