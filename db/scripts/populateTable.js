import query from "../index.js"
import {data} from "../../dummyData.js"


async function populatedTable(){
    for(let i =0; i < data.length; i++){
        const firstName = data[i].firstName;
        const lastName = data[i].lastName;
        const email = data[i].email;
        const dob = data[i].dob;
     

        const res = await query(`INSERT INTO users(firstName, lastName, email, dob) VALUES ($1, $2, $3, $4)
         RETURNING lastName`,[firstName, lastName, email, dob])

         console.log(res);
    }
}

populatedTable()