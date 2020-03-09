


const argv = require('./config/yargs').argv;

const porHacer = require('./por-hacer/por-hacer');

const colors = require('colors');

console.log(argv);

let comando = argv._[0];

switch(comando)
{
case 'crear':
  let tarea = porHacer.crear( argv.description);
  console.log(tarea);
break;
case  'actualizar':
  console.log('actualizar tarea');
  let actualizar = porHacer.actualizar(argv.description,argv.completado);
  console.log(actualizar);
  break;
  case  'Mostrar':
    let report = porHacer.cargarDB();
for (let tarea of report ) {
console.log('=============='.green);
console.log('tarea:',tarea.descripcion);
console.log('Estado:',tarea.completado);
console.log('================'.green);

}



  //  console.log(report);
  //console.log('mostrar tareas por hacer');
  break;
 case  'borrar':
   console.log("llamo a borrar la ",argv.description);
      let borro=porHacer.borrar(argv.description);
      console.log("ha borrado : ",borro);
      break;
  default:
      console.log('acción no definida');



}