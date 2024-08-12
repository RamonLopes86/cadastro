import express from "express";
import cors from "cors";


const app = express()


const port = 3001


let dados=[]



app.use(express.json())

app.use(cors({

    methods:'*'
}))


app.get('/dados' , (req, res)=>{


    res.json(dados)


})


app.post('/envio' , (req, res)=>{

   const {nome, email, msg} = req.body


   if(!nome || !email || !msg){

        res.status(400).json({msg:"todos os campos devem ser preenchidos"})
   }

    const dadosConsolidados = {nome, email , msg }

    dados.push(dadosConsolidados)
    
    res.status(201).send("enviado com sucesso")
 
})



app.delete('/deletar/:id' , (req , res)=>{


    const id = parseInt(req.params.id)

    
    if(id >=0 && id < dados.length){

        dados.slice(id , 1)
        res.send('deletado com sucesso')

    }else{

        res.status(400).send("erro")
    }

  
})

    

    





app.listen(port , ()=>{


    console.log( `servidor iniciado na porta ${port}`)

})