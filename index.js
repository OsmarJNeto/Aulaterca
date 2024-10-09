require('dotenv').config()
const express = require('express')
const {OpenAI} = require('openai')
const app = express()
const OPENAI_API_KEY = process.env.OPENAI_API_KEY
console.log(OPENAI_API_KEY)

//POST /pergunte-ao-chatgpt () => {}
app.post('/pergunte-ao-chatgpt', (req,res) => {
    const openai = new OpenAI(OPENAI_API_KEY)
    res.json({mensagem: 'OK'})
})

//defina esse endpoint, ele devolve esse json: {msg: "oi"}
//e mais ainda, acione-o via navegador
//localhost:3000/oi
//GET /oi

app.get('/oi', (req, res) => {
    const nome = req.query.nome;
    res.json({msg: `oi, ${nome}`})
})



app.listen(3000, () => {
    console.log('Subiu')
})