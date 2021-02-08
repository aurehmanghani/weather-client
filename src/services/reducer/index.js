import {Constants} from '../Constants'

export default function searchWeatherReducer(state=[],action){
    switch(action.type){
        case Constants.SEARCH_WEATHER:
            return {
                ...state,
                weatherData: action.data
            }
        default:
            return state
    }
}