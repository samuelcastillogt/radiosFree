

import { StyleSheet} from 'react-native';
import { contants } from './constans';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
// import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite/next';

import Home from './pages/Home';
import Radios from './pages/Radios';
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Radio from './pages/Radio';
import { useEffect } from 'react';
import Fav from './pages/Fav';
import NewHome from './pages/NewHome';
// import { setup } from './services/favorites.service';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <Provider store={store}>
      {/* <SQLiteProvider databaseName="db.db" > */}
      <PaperProvider>
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={NewHome} options={{headerShown: false}}/>
      <Stack.Screen name="Radios" component={Radios} options={({ route }) => ({ title: route.params.filtro ? route.params.filtro.toUpperCase(): "TODAS" , headerStyle: {
            backgroundColor: '#3c5384',
          },          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, })}/>
      <Stack.Screen name="Radio" component={Radio} options={({ route }) => ({ title: route.params.radio.data.nombre.toUpperCase(), headerStyle: {
            backgroundColor: '#3c5384',
          },          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, })}/>
                <Stack.Screen name="Fav" component={Fav} options={({ route }) => ({ title: "Favoritas", headerStyle: {
            backgroundColor: '#3c5384',
          },          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, })}/>
    </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>
    {/* </SQLiteProvider> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: contants.bodyBackground,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  filtro:{
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  title:{
    color: contants.color,
    fontWeight: "bold",
    fontSize: 25
  }
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'white',
    paddingRight: 30,
    margin: 20 // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 15,
    color: 'white',
    backgroundColor: contants.color,
    paddingRight: 30,
    margin: 20 // to ensure the text is never behind the icon
  },
});
