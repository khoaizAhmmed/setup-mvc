const Table = require('../model/Table')

const AppController ={
    index : async (req,res)=>{
        const rows = await Table.data()
        console.log(rows)
        res.render('')
    }
}

module.exports = AppController