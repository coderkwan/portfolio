const express = require('express')
const sql = require('@libsql/client')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express();

dotenv.config()
app.use(express.json())
app.use(cors({origin: process.env.CLIENT}))

const turso = sql.createClient({
    url: process.env.DATABASE_URL,
    authToken: process.env.DATABASE_TOKEN
})

app.post('/subscribe', async (req, res) => {

    const {email} = req.body

    try {
        let data = await turso.execute(`INSERT INTO emails (email) VALUES ('${email}');`);

        if (data.lastInsertRowid) {
            res.status(200).json({success: true, message: "✅ Your subscription was successful!"})
        } else {
            throw new Error("Can't send email")
        }


    } catch (e) {
        res.status(405).json({success: false, message: "⛔ An Error Occured while subscribing. Please contact Kwanele: kwanele at kwanelegamedze dot com."})
    }
})


app.post('/contact', async (req, res) => {
    const {email, name, message} = req.body

    try {

        let data = await turso.execute(`INSERT INTO contacts (email, name, message) VALUES ('${email}', '${name}','${message}');`);

        if (data.lastInsertRowid) {
            res.status(200).json({success: true, message: "✅ Your message was successfully sent!"})
        } else {
            throw new Error("Can't send message")
        }
    } catch (e) {
        res.status(405).json({success: false, message: "⛔ An Error Occured. Please contact Kwanele: kwanele at kwanelegamedze dot com."})
    }
})

app.listen(process.env.PORT, () => {
})
