import Breadcrumbs from "./Breadcrumbs";
import FinderPanel from "./FinderPanel";
import { data } from "../data";

const breadcrumbs = [
  'Apple',
  'Orange',
  'Mango',
  'Pineapple'
];

function Finder() {
  console.log('data: ', data);
  return (
    <div className="finder">
      <Breadcrumbs items={breadcrumbs} />
      <div className="finder-content">
        <FinderPanel items={breadcrumbs} />
        <FinderPanel items={breadcrumbs} />
        <FinderPanel items={breadcrumbs} />
      </div>
    </div>
  );
}

export default Finder;