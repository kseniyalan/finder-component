import AppLayout from "./components/AppLayout";
import Finder from "./components/Finder";
import './assets/styles/index.scss';

function App() {
  return (
    <AppLayout>
      <>
        <div className="finder-description">Click on an element to reveal the next level. Double click on the panel to move up a level.</div>
        <div className="finder-wrapper">
          <Finder />
        </div>
      </>
    </AppLayout>
  )
}

export default App
