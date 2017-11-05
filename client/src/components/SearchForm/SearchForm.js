import React, {Component} from 'react'
import Card from '../../components/Card'
import SearchResult from '../../components/SearchResult'
import {Input, FormBtn} from '../../components/Form'
import API from '../../utils/API.js'

class SearchForm extends Component {

    state = {
        searchTerm: "",
        recordNumber: 10,
        startYear: "",
        endYear: "",
        articles: []
    }


    handleInputChange = (event) => {
        let {name, value} = event.target
        this.setState({[name] : value})
    }
    handleButtonSearch = (event) => {
        event.preventDefault();
        API.search(this.state.searchTerm, this.state.recordNumber, this.state.startYear, this.state.endYear)
            .then(data => {
                this.setState({articles: data.data.response.docs})
                console.log(this.state.articles)
            })
            .catch(err => console.log(err))
    }

    handleButtonClear = (event) => {
        event.preventDefault();
        this.setState({articles: []})
  
    }

    render(){

        return (
        <div> 
            <Card title="Search Parameters">
                <form>

                    <Input 
                        name="searchTerm"  
                        label="Search Term"
                        onChange={this.handleInputChange}/>
                    <Input 
                        name="recordNumber" 
                        label="Number of Records To Retrieve" 
                        placeholder={this.state.recordNumber}
                        onChange={this.handleInputChange}/>
                    <Input 
                        name="startYear" 
                        label="Start Year(Optional)"
                        onChange={this.handleInputChange}/>
                    <Input 
                        name="endYear" 
                        label="End Year(Optional)"
                        onChange={this.handleInputChange}/>

                    <FormBtn onClick={this.handleButtonSearch}>
                        <i className="fa fa-search" aria-hidden="true"></i>
                        search
                    </FormBtn>
                    <FormBtn onClick={this.handleButtonClear}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                        Clear Result
                    </FormBtn>

                </form>
            </Card >
                {this.state.articles.length?
                <SearchResult articlesArr={this.state.articles}/>
                :
                <Card title="Top Articles" >
                    <h1> No Articles To display</h1>
                </Card >
            }
    
        </div> 
        )
    }
}

export default SearchForm
