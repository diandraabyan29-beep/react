const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Cari produk..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
