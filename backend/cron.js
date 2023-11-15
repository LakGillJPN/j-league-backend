import axios from "axios";
import express from 'express';
const app = express();

app.post('/api/cron', async (req, res) => { 
  try {
    const response = await axios.post('https://api.vercel.com/v1/integrations/deploy/prj_GvemCOI3NVS7D5A2VuG0CGgXN1Vz/mMICaEBVUM');
    console.log('Vercel deployment triggered:', response.data);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error triggering Vercel deployment:', error.message);
    res.status(500).json({ success: false, error: error.message });
  }
})

export default function handler(req, res) {
  res.status(200).end('Hello Cron!');
}


if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
  return res.status(401).end('Unauthorized');
}