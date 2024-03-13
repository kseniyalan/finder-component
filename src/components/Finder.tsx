import Breadcrumbs from "./Breadcrumbs";
import FinderPanel from "./FinderPanel";

const breadcrumbs = [
  'Apple',
  'Orange',
  'Mango',
  'Pineapple'
];

function Finder() {
  return (
    <div className="finder">
      <Breadcrumbs items={breadcrumbs} />
      <div className="finder-content">
        <FinderPanel>zscs</FinderPanel>
        <FinderPanel>zscs</FinderPanel>
        <FinderPanel>zscs</FinderPanel>
      </div>
    </div>
  );
}

export default Finder;