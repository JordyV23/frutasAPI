const mongoose = require('mongoose');

const conectorMONGO=async()=>{
    try{
        mongoose.set('strictQuery',true)
        await mongoose.connect("mongodb+srv://JordyV23:1234@cluster0.azswxit.mongodb.net/Frutas");   
        console.log('La conexion a mongo fue exitosa');
    }
   catch(err){
    console.log(err);
    throw new Error('Error en la conexion de datos');
    }

}

module.exports=conectorMONGO;