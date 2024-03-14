import { useState, useEffect } from 'react';
import classnames from 'classnames';
import Breadcrumbs from "./Breadcrumbs";
import FinderPanel from "./FinderPanel";
import { data } from "../data";
import { FinderItemType } from '../types';
import Search from './Search';

function Finder() {
  const [selectedItems, setSelectedItems] = useState<FinderItemType[]>([]);

  const handleSelectItem = (item: FinderItemType, level: number) => {
    setSelectedItems((selectedItems) => selectedItems.slice(0, level).concat([item]));
  }

  const handleUnselect = (level: number) => {
    setSelectedItems((selectedItems) => selectedItems.slice(0, level));
  }
  
  const visibleColumns = 3;
  const columnsData = [];
  let currenData = data;

  for (const selectedItem of selectedItems) {
    columnsData.push(currenData);
    currenData = currenData.find((item) => item.id === selectedItem.id)?.children;
  }

  columnsData.push(currenData);

  const contentClass = classnames({
    'finder-content': true,
    'one-column': selectedItems.length === 0,
    'two-columns': selectedItems.length === 1,
    'three-columns': selectedItems.length >= 2
  });

  return (
    <div className="finder">
      <Search onSelect={(item) => handleSelectItem(item, 1)} />
      <Breadcrumbs
        items={selectedItems}
        visibleColumns={visibleColumns}
        onSelect={handleSelectItem}
      />
      <div className={contentClass}>
        {columnsData && columnsData.map((column, index) => {
          //3 columns only
          return index >= (columnsData.length - visibleColumns) && (
            <FinderPanel
              key={index}
              items={column}
              selectedItem={selectedItems[index]}
              onSelect={(item) => handleSelectItem(item, index)}
              onUnselect={() => handleUnselect(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Finder;