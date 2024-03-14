import { useState } from "react";
import classnames from 'classnames';
import { FinderItemType } from '../types';

type Props = {
  data: FinderItemType[],
  selectedItem?: FinderItemType,
  onSelect: (item: FinderItemType) => void,
};

const searchInTree = (data: FinderItemType[], searchVal: string): FinderItemType[] => {
  searchVal = searchVal.toLowerCase();
  let results: FinderItemType[] = [];
  data.forEach((item) => {
    if (item.name.toLowerCase().includes(searchVal) || item.description?.toLowerCase().includes(searchVal)) {
      results.push(item);
    }
    results = results.concat(searchInTree(item.children, searchVal));
  });
  return results;
};

function Search({ data, selectedItem, onSelect }: Props) {
  const [searchVal, setSearchVal] = useState<string>('');
  const [searchResults, setSearchResults] = useState<FinderItemType[]>([]);

  const handleSearch = () => {
    if (searchVal.length !== 0) {
      setSearchResults(searchInTree(data, searchVal));
    }
  }

  const handleClear = () => {
    setSearchVal('');
    setSearchResults([]);
  }

  return (
    <div className="search-wrapper">
      <div className="search">
        <div className="search-top">
          <input
            type="text"
            className="search-input"
            placeholder="Region name, code, postal code"
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          />
          <button
            type="button"
            className="search-btn"
            onClick={() => handleSearch()}
          >
            Search
          </button>
          <button
            type="button"
            className="search-btn"
            onClick={() => handleClear()}
          >
            Clear
          </button>
        </div>
        {searchResults.length !== 0 && (
          <div className="card">
            <ul className="search-results">
              {searchResults.map((item, index) => {
                return (
                  <li key={index}>
                    <button
                      type="button"
                      className={classnames({
                        'finder-btn': true,
                        'outlined': true,
                        'selected': selectedItem?.id === item.id
                      })}
                      onClick={() => onSelect(item)}
                    >
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}

export default Search;