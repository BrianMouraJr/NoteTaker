const router = require("express").Router();
const fs = require("fs/promises")
// const path = require("path");

// Ternary Operator inefficient practice in error checking for routes but keeping it here as a personal lesson.
// Will use Try Catch practice below as it is more robust in error handling.
// 
// router.get("/notes", (req, res) =>{
//     fs.readFile('../db/db.json', 'utf8', (error, data) => //seek out db.json & read it, return contents in binary, translate it to utf8 so its readable. 3rd function is a callback function that will run when process is finished
//         // error ? console.error(error) : res.json(data) //ternary operator (simple one line if then statement to condense code. Boiler plate error check if then)
//       );
// })

router.get("/notes", async(req, res) =>{
    try {
      const data = await fs.readFile('./db/db.json', 'utf8')  
      // console.log(data)
      res.status(200).json(JSON.parse(data))
    } catch (err) {
      console.log(err) //print error
      res.status(500).json(err) //pass it along/tell the front end that the backend crashed  
    }
})

//Commented out due to code block not working and not returning any errors in console as to why
// router.post("/notes", (req , res) =>{
//     fs.readFile(path.join(__dirname, '../db/db.json'), 'utf8', (error, data) => {
//         let notes = JSON.parse(data)
//         console.log(notes)
//         notes.push(req.body)
//         fs.writeFile(path.join(__dirname, '../db/db.json'), JSON.stringify(notes), (err) => {
//             error ? console.error(error) : res.status(200)
//         })
//     })
// })

router.post("/notes", async(req , res) =>{
  try {
    const data = await fs.readFile('./db/db.json', 'utf8')  
    let notes = JSON.parse(data)
        notes.push(req.body)
        await fs.writeFile('./db/db.json', JSON.stringify(notes))
    // console.log(data)
    res.status(200).json("Note Added")
  } catch (err) {
    console.log(err) //print error
    res.status(500).json(err) //pass it along/tell the front end that the backend crashed  
  }
    
  
  
})

module.exports = router