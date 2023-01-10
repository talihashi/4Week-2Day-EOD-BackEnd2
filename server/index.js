const express = require("express")
const cors = require("cors")

const app = express()
//parses data back into a normal javascript object
app.use(express.json())
app.use(cors())

const { getHouses, deleteHouse, createHouse, updateHouse } = require("./controller.js")

app.get('/api/houses', getHouses)

app.delete("/api/houses/:id", deleteHouse)

app.put("/api/houses", updateHouse)

app.post("/api/houses", createHouse)

const PORT = 4004

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))