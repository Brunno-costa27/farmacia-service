const db = require('../config/database')

async function pegarTodosHistorico(){

    try {   
     await db.connect();
     const result =  await db.query("SELECT * FROM historico");
     return result;

    } catch (error) {
        console.log("deu errado na função pegar todos!");
    }

}

async function pegarTodosFuncionario(){

    try {   
     await db.connect();
     const result =  await db.query("SELECT * FROM funcionario");
     return result;

    } catch (error) {
        console.log("deu errado na função pegar todos!");
    }

}

async function pegarTodosHistoricoPeloCpf(id){

    try { 
     
     await db.connect();
     const result =  await db.query(`select * from historico where id_cpf = ${id}`);
     return result;

    } catch (error) {
        
        console.log("deu errado na função pegar todos os mendicamentos!");
    }

}

async function obterFuncionarioPeloId(id){

    const id1 = id;    
    try {
     await db.connect();
     const result =  await db.query(`SELECT * FROM funcionario WHERE cpf = ${id1}`);
     return result;

    } catch (error) {
        
        console.log("deu errado ao obter id!");
    }

}

async function deletarFuncionario(id){

    const id2 = id; 
    try {
     await db.connect();
     const result =  await db.query(`DELETE  FROM funcionario WHERE cpf = ${id2}`);
     return result;

    } catch (error) {
        
        console.log("deu errado na função deletar!");
    }
}

async function cadastrarFuncionario(cpf,nome,senha,cargo){



    try {
        await db.connect();
        const result =  await db.query(`insert into funcionario (cpf,nome,senha,cargo) values('${cpf}','${nome}',${senha},'${cargo}')`);
        return result;
        
    } catch (error) {
       
        console.log("deu errado ao cadastrar pacientes!");
    }

}

async function atualizarFuncionario(id,nome){

    const id2 = id; 
    try {
     await db.connect();
     const result =  await db.query(`UPDATE funcionario SET nome = '${nome}' WHERE cpf = ${id}`);
     return result;

    } catch (error) {
        
        console.log("deu errado na função deletar!");
    }
}

module.exports = { pegarTodosHistoricoPeloCpf,obterFuncionarioPeloId,deletarFuncionario,cadastrarFuncionario,pegarTodosHistorico,atualizarFuncionario,pegarTodosFuncionario}