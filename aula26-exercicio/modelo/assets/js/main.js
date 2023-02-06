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
    });

    function createParagraph() 
    {
        const p = document.createElement('p');
        return p;
    }

    function setResult (msg, isValid) 
    {
        const result = document.querySelector('#result');
        result.innerHTML = '';
        result.appendChild(p);
        const p = createParagraph();
    }


}
calculateCMI();

