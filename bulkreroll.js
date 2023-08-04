const { sleep } = require('sleep');


const rerollMonster = require('./reroll');


//IMPORTANT : go through readme to understand the flow
const deployMonsters = async () => {

    const {readFile, writeFile} = require('fs/promises');
   
    // Read users.json file

    //data =  await readFile("toMint.json")
  //  console.log(data);
   // const mints = JSON.parse(data);


    

   //229549,231504, 231628
var mons = [234526,234029,234030,234028,234165,234584,234402,234186,234051,234359,234360,234382,234135]





    for (const i in mons) {

      //  if (completed.includes(addr)) {
       //     console.log('already exists - ');
      //  }else {
            sleep(1);
            var tx = await rerollMonster.run(mons[i]);
            console.log(tx);
        //    sleep(2);
        //    completed.push(addr)

        //    data =  await writeFile("mintCompleted.json", JSON.stringify(completed))
       //     console.log('file write completed');
       // }


       
    }
    


}

deployMonsters();