import AppLayout from "./components/AppLayout";
import Finder from "./components/Finder";
import './assets/styles/index.scss';

function App() {
  return (
    <AppLayout>
      <div className="content">
        <Finder />
      </div>
    </AppLayout>
  )
}

export default App
