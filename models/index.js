import query from "../db/index.js";

export async function getAllTheData() {
  const data = await query(`SELECT * FROM users;`);

  return data.rows;
}

export async function createCommentsDetails(body) {
    
    const firstName = body.firstName;
    const lastName = body.lastName;
    const email = body.email;
    const dob = body.dob;

   
  
    const data = await query(
      `INSERT INTO users(firstName,lastName, email, dob) VALUES ($1, $2, $3, $4) RETURNING lastName;`,
      [firstName, lastName, email, dob]
    );
   
  
    return data.rows;
  }