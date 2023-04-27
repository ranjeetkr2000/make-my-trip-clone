import React, { Component } from 'react'
import SearchResult from './SearchResult'
import SearchHero from './SearchHero'
import Filters from './Filters'

class SearchPage extends Component {
  render() {
    return (
            <div className='search_page'>
              <SearchHero />
              <div className='filters_page align-self-center'>
                <Filters />
                <SearchResult />
              </div>
            </div>
    )
  }
}

export default SearchPage