import {Constants} from '../Constants'
import axios from 'axios';
export const searchWeatherAction = (data) =>{
    return async (dispatch) =>{
        try {

            let url = ''

            if(data.search_Keyword.includes(',')){
                let inp = data.search_Keyword.split(',')
                url = `http://localhost:8080/weather/${inp[0]}/${inp[1]}`
            }else{
                url = `http://localhost:8080/weather/${data.search_Keyword}`
            }

            const result = await axios.get(url)
            
            if(result.data !== false){
                dispatch({type: Constants.SEARCH_WEATHER,data: result.data})
            }else{
                dispatch({type: Constants.SEARCH_WEATHER,data: false})
            }
        } catch (error) {
            console.log(error)
        }
        

    }
}