import ValidatesCPF from "./ValidatesCPF";

export default class GeneratesCPF {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    formatted(cpf) {
        return (
            cpf.slice(0, 3) + '.' +
            cpf.slice(3, 6) + '.' +
            cpf.slice(6, 9) + '-' +
            cpf.slice(9, 11)
        );
    }

    generatesNewCPF() {
        const cpfWithoutDigit = this.rand();
        const digit1 = ValidatesCPF.generatesDigit(cpfWithoutDigit);
        const digit2 = ValidatesCPF.generatesDigit(cpfWithoutDigit + digit1);
        const newCPF = cpfWithoutDigit + digit1 + digit2;
        return this.formatted(newCPF);
    }
}