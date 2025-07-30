const express = require("express")
const app = express();
const cors = require("cors")
const axios = require("axios");

app.use(cors());
app.use(express.json());

app.get("/quotes", async (req, res)=>{

    try{
        const response = await axios.get("http://api.quotable.io/random");
        res.json({
            quote: response.data.content,
            author: response.data.author
        });
    }catch(error){
        console.error("Error fetching from API:", error.message);
        res.status(500).json({
            msg: "error fetching data"
        })
    }
})


app.listen(3000);