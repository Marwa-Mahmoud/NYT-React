import React, {Component} from 'react'
import SearchForm from '../../components/SearchForm'



class SearchContainer extends Component{

    state = {
        articles: []
    }

    render() {
        return (
        <div>
            <SearchForm />
          
        </div>
        )
    }
}


export default SearchContainer