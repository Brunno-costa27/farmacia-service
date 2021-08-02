module.exports = (app, repository) => {

    app.post('/funcionario', async (req, res) => {

        const funcionarioExiste = await repository.pegarTodosFuncionario();

        const { cpf,nome,senha,cargo } = req.body;
        console.log(cpf,nome,senha,cargo);

        const alreadyExists = funcionarioExiste.some((func) => func.cpf === cpf);

        if (alreadyExists) {
            return res.status(400).json({ error: 'funcionario already exists' });
        }
        try {
            const funcionario = await repository.cadastrarFuncionario(cpf,nome,senha,cargo);
            res.status(201).json(funcionario);
        } catch (error) {
            res.status(401).json({ message: "erro ao cadastrar paciente" });
        }

    });

    app.get('/funcionario', async (req, res) => {

        try {
            const paciente = await repository.pegarTodosFuncionario();
            res.json(paciente);
        } catch (error) {
            res.status(400).send();
        }

    });

    app.get('/funcionario/:cpf', async (req, res) => {

        const cpf = req.params.cpf;
        try {
            const funcionario = await repository.obterFuncionarioPeloId(cpf);
            res.json(funcionario);
        } catch (error) {
            res.status(400).send();
        }
    });

    app.delete('/funcionario/:cpf', async (req, res) => {

        const cpf = req.params.cpf;
        try {
            const funcionario = await repository.deletarFuncionario(cpf);
            res.json(funcionario);
        } catch (error) {
            res.status(400).send();
        }
    });

    app.get('/historico/:cpf', async (req, res) => {
        const cpf = req.params.cpf;
        try {
            const paciente = await repository.pegarTodosHistoricoPeloCpf(cpf);
            res.json(paciente);
        } catch (error) {
            res.status(400).send();
        }

    });

    app.put('/funcionario/:cpf', async (req, res) => {
        const cpf = req.params.cpf;
        const { nome } = req.body;
        try {
            const paciente = await repository.atualizarFuncionario(cpf, nome);
            res.json(paciente);
        } catch (error) {
            res.status(400).send();
        }
    });

    app.post('/autenticacao', async (req, res) => {

        const funcionarioExiste = await repository.pegarTodosFuncionario();

        const { cpf, senha } = req.body;

        const funcionarioAlreadyExists = funcionarioExiste.find((user) => user.cpf === cpf && user.senha === senha);
        if(funcionarioAlreadyExists){
            res.status(200).json(funcionarioAlreadyExists);
        }else{
            res.status(400).json({message: "paciente não existe!"});
        }

    });

}