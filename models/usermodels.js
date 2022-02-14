const db = require('../db');

exports.adduser = async (body) => {
    try {
        return new Promise((resolve,reject)=>{
            db.query(`INSERT INTO user SET firstname = ?,lastname = ?,email = ?,phone = ?`,[body.firstname,body.lastname,body.email,body.phone],(err, resp) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(resp)
                }
                // res.send(resp)
            })
        })    
    } catch (error) {
        console.log(error);
    }
}

exports.updateuser = async (body,id) => {
    try {
        return new Promise((resolve,reject)=>{
            db.query(`UPDATE user SET firstname = ?,lastname = ?,email = ?,phone = ? WHERE id = ?`,[body.firstname,body.lastname,body.email,body.phone,id],(err, resp) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(resp)
                }
                // res.send(resp)
            })
        })    
    } catch (error) {
        console.log(error);
    }
}

exports.removeuser = async (id) => {    
    try {
        return new Promise((resolve,reject)=>{
            db.query(`DELETE FROM user WHERE id = ?`,[id],(err, resp) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(resp)
                }
                // res.send(resp)
            })
        })    
    } catch (error) {
        console.log(error);
    }
}

exports.getuser = async (firstname,lastname) => {
    
    try {
        return new Promise((resolve,reject)=>{
            db.query(`SELECT * FROM user WHERE firstname="${firstname}" or lastname="${lastname}"`,(err, resp) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(resp)
                }
                // res.send(resp)
            })
        })    
    } catch (error) {
        console.log(error);
    }
}
