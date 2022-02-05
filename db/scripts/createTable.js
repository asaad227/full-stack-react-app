import query from "../index.js";


const sqlString =`CREATE TABLE IF NOT EXISTS users(
    user_id SERIAL PRIMARY KEY,
    firstName VARCHAR(255),
    lastName VARCHAR(255),
    email VARCHAR(255),
    dob DATE
    
);`

async function createTable(){

    const data = await query(sqlString);

    console.log(`New table has been created`, data);
}

createTable();

// const sqlString1 = `CREATE TABLE posts (
//     post_id SERIAL PRIMARY KEY,
//     author INTEGER REFERENCES users(user_id),
//     created timestamp not null default CURRENT_TIMESTAMP,
//     content TEXT
// );`
// async function createTable1(){

//     const data = await query(sqlString1);

//     console.log(`New table has been created`, data);
// }

// createTable1()

// const sqlString2 =`CREATE TABLE comments (
//     comment_id SERIAL PRIMARY KEY,
//     post_id INTEGER REFERENCES posts(post_id),
//     author INTEGER REFERENCES users(user_id),
//     content TEXT,
//     created timestamp not null default CURRENT_TIMESTAMP
// );`


// async function createTable2(){

//     const data = await query(sqlString2);

//     console.log(`New table has been created`, data);
// }

// createTable2()