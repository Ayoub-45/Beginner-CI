import express from "express"
import { configDotenv } from "dotenv"
configDotenv()
const PORT=process.env.PORT || 5000
app.listen(PORT,() => {
    console.log(`App is running on port ${PORT}`)
})