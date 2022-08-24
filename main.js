const {  saveData } = require('./todo-app')
const readline = require('node:readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const util = require('node:util');
const question = util.promisify(rl.question).bind(rl);

const main = async () => {
  try {
    const name = await question('Name : ');
    const nim = await question('NIM : ');
    const gender = await question('Gender : ');
    const city = await question('City : ');
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
