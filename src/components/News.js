import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

export class News extends Component {

    constructor(){
        super()
        this.state={
            articles : [],
            totalResults : 0,
            page:1,
            loading:true
        }
    }

   async componentDidMount(){
      this.updateNews()
    }

    updateNews = async ()=>{
      this.setState({
        loading:true
      })
      let {category}=this.props
      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${"bf7e1bf300ae418a9df2b0b633de8a38"}&category=${category}&page=${this.state.page+1}`;
      let response = await fetch(url)
      let parsedData = await response.json()
      // console.log(parsedData)
      
      this.setState({
        articles : parsedData.articles,
        totalResults : parsedData.totalResults
      })
    }
    
    fetchMoreData =async ()=>{
      this.setState({
        loading:true
      })
      let {category}=this.props
      let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=${"bf7e1bf300ae418a9df2b0b633de8a38"}&category=${category}&page=${this.state.page}`;
      let  response = await fetch(url)
      let parsedData = await response.json()
      // console.log(parsedData)
      this.setState({
        articles : this.state.articles.concat(parsedData.articles),
        totalResults : parsedData.totalResults,
        loading:false
      })
      
    }

  render() {
    return (
      <>
      <div className="container my-3">
      <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner />}
        >
      {this.state.articles.map((element)=>{
       return <Newsitem key={element.title} date={element.publishedAt} title={element.title} description = {element.description} newsUrl={element.url} imageUrl ={element.urlToImage} />
      })}
       </InfiniteScroll>
      </div>
      </>
    )
  }
}

export default News