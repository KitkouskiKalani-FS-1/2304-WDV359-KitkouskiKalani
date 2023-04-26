## MongoDB in Node.js
This code snippet shows me utilizing a mongo database through node.js and inserting a piece of data into it. 

```Javascript
const { MongoClient } = require('mongodb');

async function writeData() {
  const uri = 'mongodb://localhost:27017';
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('myDatabase');
    const collection = database.collection('myUsers');
    const data = { name: 'Kalani', age: 28 };
    const result = await collection.insertOne(data);
    console.log(`Successfully inserted ${result.insertedCount} document into the collection.`);
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
}

writeData();
```