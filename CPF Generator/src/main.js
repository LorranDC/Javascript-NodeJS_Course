import GeneratesCPF from './modules/GeneratesCPF';

import './assets/css/style.css';

(function(){
    const generates = new GeneratesCPF();
    const generatedCPF = document.querySelector('.generated-cpf');
    generatedCPF.innerHTML = generates.generatesNewCPF();
})();