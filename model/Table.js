const DBconnect = require('../config/database')
const Table = {
    save : async (argument)=>{
        const Sql = ' '
        const value = [argument]
        const [rows] =await DBconnect.promise().execute(Sql,value)
        return rows
    }
}
module.exports = Table
