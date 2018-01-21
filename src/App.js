import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';
import SvgLoader from './Components/lib/Ball/Ball';
// import Footer from '../src/Components/Footer';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      gifs: [],
      loading: true
    }
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (query = 'latest') => {
    axios
      .get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=66&api_key=dc6zaTOxFJmzC`)
      .then(response => {
        this.setState({gifs: response.data.data, loading: false});
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }
  render() {
    console.log(this.state.gifs);
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">GifSearch
            </h1>

            <SearchForm onSearch={this.performSearch}/>
          </div>
        </div>
        <div className="main-content">
          {(this.state.loading)

            ? <h1><SvgLoader/>
              </h1>

            : <GifList data={this.state.gifs}/>
}
        </div>

      </div>
    );
  }
}
