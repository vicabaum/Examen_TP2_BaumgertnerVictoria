
import express from "express"

const app = express()
const PORT = 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.get("/", (req, res) => {
res.send("Ok")
})

app.listen(PORT, () => console.log(`Server running on: http://localhost:${PORT}`))
app.on("Error", (err) => console.error(err))