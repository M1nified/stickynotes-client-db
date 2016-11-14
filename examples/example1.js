let snidb;
let sing = SNClientDB.singleton;
console.log(sing);
sing.then((instance)=>{
  snidb = instance;
  console.log(instance);
}).catch((error)=>{
  console.error(error);
});