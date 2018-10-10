// External dependencies
import React from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';

// Local dependencies
import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

// API KEY
const API_KEY =  'AIzaSyC8gv_xXhkCUoT6ZA7WAuxMqRaGnpFLRmA'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { 
      videos: [],
      selectedVideo: null
    }

  /**
   * Fetch videos from Youtube
   * @param {object} key: Youtube api key | term: Youtube serach term
   * @return {array} of objects (YT videos)
   */

    YTSearch({key: API_KEY, term: 'node'}, videos => {
      this.setState({ 
        videos: videos,
        selectedVideo: videos[0]
        })  
      });
  }
 
  render() {
    return ( 
      <div>
        <SearchBar />

        <VideoDetail 
          video={this.state.selectedVideo} />

        <VideoList 
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={ this.state.videos } />

        </div> 

      )
  }
  
}

ReactDom.render(<App></App>, document.querySelector('.container'));
