const color = require("colors");
const { resolve } = require("path");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();

    console.log("=======================".green);
    console.log(" seleciones una opcion".blue);
    console.log("=======================\n".green);

    console.log(`${"1.".green}crear tarea`);
    console.log(`${"2.".green}listar tarea `);
    console.log(`${"3.".green}listar tarea completada`);
    console.log(`${"4.".green}listar tareas pendientes`);
    console.log(`${"5.".green}completar tareas`);
    console.log(`${"6.".green}Borra tarea`);
    console.log(`${"0.".green}salir\n`);
    // esto se hace para crear una interfas
    const readLine = require("readline").createInterface({
      //la entra de informacion
      input: process.stdin,
      // el resultado
      output: process.stdout,
    });

    // esto llama un callback

    readLine.question(`Seleccione una opcion:`.green, (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};


const pausa = ()=>{

   return new Promise (resolve=>{


    const readLine = require("readline").createInterface({
      //la entra de informacion
      input: process.stdin,
      // el resultado
      output: process.stdout,
    });

    // esto llama un callback

    readLine.question(   `Presinone ${"ENTER".green} para continuar `, (opt) => {
      readLine.close();
      resolve();
      resolve();
    });











   })



}


module.exports = { mostrarMenu,  pausa};
