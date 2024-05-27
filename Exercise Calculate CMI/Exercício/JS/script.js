function RecordData()
{
    const form = document.querySelector('.form');
    const result = document.querySelector('.result');

    const people = [];

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const firstName = form.querySelector('.firstName');
    const lastName  = form.querySelector('.lastName');
    const weight    = form.querySelector('.weight');
    const height    = form.querySelector('.height');

    people.push({
        firstName: firstName.value,
        lastName:  lastName.value, 
        weight:    weight.value,
        height:    height.value
    });

    result.innerHTML += `<p>Name: ${firstName.value} ${lastName.value} <br>
                            Weight: ${weight.value} kilograms <br>
                            Height: ${height.value} meters <br>
    </p>`;
    });
}
RecordData();