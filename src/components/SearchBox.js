import React,{useState} from 'react'
const SearchBox = (props)=>{

    const [search,setSearch] = useState('')

    const onChange = (e)=>{
        setSearch(e.target.value)
    }

    return(
        <div className="row text-center">
              <p className="col-12 p-0 mb-2 text-left"><small>Please enter city ex: Dubai or polar coordinates lat,lon ex: 25.2582,55.3047</small></p>
            <input value={search} onChange={onChange} type="search" className="form-control rounded col-5" placeholder="Search" aria-label="Search"
                aria-describedby="search-addon" />
            <button type="button" className="btn btn-primary ml-2" onClick={() => {props.searchWeatherHandler({search_Keyword:search})}}>Check Weather</button>

        </div>
        
    )
}

export default SearchBox