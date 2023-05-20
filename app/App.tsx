import { StatusBar } from 'expo-status-bar';
import {ScrollView, Text, View} from 'react-native';
import Home from "./src/pages/Home";

export default function App() {
  return <ScrollView>
    <StatusBar />
    <Home/>
  </ScrollView>
}
