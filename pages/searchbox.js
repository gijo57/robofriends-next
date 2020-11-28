const SearchBox = ({ change }) => {
    return (
        <div className='pa2'>
            <input 
            className='pa3 ba b--green bg-lightest-blue'
            type='search' 
            placeholder='Type here'
            onChange={change}
            />
        </div>
    );
}

export default SearchBox;