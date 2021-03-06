const db = require('../config/database')

async function pegarTodosHistorico(){

    try {   
     await db.connect();
     const result =  await db.query("SELECT * FROM historicos");
     return result;

    } catch (error) {
        console.log("deu errado na função pegar todos!");
    }

}

async function pegarTodosPreco(){

    try {   
     await db.connect();
     const result =  await db.query("SELECT * FROM historicos_preco");
     return result;

    } catch (error) {
        console.log("deu errado na função pegar todos!");
    }

}

async function pegarTodosAuditoria(){

    try {   
     await db.connect();
     const result =  await db.query("SELECT valor_novo,data_changed FROM funcionario_auditoria_completa WHERE operacao = 'INSERT'");
     return result;

    } catch (error) {
        console.log("deu errado na função pegar todos!");
    }

}

async function pegarTodosFuncionario(){

    try {   
     await db.connect();
     const result =  await db.query("SELECT * FROM funcionarios");
     return result;

    } catch (error) {
        console.log("deu errado na função pegar todos!");
    }

}

async function pegarTodosHistoricoPeloCpf(cpf){

    try { 
     
     await db.connect();
     const result =  await db.query(`select * from historicos where id_cpf = '${cpf}'`);
     return result;

     

    } catch (error) {
        
        console.log("deu errado na função pegar todos os mendicamentos!");
    }

}

async function obterFuncionarioPeloId(cpf){

    try {
     await db.connect();
     const result =  await db.query(`SELECT * FROM funcionarios WHERE cpf = '${cpf}'`);
     return result;

    } catch (error) {
        
        console.log("deu errado ao obter id!");
    }

}

async function deletarFuncionario(cpf){

   
    try {
     await db.connect();
     const result =  await db.query(`DELETE  FROM funcionarios WHERE cpf = '${cpf}'`);
     return result;

    } catch (error) {
        
        console.log("deu errado na função deletar!");
    }
}

async function cadastrarFuncionario(cpf,nome,senha,cargo){



    try {
        await db.connect();
        const result =  await db.query(`insert into funcionarios (cpf,nome,senha,cargo) values('${cpf}','${nome}','${senha}','${cargo}')`);
        return result;
        
    } catch (error) {
       
        console.log("deu errado ao cadastrar pacientes!");
    }

}

async function cadastrarRequisicao(id_cadastro,id_historico,medicamento,valor,data_historico,telefone,id_cpf){


    try {
        await db.connect();
        const result =  await db.query(`insert into historicos (id_cadastro,id_historico,medicamento,valor,data_historico,telefone,id_cpf) values(${id_cadastro},${id_historico},'${medicamento}','${valor}','${data_historico}','${telefone}','${id_cpf}')`);
        return result;
        
    } catch (error) {
       
        console.log("deu errado ao cadastrar requisição!");
    }

}

async function cadastrarPreco(id_cadastro,id_historico,medicamento,valor,data_historico,telefone,id_cpf){


    try {
        await db.connect();
        const result =  await db.query(`insert into historicos_preco (id_cadastro,id_historico,medicamento,valor,data_historico,telefone,id_cpf) values(${id_cadastro},${id_historico},'${medicamento}','${valor}','${data_historico}','${telefone}','${id_cpf}')`);
        return result;
        
    } catch (error) {
       
        console.log("deu errado ao cadastrar preço!");
    }

}


async function atualizarFuncionario(cpf,nome){


    try {
     await db.connect();
     const result =  await db.query(`UPDATE funcionarios SET nome = '${nome}' WHERE cpf = '${cpf}'`);
     return result;

    } catch (error) {
        
        console.log("deu errado na função atualizar!");
    }
}

module.exports = { pegarTodosHistoricoPeloCpf,pegarTodosAuditoria,obterFuncionarioPeloId,pegarTodosPreco,cadastrarPreco,deletarFuncionario,cadastrarFuncionario,pegarTodosHistorico,atualizarFuncionario,pegarTodosFuncionario,cadastrarRequisicao}