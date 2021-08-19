const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const dbConnection = async() => {

     try {

          await mongoose.connect(process.env.DB_CNN, {
               useNewUrlParser: true,
               useUnifiedTopology: true,
               useCreateIndex: true
          });

          console.log('Db online');

          
     } catch (error) {
          console.log(error);
          throw new Error('Error al inicializar la DB');
     }

}


module.exports = {
     dbConnection
}