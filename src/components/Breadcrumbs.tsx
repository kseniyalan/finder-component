import { FinderItemType } from '../types';

type Props = {
  items: FinderItemType[],
  visibleColumns: number,
  onSelect: (item: FinderItemType, level: number) => void,
};

function Breadcrumbs({ items, visibleColumns, onSelect }: Props) {
  return (
    <div className="card">
      <ul className="breadcrumbs">
        {items && items.map((item, index) => {
          return index <= (items.length - visibleColumns) && (
            <li key={index} className="breadcrumb">
              <button
                type="button"
                className="finder-btn"
                onClick={() => onSelect(item, index)}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Breadcrumbs;