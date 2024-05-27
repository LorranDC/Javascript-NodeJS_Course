function calculateCMI()
{
    const form = document.querySelector('#form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log("prevented event");

        const inputWeight = event.target.querySelector('#weight-input');
        const inputHeight = event.target.querySelector('#height-input');

        const weight = Number(inputWeight.value);
        const height = Number(inputHeight.value);

        if(!weight)
        {
            setResult('Invalid Weight', false);
            return;
        }

        if(!height)
        {
            setResult('Invalid Height', false);
            return;
        }

        const cmi = getCMI(weight, height);
        const cmiLevel = getCMILevel(cmi);
        const msg = `Your CMI is ${cmi} (${cmiLevel}).`;

        setResult(msg, true);
    });

    

    function getCMI(weight, height)
    {
        const cmi = weight / height ** 2;
        return cmi.toFixed(2);
    }

    function getCMILevel(cmi)
    {
        const level = [ 'Underweight',
                        'Normal weight',
                        'Overweight', 
                        'Obesity grade 1', 
                        'Obesity grade 2', 
                        'Obesity grade 3'];
        
        if(cmi >= 39.9)
        {
            return level[5];
        }

        if(cmi >= 34.9)
        {
            return level[4];
        }

        if(cmi >= 29.9)
        {
            return level[3];
        }

        if(cmi >= 24.9)
        {
            return level[2];
        }

        if(cmi >= 18.5)
        {
            return level[1];
        }

    }

    function createParagraph() 
    {
        const p = document.createElement('p');
        return p;
    }

    function setResult (msg, isValid) 
    {
        const result = document.querySelector('#result');
        result.innerHTML = '';
        const p = createParagraph();
        
        if (isValid) 
        {
            p.classList.add('paragraph-result');
        }else{
            p.classList.add('bad');
        }

        p.innerHTML = msg;
        result.appendChild(p);
    }


}
calculateCMI();
