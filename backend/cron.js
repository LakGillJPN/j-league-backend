export default function handler(req, res) {
  res.status(200).end('Hello Cron!');
}

if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
  return res.status(401).end('Unauthorized');
}