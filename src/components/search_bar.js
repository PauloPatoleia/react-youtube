import React, {Component} from 'react';

// const searchBar = () => {
//    return <input type="text"/>
// };

class searchBar extends Component {

    render() {
        return <input type="text" onChange={this.onInputChange} />
    }

    onInputChange(event) {
        console.log(event.target.value)
    }

}


export default searchBar;