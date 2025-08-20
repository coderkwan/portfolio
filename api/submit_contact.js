const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

const app = express();
const supabase = require('@supabase/supabase-js')

dotenv.config()
app.use(express.json())
app.use(cors({origin: process.env.CLIENT}))

app.post('/contact', async (req, res) => {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
    const supabas = supabase.createClient(supabaseUrl, supabaseAnonKey)

    const {name, email, message} = req.body

    const {error} = await supabas
        .from('coder_kwan_contacts')
        .insert({name, email, message})

    if (error) {
        console.log(error)
        res.status(405).json({success: false, message: "⛔ An Error Occured while sending youjr message. please use email: kwanele at coderkwan dot com."})
    } else {
        res.status(200).json({success: true, message: "✅ Your message was sent successfully!"})
    }
})

app.listen(process.env.PORT, () => {
})
