import { useState } from "react";
import { FinderItemType } from '../types';

type Props = {
  onSelect: (item: FinderItemType) => void,
};

function Search({ onSelect }: Props) {
  const [searchByNameVal, setSearchByNameVal] = useState<string>('');
  const [searchResults, setSearchResults] = useState<FinderItemType[]>([]);

  const handleSearch = () => {
    //TEMP
    const results: FinderItemType[] = [
      {
        "id": 1,
        "name": "Západné Slovensko",
        "parent_id": 1,
        "description": null,
        "children": [
          {
            "id": 6,
            "name": "Trenčiansky kraj",
            "parent_id": 1,
            "description": "TC",
            "children": [],
          },
          {
            "id": 7,
            "name": "Trnavský kraj",
            "parent_id": 1,
            "description": "TA",
            "children": [],
          },
        ]
      },
      {
        "id": 1,
        "name": "Banskobystrický kraj",
        "parent_id": 2,
        "description": "BC",
        "children": [
          {
            "id": 2,
            "name": "Banská Bystrica",
            "description": "BB",
            "parent_id": 1,
            "children": [],
          },
          {
            "id": 3,
            "name": "Banská Štiavnica",
            "description": "BS",
            "parent_id": 1,
            "children": [],
          },
        ]
      },
      {
        "id": 2,
        "name": "Bratislavský kraj",
        "parent_id": 1,
        "description": "BL",
        "children": [],
      },
      {
        "id": 2,
        "name": "Banská Bystrica",
        "description": "BB",
        "parent_id": 1,
        "children": [],
      },
      {
        "id": 3,
        "name": "Banská Štiavnica",
        "description": "BS",
        "parent_id": 1,
        "children": [],
      },
      {
        "id": 132,
        "name": "Beňuš",
        "description": "976 64",
        "parent_id": 10,
        "children": [],
      },
      {
        "id": 498,
        "name": "Čierny Chrbát",
        "description": "946 03",
        "parent_id": 22,
        "children": [],
      },
      {
        "id": 499,
        "name": "Čierny Potok",
        "description": "980 31",
        "parent_id": 53,
        "children": [],
      },
    ];

    setSearchResults(results);
  }

  return (
    <div className="search-wrapper">
      <div className="search">
        <div className="search-top">
          <input
            type="text"
            className="search-input"
            placeholder="Search by name"
            value={searchByNameVal}
            onChange={(e) => setSearchByNameVal(e.target.value)}
          />
          <button
            type="button"
            className="search-btn"
            onClick={() => handleSearch()}
          >
            Search
          </button>
        </div>

        <div className="card">
          <ul className="search-results">
            {searchResults && searchResults.map((item, index) => {
              return (
                <li key={index}>
                  <button
                    type="button"
                    className="finder-btn outlined"
                    onClick={() => onSelect(item)}
                  >
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Search;