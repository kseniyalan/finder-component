import { useState } from 'react';
import classnames from 'classnames';
import Breadcrumbs from "./Breadcrumbs";
import FinderPanel from "./FinderPanel";
import { data } from "../data";
import { FinderItemType } from '../types';
import Search from './Search';

function Finder() {
  const [selectedItems, setSelectedItems] = useState<FinderItemType[]>([]);

  //Traverse the tree from the selected item to the root element
  const handleSelectItem = (item: FinderItemType) => {
    const selectedTree: FinderItemType[] = [item];
    //Check if the first element has a parent;
    //Then insert the parent into the selectedTree array as the first element (again)
    while(selectedTree[0].parent !== undefined) {
      selectedTree.unshift(selectedTree[0].parent);
    }
    setSelectedItems(selectedTree);
  }

  const handleUnselect = (level: number) => {
    setSelectedItems((selectedItems) => selectedItems.slice(0, level));
  }
  
  const visibleColumns = 3;

  //Create columns data
  //The first column is always the top level
  //All other columns contain children of selected item from previous column
  //In the end, we get array of arrays of items for each column
  // filter() is needed to delete the last column if it is empty
  const columnsData: FinderItemType[][] = [data].concat(selectedItems.map(item => item.children)).filter(items => items.length !== 0);
  
  const contentClass = classnames({
    'finder-content': true,
    'one-column': selectedItems.length === 0,
    'two-columns': selectedItems.length === 1,
    'three-columns': selectedItems.length >= 2
  });

  return (
    <div className="finder">
      <Search
        data={data}
        selectedItem={selectedItems[selectedItems.length - 1]}
        onSelect={(item) => handleSelectItem(item)}
      />
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
              onSelect={(item) => handleSelectItem(item)}
              onUnselect={() => handleUnselect(index)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Finder;