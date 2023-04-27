import React, { Component } from 'react'
import SearchResult from './SearchResult'
import SearchHero from './SearchHero'

class SearchPage extends Component {
  render() {
    return (
            <div className='search_page'>
              <SearchHero />
              <SearchResult />
            </div>
    )
  }
}

export default SearchPage