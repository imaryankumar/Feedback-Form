import mongoose from "mongoose";

type ConnectionObject ={
  isConnected?:number
};

const connection :ConnectionObject={};

export const connectDB = async():Promise<void>=>{
    if(connection.isConnected){
        console.log("Already connected to database");
        return;
    }
    try {
  const dbName = await mongoose.connect(process.env.MONGO_URI || "",{
    dbName:"feedback"
   });
 
   connection.isConnected = dbName.connections[0].readyState;
     console.log("DB Connected Successfully");
    } catch (error) {
        console.log("Databse connection is failed",error)
       process.exit(1)     
    }
}