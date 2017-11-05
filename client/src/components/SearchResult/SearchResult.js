import React, {Component} from 'react'
import Card from '../../components/Card'
import API from '../../utils/API.js'


class SearchResult extends Component {

    state = {
        articles: []
        
    }
    componentDidMount() {
        this.setState({articles: this.props.articlesArr})
        
    }
 

    showArticles = (arr) => {
        console.log(arr);
        return (arr.map((element,i) => (
            <div className="card" key={i} style={{backgroundColor:'lightGrey', padding:10}}>
                <h3>{element.headline.main}</h3>
                <p>{element.pub_date}</p>
                <a href={element.web_url}>{element.web_url}</a>
                <button type="button" className="btn btn-success float-right" 
                        onClick={() => {this.handleSaveArticle(element)}}
                        style={{width:100}}
                >Save</button>

            </div>)))
        
    } 

    handleSaveArticle = (article) =>{
        let articleToSave = {
            title: article.headline.main,
            date: article.pub_date,
            url: article.web_url
        }

        API.saveArticle(articleToSave)
            .then(data => {
                this.setState({articles: this.state.articles.filter(element => element.headline.main !== articleToSave.title)})
                this.render()
            })
            .catch(err => console.log(err))

        
        
    }
        

    render(){

        return (
            <Card title="Top Article">
                <div>{this.showArticles(this.state.articles)}</div>
            </Card>
        )
    }
}


export default SearchResult