import { useState } from 'react'
import SearchBox from './searchbox'
import CardList from './cardlist'
import Scroll from './scroll'
import 'tachyons'


export default function Home({ robots }) {
  const [searchField, setSearchField] = useState('')
  const [filteredRobots, setFilteredRobots] = useState(robots)

  const onSearchChange = (event) => {
    //setSearchField(event.target.value)
    setFilteredRobots(robots.filter(r => r.name.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  return (
    <div className='tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox change={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
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