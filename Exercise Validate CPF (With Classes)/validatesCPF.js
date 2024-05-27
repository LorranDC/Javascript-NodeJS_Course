class ValidatesCPF {
    constructor(sentCPF){
        Object.defineProperty(this, 'cleanedCPF',{
            writable: false,
            enumerable: true,
            configurable: false,
            value: sentCPF.replace(/\D+/g, '')
        });
    }

    isSequence() {
        return this.cleanedCPF.charAt(0).repeat(11) === this.cleanedCPF;
    }

    generatesNewCPF() {
        const cpfWithoutDigits = this.cleanedCPF.slice(0,-2);
        const digit1 = ValidatesCPF.generatesDigit(cpfWithoutDigits);     
        const digit2 = ValidatesCPF.generatesDigit(cpfWithoutDigits + digit1);
        this.newCPF = cpfWithoutDigits + digit1 + digit2;
    }
    
    static generatesDigit(cpfWithoutDigits) {
        let total = 0;
        let reverse = cpfWithoutDigits.length + 1;

        for(let numericString of cpfWithoutDigits) {
            total += reverse * Number(numericString);
            reverse--;
        }
        
        const digit = 11 - (total % 11);
        return digit <= 9 ? String(digit) : '0';
    }

    validates() {
        if(!this.cleanedCPF) return false;
        if(typeof this.cleanedCPF !== 'string') return false;
        if(this.cleanedCPF.length !== 11) return false;
        if(this.isSequence()) return false;
        this.generatesNewCPF();

        return this.newCPF === this.cleanedCPF;
    }
}

let validatesCPF = new ValidatesCPF('070.987.720-03');

if(validatesCPF.validates()) {
    console.log('CPF válido');
} else {
    console.log('CPF inválido');
}