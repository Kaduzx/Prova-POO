const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("ola - kkkkk!");
});


app.get("/contato/:id", (req, res) => {
   const { id } = req.params;
   const { sit } = req.query;
   return res.json({
    id,
    nome:"welisson",
    email:"welisson@celk.com.br",
    sit
   });
})

app.post("/contato", (req,res) => {
    let nome = req.body.nome;
    let email = req.body.email;
    return res.json({
        nome,
        email
    });
});

app.put("/contato/:id", (req,res) => {
    const { id } = req.params;
    const { _id,nome, email } = req.body;

    return res.json({
      id,
      _id,
      nome,
      email
    });
});  
    
app.delete("/contato/:id", (req,res) => {
   const { id } = req.params;

   return res.json({
      id
   })
});


app.listen(8080, () => {
    console.log("servidor iniciado na porta 8080:");
});