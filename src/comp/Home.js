import React, { Component } from 'react';
import Newsitem from './Newsitem';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      sportsArticles: [],
      businessArticles: [],
      entertainmentArticles: [],
      healthArticles: [], 
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    this.fetchData('sports');
    this.fetchData('business');
    this.fetchData('entertainment'); 
    this.fetchData('health');
  }

  async fetchData(category) {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=2260b7a7a2e743298e804049a4e42aa7&page=1&pageSize=4`;
      let data = await fetch(url);
      let parseddata = await data.json();

      if (parseddata.articles && parseddata.articles.length > 0) {
        if (category === 'sports') {
          this.setState({ sportsArticles: parseddata.articles });
        } else if (category === 'business') {
          this.setState({ businessArticles: parseddata.articles });
        } else if (category === 'entertainment') {
          this.setState({ entertainmentArticles: parseddata.articles }); 
        } else if (category === 'health') {
          this.setState({ healthArticles: parseddata.articles }); 
        }
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }

  render() {
    return (
      <div className="container">
        {/* Business section */}
        <div className="mt-4">
          <div className="d-flex justify-content-between">
          <h2>Business</h2>
            <Link to="/Business" className="btn btn-light">View All</Link>
          </div>
          <div className="row">
            {/* Render Business articles */}
            {this.state.businessArticles.map((element) => (
              <div className='col-3' key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 0) : ""}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                  descriptionStyle={{ height: '0px', overflow: 'hidden' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Entertainment section */}
        <div className="mt-4">
          <div className="d-flex justify-content-between">
          <h2>Entertainment</h2>
            <Link to="/Entertaintment" className="btn btn-light">View All</Link>
          </div>
          <div className="row">
            {/* Render Entertainment articles */}
            {this.state.entertainmentArticles.map((element) => (
              <div className='col-3' key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 0) : ""}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                  descriptionStyle={{ height: '0px', overflow: 'hidden' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sports section */}
        <div className="mt-4">
          <div className="d-flex justify-content-between">
          <h2>Sports</h2>
            <Link to="/Sports" className="btn btn-light">View All</Link>
          </div>
          <div className="row">
            {/* Render Sports articles */}
            {this.state.sportsArticles.map((element) => (
              <div className='col-3' key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 0) : ""}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                  descriptionStyle={{ height: '0px', overflow: 'hidden' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Health section */}
        <div className="mt-4">
        <div className="d-flex justify-content-between">
          <h2>Health</h2>
            <Link to="/Health" className="btn btn-light">View All</Link>
          </div>
          <div className="row">
            {/* Render Health articles */}
            {this.state.healthArticles.map((element) => (
              <div className='col-3' key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 0) : ""}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                  descriptionStyle={{ height: '0px', overflow: 'hidden' }}
                />
              </div>
            ))}
          </div>
          
        </div>
      </div>
    );
  }
}
