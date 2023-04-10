const SearchBar = ({keyword, onChange}) => {
    const BarStyle = {background:"#F0F0F0", border:"none", padding:"0.5rem"};
    return (
        <div className="searchbar-cover">
        
            <input 
                style={BarStyle}
                className="searchbar"
                value={keyword}
                placeholder={"Type here to search Inventory"}
                onChange={onChange}
            />
        </div>
        
    );
}

export default SearchBar;