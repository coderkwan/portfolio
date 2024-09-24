export const config = {
    runtime: 'nodejs',
};

import {createClient} from '@supabase/supabase-js';

export default async function handler(req, res) {
    if (req.method === 'POST') {

        const supabaseUrl = process.env.SUPABASE_URL;
        const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
        const supabas = createClient(supabaseUrl, supabaseAnonKey)

        const {name, email, message} = req.body

        const {error} = await supabas
            .from('coder_kwan_contacts')
            .insert({name, email, message})

        if (error) {
            res.status(405).json({success: false, message: "⛔ An Error Occured while sending youjr message. please use email: kwanele at coderkwan dot com."})
        } else {
            res.status(200).json({success: true, message: "✅ Your message was sent successfully!"})
        }
    } else {
        res.status(405).json({success: false, message: "Only post request are allowed!"})
    }
}
