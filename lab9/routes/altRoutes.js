const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.sendFile( "./views/index.html", {root: '../lab9'})
})

router.get('*', (req, res) => {
    res.send("Error 404: Page not found")
})

module.exports = router