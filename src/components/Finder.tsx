import { useState, useEffect } from 'react';

import Breadcrumbs from "./Breadcrumbs";
import FinderPanel from "./FinderPanel";
import { data } from "../data";
import { FinderItemType } from '../types';

function Finder(): JSX.Element {
  const [selectedItems, setSelectedItems] = useState<FinderItemType[]>([]);

  const handleSelectItem = (item: FinderItemType, level: number) => {
    setSelectedItems((selectedItems) => selectedItems.slice(0, level).concat([item]));
  }
  
  const columnsData = [];
  let currenData = data;

  for (const selectedItem of selectedItems) {
    columnsData.push(currenData);
    currenData = currenData.find((item) => item.id === selectedItem.id)?.children;
  }

  columnsData.push(currenData);

  return (
    <div className="finder">
      <Breadcrumbs
        items={selectedItems}
        onSelect={handleSelectItem}
      />
      <div className="finder-content">
        {columnsData && columnsData.map((column, index) => {
          return (
            <FinderPanel
              key={index}
              items={column}
              selectedItem={selectedItems[index]}
              onSelect={(item) => handleSelectItem(item, index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Finder;