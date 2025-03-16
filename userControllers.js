const db = require('./db');

exports.getAllUsers = (req, res) => {
    let sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) throw err;
        res.send(results);
    });
};

exports.getUserById = (req, res) => {
    let sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) {
            res.status(500).json({ errormsg: err.sqlMessage ,error:err });
        }
        res.send(result);
    });
};

exports.getUserByEmail = (req, res) => {
    // let sql = 'SELECT * FROM users WHERE email = ?';
    console.log(req.params.email)
    let sql = 'SELECT * FROM users WHERE email = ?  LIMIT 25';
    db.query(sql, [req.params.email], (err, result) => {
        console.log(result)
        if (err) {
            res.status(500).json({ errormsg: err.sqlMessage ,error:err });
        }
        res.send(result);
    });
};

exports.getcartitemByEmail = (req,res) => {
    let sql = `SELECT * FROM cart WHERE email = ? LIMIT 25`;
    db.query(sql, [req.params.email] ,(err, result) => {
        console.log(result)
        if(err) {
            res.status(500).json({ errormsg: err.sqlMessage ,error:err });
        }else{
        res.status(200).json({ message: 'success', res: result });
        }
      
    });

}

exports.getcartitemByEmailAndImg = (req,res) => {
    let sql = 'SELECT * FROM cart WHERE email = ? AND productimg = ?  LIMIT 25';
    db.query(sql,[req.body.email,req.body.productimg],(err, result) => {
        console.log(result)
        if(err) {
            res.status(500).json({ errormsg: err.sqlMessage ,error:err });
        }else{
        res.status(200).json({ message: 'success', res: result });
        }
      
    });

}

exports.createUser =  (req, res) => {
    console.log("req.body => ",req.body)
    let newUser = { 
        name: req.body.name, 
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile,
        street: req.body.street,
        city:req.body.city,
        state:req.body.state,
        country:req.body.country,
        pincode:req.body.pincode
    };
    // const result = this.getcartitemByEmail()
    let sql = 'INSERT INTO users SET ?';
    db.query(sql, newUser, (err, result) => {
        if (err){
            console.error("Error inserting user: ", err);
            // Handle the error properly, sending an error response
            if(err.code == 'ER_DUP_ENTRY'){
            res.status(500).json({ errormsg: "Duplicate Entry" ,error:err });
            return;
            }
            else{
                res.status(500).json({ errormsg: "Duplicate Entry" ,error:err });
            }
        };
        res.status(200).json({ message: 'User added', res: result });
    });
};


exports.createcartitem = (req,res) =>{
    console.log(req.body);
    let newcartitem = {
        name:req.body.name,
        email:req.body.email,
        productimg: req.body.productimg,
        productname: req.body.productname,
        count:req.body.count,
        price:req.body.price,
        isselected : req.body.isselected
    }

    let sql = 'INSERT INTO cart SET ?';
    db.query(sql, newcartitem, (err, result) => {
        if (err){
            console.error("Error inserting cart item: ", err);
            res.status(500).json({ errormsg: "Duplicate Entry" ,error:err });
        }else{
        res.status(200).json({ message: 'item added sucessfully in the cart', res: result });
        }
    });
}

exports.updatecartitem = (req,res) =>{
    let updatedcartitem = {
        name:req.body.name,
        email:req.body.email,
        productimg: req.body.productimg,
        productname: req.body.productname,
        count:req.body.count,
        price:req.body.price,
        isselected : req.body.isselected
    };
    console.log(updatedcartitem)
    let sql = `UPDATE cart SET ? WHERE productimg = ? AND email = ?`

    db.query(sql,[updatedcartitem, req.body.productimg,req.body.email], (err, result) => {
        if (err){
            res.status(500).json({ errormsg: "Duplicate Entry" ,error:err });
        }
        // res.send('User updated...');
        res.status(200).json({ message: 'item updated Successfully in the cart', res: result });

    });
}

exports.deletecartitem = (req,res) =>{
    console.log(req)
    console.log("ea",req.body.email)
    console.log("df",req.body.productimg)
    let sql =  "DELETE FROM cart WHERE email = ? AND productimg = ?"
    db.query(sql, [req.body.email,req.body.productimg], (err, result) => {
        if (err){
            console.log(err)
            res.status(500).json({ errormsg: "unable to delete" ,error:err });
        }else{
        res.status(200).json( {message: 'item removed from the cart...',res:result});
        }
    });
}

exports.updateUser = (req, res) => {
    let updatedUser = {
        name: req.body.name, 
        email: req.body.email,
        password: req.body.password,
        mobile: req.body.mobile,
        street: req.body.street,
        city:req.body.city,
        state:req.body.state,
        country:req.body.country,
        pincode:req.body.pincode
    };
    let sql = 'UPDATE users SET ? WHERE id = ?';
    db.query(sql, [updatedUser, req.params.id], (err, result) => {
        if (err){
            res.status(500).json({ errormsg: "Duplicate Entry" ,error:err });
        }
        // res.send('User updated...');
        res.status(200).json({ message: 'User updated', res: result });

    });
};

exports.deleteUser = (req, res) => {
    let sql = 'DELETE FROM users WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send('User deleted...');
    });
};