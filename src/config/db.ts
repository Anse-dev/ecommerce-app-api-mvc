import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectedDb = async () => {
    try {
        await mongoose.connect(process.env.DBURL!)
        console.log('MongoDb connected')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

export default connectedDb;