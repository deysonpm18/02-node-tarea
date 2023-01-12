const color = require("colors");
const { mostrarMenu, pausa } = require("./helper/mensaje");
console.clear();

const main = async () => {


  let = opt="";

do {
  
  opt = await mostrarMenu();


 await pausa();
  
} while (opt !=="0");



  
 
};
main();
