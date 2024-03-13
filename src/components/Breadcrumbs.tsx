import Card from "./Card";
import { FinderItemType } from '../types';

type Props = {
  items: FinderItemType[],
  onSelect: (item: FinderItemType, level: number) => void,
};

function Breadcrumbs({ items, onSelect }: Props) {
  return (
    <Card>
      <ul className="breadcrumbs">
        {items && items.map((item, index) => {
          return (
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
    </Card>
  );
}

export default Breadcrumbs;