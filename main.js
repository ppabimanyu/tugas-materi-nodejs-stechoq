const {  saveData } = require('./todo-app')
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const util = require('node:util');
const inputName = util.promisify(rl.question).bind(rl);
const inputNim = util.promisify(rl.question).bind(rl);
const inputGender = util.promisify(rl.question).bind(rl);
const inputCity = util.promisify(rl.question).bind(rl);

const main = async () => {
  try {
    const name = await inputName('Name : ');
    const nim = await inputNim('NIM : ');
    const gender = await inputGender('Gender : ');
    const city = await inputCity('City : ');
    if(name.trim().length > 0 && nim.trim().length > 0 && gender.trim().length > 0 && city.trim().length > 0) {
      const data = {
        name : name,
        nim : nim,
        gender : gender,
        city : city
      }
      saveData(data)    
    }else{
      throw new Error(`empty`);
    }
  } catch (err) {
    console.error('Question rejected', err);
  } finally {
    rl.close()  
  }
}

main()
