import React, {Component} from 'react';

// const searchBar = () => {
//    return <input type="text"/>
// };

class searchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { term: '' }
    }

    onInputChange = term => {
        this.setState({ term })
        this.props.onSearchTermChange(term)
    }
    
    render() { 
        return (
        <div className="search-bar">
            <input 
            value = {this.state.term}
            type="text" onChange={event => this.onInputChange(event.target.value)} />
        </div>
    )}

}


export default searchBar;