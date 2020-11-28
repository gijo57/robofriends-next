import { useState } from 'react'
import SearchBox from './searchbox'
import CardList from './cardlist'
import Scroll from './scroll'
import 'tachyons'


export default function Home({ robots }) {
  const [searchField, setSearchField] = useState('')
  const onSearchChange = (event) => {
    setSearchField(event.target.value)
  }

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox change={onSearchChange} />
      <Scroll>
        <CardList robots={robots} searchField={searchField} />
      </Scroll>
    </div>
  )
}

export async function getStaticProps(context) {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return {
    props: {
        robots: data
    }
  }
}