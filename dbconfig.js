const mongoose = require('mongoose')





mongoose.connect("mongodb://localhost:27017/nodepratices",{ useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify:false },(err) => {
  if(!err)
  console.log(`Data base connection succedd
  mongoDb connection has succedd`);
  else
  console.log('Error in db connection: '+JSON.stringify(err,undefined,2));

});



// mongoose.connect("mongodb+srv://sai:JcwtOjPKxddXFlFl@cluster0-cqeyw.mongodb.net/Employees?retryWrites=true&w=majority",{ useNewUrlParser: true,useUnifiedTopology: true },(err) => {
//       if(!err)
//       console.log('mongodb connection succeeded');
//       else
//       console.log('Error in db connection: '+JSON.stringify(err,undefined,2));
// });


module.exports = mongoose;

