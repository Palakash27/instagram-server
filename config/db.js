// database connection file to MongoDB
import { mongoose } from "mongoose";

const USERNAME = "root";
const PASSWORD = "insta";
const CLUSTER = "instagram-cluster.x7fk4er";
const DBNAME = "instagramDB";

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", true);

        const conn = await mongoose.connect(
            `mongodb+srv://${USERNAME}:${PASSWORD}@${CLUSTER}.mongodb.net/${DBNAME}?retryWrites=true&w=majority`,
            {
                useUnifiedTopology: true,
                useNewUrlParser: true,
            }
        );
        console.log(
            `mongodb connected: ${conn.connection.host}`.cyan.underline
        );
    } catch (error) {
        console.log(`Error: ${error.message}`.underline.bold);
        process.exit(1);
    }
};

export default connectDB;
