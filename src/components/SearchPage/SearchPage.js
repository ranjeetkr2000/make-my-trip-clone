import React, { Component } from 'react'
import SearchResult from './SearchResult'
import SearchHero from './SearchHero'

import "./SearchPage.css";

class SearchPage extends Component {
  render() {
    return (
            <div className='search_page'>
              <SearchHero />
              <div className='filters_page align-self-center'>
                <SearchResult />
              </div>
            </div>
    )
  }
}

export default SearchPage