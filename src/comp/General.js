import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class General extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page:1
    };
  }

  async componentDidMount() {
    try {
      let url = "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=2260b7a7a2e743298e804049a4e42aa7&page=1&pageSize=12";
      let data = await fetch(url);
      let parseddata = await data.json();
      this.setState({ articles: parseddata.articles,results: parseddata.totalResults });
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

 next= async()=>{
  if(this.state.page>=Math.ceil(this.state.results/12)){

  }
  else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=2260b7a7a2e743298e804049a4e42aa7&page=${this.state.page+1}&pageSize=12`;
        let data = await fetch(url);
        let parseddata = await data.json();
    this.setState({
      page: this.state.page+1,
      articles: parseddata.articles
    })
  }

}  

prev= async()=>{
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=2260b7a7a2e743298e804049a4e42aa7&page=${this.state.page-1}&pageSize=12`;
      let data = await fetch(url);
      let parseddata = await data.json();
  this.setState({
    page: this.state.page-1,
    articles: parseddata.articles
  })

} 

  render() {
    return (
      <div className='container my-3'>
        <h2>NewsApp- Top Headlines</h2>
        <div className="row my-4">
          {
            this.state.articles.map((element) => (
              <div className='col-md-3' key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0,45): ""}
                  description={element.description ? element.description.slice(0,80) : ""}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                  descriptionStyle={{ height: '80px', overflow: 'hidden' }}
                />
              </div>
            ))
          }
        </div>
        <div className="container d-flex justify-content-around">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.prev}>&larr; previous</button>
          page {this.state.page}
          <button type="button" className="btn btn-dark" onClick={this.next}>next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default General;
