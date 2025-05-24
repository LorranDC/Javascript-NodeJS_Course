import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Lorran',
      sobrenome: 'Dias',
      email: 'lorrandias150@gmail.com',
      idade: 21,
      peso: 75,
      altura: 1.68,

    });

    res.json(novoAluno);
  }


}

export default new HomeController();
