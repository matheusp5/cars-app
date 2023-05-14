import CarsService from "../services/CarsService";
import {useEffect, useState} from "react";
import {Text, View} from "react-native";

export default function Home() {
    const [cars, setCars] = useState([])
    useEffect(() => {
        CarsService.GetAll().then((result: any) => setCars(result))
    },[])
    
    
    return <View>
        {cars.map((e: any, i: number) => {
            return <Text>{e.name} {e.model}</Text>
        })}
    </View>
}