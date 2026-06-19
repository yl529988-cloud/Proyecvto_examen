const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://yl529988_db_user:TU_NUEVA_CONTRASEÑA@cluster0.ytgwyqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Conectado correctamente");
  } catch (err) {
    console.error("❌ Error:");
    console.error(err);
  } finally {
    await client.close();
  }
}

run();