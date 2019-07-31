import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
    
    getSearch = (e) => {
        const keyword = e.target.value

        //enviarlo por props
        this.props.searcher(keyword)
    }

    render() {
        return (
            <form className="buscador">
                <input type="text" placeholder="Search" onChange={this.getSearch}/>
            </form>
        );
    }
}

export default Search;