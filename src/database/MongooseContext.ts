import * as mongoose from "mongoose";
import Car from "../cars/models/car.model"
import {v4 as uuid} from "uuid"

const USERNAME = process.env.USERNAME_MONGO
const PASSWORD = process.env.PASSWORD_MONGO

class MongooseContext {
    public CarSchema;
    async connect() {
        
        
        this.CarSchema = mongoose.model('Cars', new mongoose.Schema(Car))
        await mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@cluster-mx.qnsegho.mongodb.net/cars-lorem?retryWrites=true&w=majority`)

    }
}

export default new MongooseContext()