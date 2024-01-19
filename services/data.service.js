import axios from "axios"
const url = "https://radiosserver.vercel.app/"
class DataService{
    getAllData = async()=>{
        return await axios.get(url + "api/radios")
    }
}
export const dataService = new DataService()