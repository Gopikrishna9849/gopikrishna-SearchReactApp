import "./index.css";
const SearchItem = (props) => {
  const { onUserInputChange, searchInput } = props;
  const onChangeSearchInput = (event) => {
    onUserInputChange(event.target.value);
  };
  return (
    <input
      type="search"
      value={searchInput}
      placeholder="Search by first name"
      onChange={onChangeSearchInput}
      className="search-input"
    />
  );
};
export default SearchItem;
