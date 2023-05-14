import ICarsService from "./interfaces/ICarsService";
import Car from "../../../src/cars/models/car.model";
import axios from "axios"

class CarsService extends ICarsService {
    private readonly BASE_URL: string = "http://192.168.1.17:3000/"
    async GetAll() {
        const {data} = await axios.get(this.BASE_URL + "cars")
        return data.content
    } 
    
}

export default new CarsService()