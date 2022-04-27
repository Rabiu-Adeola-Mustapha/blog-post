import mongoose from "mongoose";

//Getting connection string
const MONGO_URL = process.env.MONGO_URL;

if (!MONGO_URL){
    throw new Error("Pls, provide connection string in the env.local file")
}

// accessing mongoose from global variable
let cached = global.mongoose;

// checking if mongoose is in the global variable then add it to it
if(!cached){
    cached = global.mongoose = {conn:null, promise:null}
}

async function dbConnect () {
    // check if connection is already established, then reeturn it
    if (cached.conn){
        return cached.conn;
    }
    if (!cached.promise){
        const opts = {
            bufferCommands: false,
        };
        cached.promise = mongoose.connect(MONGO_URL, opts).then((mongose) => mongoose);

        cached.conn = await cached.promise;
        return cached.conn;

    }
}


export default dbConnect;