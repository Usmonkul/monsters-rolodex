import "./search-box.styles.css";

const SearchBox = ({ onSearchHandler, className, placeholder }) => {
  return (
    <>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onSearchHandler}
      />
    </>
  );
};

export default SearchBox;
