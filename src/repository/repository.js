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

async function atualizarFuncionario(cpf,nome){


    try {
     await db.connect();
     const result =  await db.query(`UPDATE funcionarios SET nome = '${nome}' WHERE cpf = '${cpf}'`);
     return result;

    } catch (error) {
        
        console.log("deu errado na função atualizar!");
    }
}

module.exports = { pegarTodosHistoricoPeloCpf,obterFuncionarioPeloId,deletarFuncionario,cadastrarFuncionario,pegarTodosHistorico,atualizarFuncionario,pegarTodosFuncionario}