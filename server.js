const express = require("express")
const cors = require("cors")

const app = express()
app.set('trust proxy', true)
app.use(cors())

app.get('/', (req, res) => {
    res.send("Server is running successfully🎉jfjfjf")
})

app.get('/ip', (req, res) => {
    const ip = req.ip
    res.json({"IP_Address": ip})
    // res.send(ip)
})

const port = process.env.POST || 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})