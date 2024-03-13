import Card from "./Card";

type Props = {
  items: string[]
};

function FinderPanel({ items }: Props) {
  return (
    <Card panel>
      <ul className="finder-items">
        {items && items.map((item, index) => {
          return (
            <li key={index}>
              <button
                type="button"
                className="finder-btn outlined"
                onClick={() => {}}
              >
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default FinderPanel;