const descripcion = {
    demand:true,
    alias:'d',
    desc:'Descripción de la tarea por hacer'
};

const completado ={
    default: true,
    alias:'c',
    desc:' Marca como completado o pendiente una tarea'
}

const argv =require('yargs').command('crear','crear un elemento por hacer',{
        descripcion
})
.command('actualizar','Actualizar una tarea por hacer',{
    descripcion,
    completado
}).command('Mostrar','Lista todas las tareas archivadas',{})
.command('borrar','borra una tarea ',{
         descripcion
})
    .help()
    .argv;



module.exports ={
    argv
}