import { MongoClient } from "mongodb";

let cachedClient = null;

export async function connectDatabase() {
  if (cachedClient) {
    return cachedClient;
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI);
  cachedClient = client;
  return client;
}

export function getMeetupsCollection(client) {
  const db = client.db();
  return db.collection("meetups");
}
