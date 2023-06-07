
const SearchBox = ({searchfield, searchChange} ) => {
    return (
        <div className="pa2">
            <input type="search"
                   placeholder="search robots" 
                   className="pa3 ba b--light-pink bg-washed-red"
                   onChange ={searchChange}
                   />
        </div>
        
    );
}
export default SearchBox;