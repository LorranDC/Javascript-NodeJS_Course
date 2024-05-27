function ValidatesCPF(sentCPF) {
    Object.defineProperty(this, 'cleanedCPF', {
        enumerable: true,
        get: function() {
            return sentCPF.replace(/\D+/g, '');
        }
    });
}

ValidatesCPF.prototype.validates = function() {
    if(typeof this.cleanedCPF === 'undefined') return false;
    if(this.cleanedCPF.length !== 11) return false;
    if(this.isSequence()) return false;


    const parcialCPF = this.cleanedCPF.slice(0, -2);
    const digit1 = this.createsDigit(parcialCPF);
    const digit2 = this.createsDigit(parcialCPF + digit1);


    const newCPF = parcialCPF + digit1 + digit2;
    return newCPF === this.cleanedCPF;
};

ValidatesCPF.prototype.createsDigit = function(parcialCPF) {
    const cpfArray = Array.from(parcialCPF);
    
    let regressive = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressive * Number(val));
        regressive--;
        return ac;
    }, 0);
    const digit = 11 - (total % 11);
    return digit > 9 ? '0' : String(digit);   
};

ValidatesCPF.prototype.isSequence = function() {
    sequence = this.cleanedCPF[0].repeat(this.cleanedCPF.length);
    return sequence === this.cleanedCPF;
}

const cpf = new ValidatesCPF('705.484.450-52');

if(cpf.validates()) {
    console.log('Valid CPF');
} else {
    console.log('Invalid CPF');
}

