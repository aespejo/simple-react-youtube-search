import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// custom components
import SearchBar from './components/search_bar';
import VideoList from './components/Video_list';
import VideoDetail from './components/video_detail';

const YT_API_KEY = 'AIzaSyD_XB3IGOcvXUc-7KnA_T0wmZes-r68Lc4';

class App extends Component {
        constructor(props) {
                super(props);
                this.state = { 
                        videos:[],
                        selectedVideo:null 
                };

                this.videoSearch('react js');
        }

        videoSearch(term) {
                YTSearch({key:YT_API_KEY, term:term}, (videos) => {
                        this.setState({
                                videos:videos,
                                selectedVideo:videos[0]
                        }); // es6(key abd value property should be the same)
                        // this.setState({videos:videos}); same on top
                        // console.log(this.state.videos);
                });
        }

        render() { 
                const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300); 
                return (
                        <div>
                                <SearchBar onSearchTerm={videoSearch} />
                                <VideoDetail video={this.state.selectedVideo} /> 
                                <VideoList 
                                        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                                        videos={this.state.videos} />
                        </div>
                )
        }
}
ReactDOM.render(<App />, document.querySelector('.container'));