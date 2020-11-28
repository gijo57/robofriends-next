import Card from './card'

const CardList = ({ robots, searchField }) => {
    return (
        <div>
            {
                robots.filter(r => r.name.toLowerCase().includes(searchField.toLowerCase())).map((user, i) => {
                    return (
                        <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                        />
                    );
                })
            }
      </div>
    );
}

export default CardList;