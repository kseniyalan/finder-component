import { FinderItemType } from '../types';
import classnames from 'classnames';

type Props = {
  items: FinderItemType[],
  selectedItem?: FinderItemType,
  onSelect: (item: FinderItemType) => void,
  onUnselect: () => void
};

function FinderPanel({ items, selectedItem, onSelect, onUnselect }: Props) {
  return (
    <div className="card panel" onDoubleClick={onUnselect}>
      <ul className="finder-items">
        {items && items.map((item, index) => {
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
                disabled={item.children?.length === 0}
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

export default FinderPanel;