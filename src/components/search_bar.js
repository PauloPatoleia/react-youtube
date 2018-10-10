import React, {Component} from 'react';

// const searchBar = () => {
//    return <input type="text"/>
// };

class searchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { term: '' }
    }


    render() { 
        return (
        <div className="search-bar">
            <input 
            value = {this.state.term}
            type="text" onChange={this.onInputChange} />
        </div>
    )}

    onInputChange = event => this.setState({ term: event.target.value })
    

}


export default searchBar;