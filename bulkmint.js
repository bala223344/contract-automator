const { sleep } = require('sleep');


const index = require('./index');
const addMonster = require('./addMonsterClassExtend');
const addProperty1 = require('./addClassProperty1');
const addProperty2 = require('./addClassProperty2');
const addProperty3 = require('./addClassProperty3');
const mintMonster = require('./mint2');
const transformSetting = require('./addTransformSetting');
const setMonsterPrice = require('./setMonsterClass');


//IMPORTANT : go through readme to understand the flow
const deployMonsters = async () => {

    const {readFile, writeFile} = require('fs/promises');
   
    // Read users.json file

    data =  await readFile("toMint.json")
    console.log(data);
    const mints = JSON.parse(data);


    for (const i in mints) {
        var class_id=mints[i][1]
        var addr =mints[i][0]

      //  if (completed.includes(addr)) {
       //     console.log('already exists - ');
      //  }else {
            sleep(5);
            var tx = await mintMonster.run(class_id, addr, "Reward");
            console.log(i);
        //    sleep(2);
        //    completed.push(addr)

        //    data =  await writeFile("mintCompleted.json", JSON.stringify(completed))
       //     console.log('file write completed');
       // }


       
    }
    


}

deployMonsters();