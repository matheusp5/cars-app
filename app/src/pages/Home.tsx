import CarsService from "../services/CarsService";
import {useEffect, useState} from "react";
import {Text, View, StyleSheet, ScrollView} from "react-native";
import CarComp from "../components/Car";
import Car from "../../../src/cars/models/car.model";

export default function Home() {
    const [cars, setCars] = useState<Car[]>([])
    useEffect(() => {
        CarsService.GetAll().then(setCars)
    },[])
    
    
    return <View style={s.container}>
        <Text style={s.title}>Carros</Text> 
        <Text>Feito por Matheus Piccoli</Text>
        <View style={s.cars}>
            {cars.map((e: Car, i: number) => {
                return <CarComp car={e} key={e.id} />
            })}
        </View>
    </View>
}

const s = StyleSheet.create({
    container: {
        marginHorizontal: 30
    },
    title: {
        marginTop: 45,
        fontSize: 30,
        fontWeight: "bold"
    },
    cars: {
        marginTop: 5
    }
})