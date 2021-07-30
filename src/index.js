(async () => {

    const db = require('./config/database');
    const paciente = require("./api/farmacia");
    const server = require("./server/server");
    const repository = require("./repository/repository");

    try {
        await server.start(paciente, repository);
    } catch (error) {
        console.log("Deu errado aqui!");
        
    }
})();