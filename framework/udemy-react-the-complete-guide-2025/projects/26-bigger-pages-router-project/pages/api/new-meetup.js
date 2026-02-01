import { connectDatabase, getMeetupsCollection } from "../../lib/db";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await connectDatabase();
    const meetupsCollection = getMeetupsCollection(client);

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    res.status(201).json({ message: "Meetup inserted!" });
  }
}

export default handler;
