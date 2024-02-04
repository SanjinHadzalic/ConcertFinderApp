import { ConnectOptions, connect } from "mongoose";

export const dbConnect = () => {
    connect(process.env.MONGO_URL!, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as ConnectOptions).then(
        () => console.log("MongoDB connected successfully!"),
        (error) => console.log(error)
    )
}