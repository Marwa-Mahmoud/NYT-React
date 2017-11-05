import React, {Component} from 'react'
import API from '../../utils/API.js'

class Saved extends Component {

    state ={
        savedArticles: []
    }

    componentDidMount(){
        this.showSavedArticles()
    }

    showSavedArticles(){
        API.displaySavedArticles()
        .then(data => {
            console.log(data.data)
            this.setState({savedArticles: data.data})
        })
        .catch(err => console.log(err))
    }

   handleArticleDelete(id){
       API.deleteArticle(id)
        .then(data => {
            console.log(data)
            this.setState({savedArticles: this.state.savedArticles.filter(element => element._id !== id)})
            //this.showSavedArticles()
            this.render()
        })
        .catch(err => console.log(err))
   }

render(){
    return(
    <div>{
        this.state.savedArticles.map((element, i) => (
            <div className="card" key={i} style={{backgroundColor:'lightGrey', padding:10}}>
                <h3>{element.title}</h3>
                <p>{element.date}</p>
                <a href={element.url}>{element.url}</a>
                <button type="button" className="btn btn-danger float-right" 
                    onClick={() => this.handleArticleDelete(element._id)}
                    style={{width:100}}
                >Delete</button>
             </div> ))
        }
    </div>
    )
     

    }
}

  
    
    
export default Saved