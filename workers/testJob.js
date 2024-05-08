'use strict'

module.exports = async  (job,done) => {
    try{

      job.progress(50);

      console.log ('hola mundo desde el job');

      job.progress(100);

      return done(null,'Job ejecutado exitosamente');
      
    }catch(error){
        return done(error)
    }
}
