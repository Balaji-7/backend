const connection = require('./db')

const createUsersTable = () => {
//     const sql = `
//     CREATE TABLE IF NOT EXISTS users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     name VARCHAR(255) NOT NULL,
//     email VARCHAR(255) NOT NULL UNIQUE,
//     password VARCHAR(255) NOT NULL,
//     mobile VARCHAR(20) NOT NULL,
//     street VARCHAR(80),
//     city VARCHAR(20),
//     state VARCHAR(20),
//     country VARCHAR(20),
//     pincode VARCHAR(20)
//     )`
// ;

const sql = `
CREATE TABLE IF NOT EXISTS cart (
name VARCHAR(255) NOT NULL,
email VARCHAR(255) NOT NULL,
productimg VARCHAR(255) NOT NULL UNIQUE,
productname VARCHAR(20) NOT NULL,
price VARCHAR(80) NOT NULL,
count VARCHAR(20) NOT NuLL,
isselected VARCHAR(20) NOT NULL
)`;

connection.query(sql, (err,result) => {
    if(err){
        console.log("Error on Creation",err)
    }
    else{
        console.log("Users table Created Successfully")
        console.log(result)
    }
})

};

createUsersTable();