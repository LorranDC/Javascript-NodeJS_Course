function Calculator(){
  this.display = document.querySelector('.display');

  this.init = () => {
    this.captureClicks();
    this.captureEnter();
  };

  this.captureEnter = () => {
    document.addEventListener('keyup', event => {
      if (event.keyCode !== 13) return;
      this.doCalc();
    });
  };

  this.captureClicks = () => {
    document.addEventListener('click', event => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear(el);
      if (el.classList.contains('btn-del')) this.del(el);
      if (el.classList.contains('btn-eq')) this.doCalc(el);
    });
  };

  this.doCalc = () => {
    try {
      const calc = eval(this.display.value);

      if(!calc)
      {
        alert('Invalid Calc')
        return;
      }

      this.display.value = calc;

    } catch(e) {
      alert('Invalid Calc');
      return;
    }
  };



  this.addNumDisplay = el => {
    this.display.value += el.innerText;
    this.display.focus();
  };


  this.clear = () => this.display.value = '';
  this.del = () => this.display.value = this.display.value.slice(0, -1);

}

const calculator = new Calculator();
calculator.init();
