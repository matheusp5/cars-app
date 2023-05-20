import ICarsService from "./interfaces/ICarsService";
import axios from "axios"

class CarsService extends ICarsService {
    private readonly BASE_URL: string = "http://192.168.56.1:3000/"
    async GetAll() {
        const {data} = await axios.get(this.BASE_URL + "cars")
        return data.content
    } 
    
}

export default new CarsService()