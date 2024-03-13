import Card from "./Card";
import { FinderItemType } from '../types';
import classnames from 'classnames';

type Props = {
  items: FinderItemType[],
  selectedItem?: FinderItemType,
  onSelect: (item: FinderItemType) => void,
};

function FinderPanel({ items, selectedItem, onSelect }: Props) {
  return (
    <Card panel>
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
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default FinderPanel;