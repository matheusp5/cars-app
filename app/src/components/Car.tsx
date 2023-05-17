import Car from "../../../src/cars/models/car.model";
import {Image, StyleSheet, Text, View} from "react-native"

interface CarProps {
    car: Car
}

export default function CarComp({car}: CarProps) {
    return <View style={s.car}>
        <View>
            <Text style={s.carTitle}>{car.model}</Text>
            <Text>{car.name}</Text>
            <Text>Ano: {car.year}</Text>
            <Text>{car.plate}</Text>
        </View>
        <Image style={{height: 100, width: 150}} source={{uri: car.imageUrl}}/>
    </View>
}

const s = StyleSheet.create({
    car: {
        paddingLeft: 10,
        borderWidth: 1,
        marginVertical: 10,
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    carTitle: {
        fontWeight: "bold"
    }
})