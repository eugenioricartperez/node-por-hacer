

const fs = require('fs');



let listadoPorHacer = [];


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

fs.writeFile('./db/data.json',data,(err) => {
    if (err) throw new Error('No se pudo Grabar ',err);
})

}


const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
        console.log(listadoPorHacer);
        
    } catch (error) {
        listadoPorHacer=[];
    }
    return listadoPorHacer;
}



const crear = (descripcion) =>{
    cargarDB();
    let porHacer ={
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer) ;
    guardarDB();
    return porHacer;
}

const actualizar = (descripcion,completado = true ) =>{
    cargarDB();
    let index = listadoPorHacer.findIndex( tarea =>{
        return tarea.descripcion === descripcion;
    });
    if (index >=0 ) {
        listadoPorHacer[index].completado= completado;
        guardarDB();
        return true;
    }
        else{
            return false ;

    }

}

const borrar = (descripcion) =>{
      cargarDB();
      console.log("voy a borrar",descripcion );
      let borrado=false;
      let nuevoListadoPorHacer=[];
      let index = listadoPorHacer.findIndex(tarea => {
          return tarea.descripcion === descripcion;
      });
      for (let tarea of listadoPorHacer ){
          if (tarea.descripcion !== descripcion){
              console.log('fue diferente',tarea.descripcion," de " ,descripcion)
          nuevoListadoPorHacer.push(tarea);
          } else {
              borrado=true;
          }


      }
      listadoPorHacer=nuevoListadoPorHacer;
      guardarDB()
      return borrado;
}


module.exports = {
    crear , cargarDB , actualizar , borrar
}

