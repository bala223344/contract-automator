const { sleep } = require('sleep');



const rerollMonster = require('./reroll');



//IMPORTANT : go through readme to understand the flow
const deployMonsters = async () => {

    const {readFile, writeFile} = require('fs/promises');
   
    // Read users.json file

    data =  await readFile("toUpdate.json")
    console.log(data);
    const mints = JSON.parse(data);




    for (const i in mints) {
        var class_id=mints[i][0]
        var rarity =mints[i][1]

      //  if (completed.includes(addr)) {
       //     console.log('already exists - ');
      //  }else {
            sleep(4);
            var tx = await rerollMonster.rarity(class_id, rarity);
            console.log(tx);
        //    sleep(2);
        //    completed.push(addr)

        //    data =  await writeFile("mintCompleted.json", JSON.stringify(completed))
       //     console.log('file write completed');
       // }


       
    }
    


}

deployMonsters();