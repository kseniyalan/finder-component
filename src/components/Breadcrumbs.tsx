import Card from "./Card";

type Props = {
  items: string[];
};

function Breadcrumbs({ items }: Props) {
  return (
    <Card>
      <ul className="breadcrumbs">
        {items && items.map((item, index) => {
          return (
            <li key={index} className="breadcrumb">
              <button
                type="button"
                className="finder-btn"
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

export default Breadcrumbs;