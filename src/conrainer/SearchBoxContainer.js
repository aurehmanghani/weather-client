import SearchBox from '../components/SearchBox'
import {connect} from 'react-redux'
import {searchWeatherAction} from '../services/actions/search'

// const mapStateToProps = state => ({
//     data: state
// })

const mapDispatchToProps = (dispatch) =>{
    return {
        searchWeatherHandler: (data) => dispatch(searchWeatherAction(data))
    }
}

export default connect(null,mapDispatchToProps)(SearchBox)