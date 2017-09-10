import React, { Component } from 'react';

// class base components
class SearchBar extends Component {

        constructor(props) {
                super(props);

                // init the search term value
                this.state = { term:'' };
                //event binding
                this.onInputChange = this.onInputChange.bind(this);
        }
        render() {
                
                return (
                        <div className="search-bar">
                                <input placeholder="Search youtube video" 
                                        value={this.state.term} 
                                        onChange={this.onInputChange} />
                                {/* <input onChange={event => this.setState({term:event.target.value})} /> */}
                        </div>
                        
                );
        }

        onInputChange(e) {
                this.setState( { term: e.target.value } );
                this.props.onSearchTerm(this.state.term);
        }
}

export default SearchBar;