const uuid = require("uuid/v1") //id to delete posts
const fs = require("fs/promises")

class Store{
    readFile(){
        return fs.readFile('db/db.json', 'utf8') //use readfile to read contents of the json database
    }
    writeFile(write){
        return fs.writeFile('db/db.json', JSON.stringify(write)) //return the result of writing the file
    }
    getNotes(){
        return this.readFile().then((read) =>{
            let notes;
            try {
                notes = [].concat(JSON.parse(read))

            } catch (error) {
                //finish logic here
            }
        })
    }
}

module.exports = new Store();