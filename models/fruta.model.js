const {Schema,model}=require('mongoose');

const SchemaFruta= new Schema({
name:{
    type:String
},

image:{
    type:String
},

});


module.exports=model('fruta',SchemaFruta);

