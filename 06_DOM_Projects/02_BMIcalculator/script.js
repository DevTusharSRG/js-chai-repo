const form = document.querySelector('.inputdiv')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result')
    if (weight<0 || isNaN(weight) || weight === '')
    {
        console.log(typeof(weight));
        result.innerHTML=`Please give a valid weight ${weight}`
    }else
    if (height<0 || isNaN(height) || height === '')
    {
        result.innerHTML='Please give a valid height'
    }else
    {
        const bmi =(weight/((height*height)/10000)).toFixed(2);
        if(bmi<18.6)
        {
            result.innerHTML=`<span>${bmi}, You are under weight.</span>`
        }
        if(24.9>bmi>18.6)
        {
            result.innerHTML=`<span>${bmi}, You are fit and fine.</span>`
        }
        if(bmi<24.9)
        {
            result.innerHTML=`<span>${bmi}, You'r height or weight is so heigh.</span>`
        }
    }
});