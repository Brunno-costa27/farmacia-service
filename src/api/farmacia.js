module.exports = (app, repository) => {

    app.post('/funcionario', async (req, res) => {

        const funcionarioExiste = await repository.pegarTodosFuncionario();

        const { cpf,nome,senha,cargo } = req.body;
        console.log(cpf,nome,senha,cargo);

        const alreadyExists = funcionarioExiste.some((func) => func.cpf === cpf);

        if (alreadyExists) {
            return res.json({ error: 'funcionario already exists' });
        }
        try {
            const funcionario = await repository.cadastrarFuncionario(cpf,nome,senha,cargo);
            res.status(201).json({message: 'cadastrado com sucesso!'});
        } catch (error) {
            res.status(401).json({ message: "erro ao cadastrar paciente" });
        }

    });

    app.post('/requisicao', async (req, res) => {

        // const funcionarioExiste = await repository.pegarTodosFuncionario();

        const {id_historico,medicamento,valor,paciente,data_historico,telefone,id_cpf } = req.body;

        // const alreadyExists = funcionarioExiste.some((func) => func.cpf === id_cpf);

        // if (alreadyExists) {
        //     return res.json({ error: 'funcionario already exists' });
        // }
        try {
            const funcionario = await repository.cadastrarRequisicao(id_historico,medicamento,valor,paciente,data_historico,telefone,id_cpf);
            res.status(201).json({message: 'cadastrado com sucesso!'});
        } catch (error) {
            res.status(401).json({ message: "erro ao cadastrar requisição" });
        }

    });

    app.get('/funcionario', async (req, res) => {

        try {
            const paciente = await repository.pegarTodosFuncionario();
            res.status(200).json(paciente);
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

        const funcionarioExiste = await repository.pegarTodosFuncionario();
        const cpf = req.params.cpf;
        const funcionarioAlreadyExists = funcionarioExiste.some((user) => user.cpf === cpf);
        if(!funcionarioAlreadyExists){
            res.json({message: 'Funcionário não existe!'});

        }else{

            try {
                const funcionario = await repository.deletarFuncionario(cpf);
                res.json({message: 'Apagado com sucesso!'});
            } catch (error) {
                res.status(400).send();
            }
        }
    });

    app.get('/historico/:cpf', async (req, res) => {
        const funcionarioExiste = await repository.pegarTodosHistorico();
        const cpf = req.params.cpf;
        const funcionarioAlreadyExists = funcionarioExiste.some((user) => user.id_cpf === cpf);
        if(!funcionarioAlreadyExists){
            res.json({message: 'Não existe historico para esse funcionario!'});
        }else{

            try {
                const paciente = await repository.pegarTodosHistoricoPeloCpf(cpf);
                res.json(paciente);
            } catch (error) {
                res.status(400).send();
            }
        }

    });

    app.get('/historico', async (req, res) => {
        const funcionarioExiste = await repository.pegarTodosHistorico();
        if(funcionarioExiste === []){
            res.json({message: 'Não existe historico de requisições!'});
        }else{

            try {
                const paciente = await repository.pegarTodosHistorico();
                res.json(paciente);
            } catch (error) {
                res.status(400).send();
            }
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
        const funcionarioAlreadyExists = funcionarioExiste.some((user) => user.cpf === cpf && user.senha === senha);
        if(funcionarioAlreadyExists){
            res.status(200).json({message: "seja bem vindo!"});
        }else{
            res.json({message: "paciente não existe!"});
        }

    });

}