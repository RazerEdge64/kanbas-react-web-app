import ModuleList from "../Modules/ModuleList";
import "./index.css";
import HeaderButtons from './HeaderButtons';
import StatusColumn from './StatusColumn';

function Home() {
  return (
      <div className="row">
        <div className="col-9">
          <HeaderButtons />
          <hr />
          <ModuleList />
        </div>
        <StatusColumn />
      </div>
  );
}

export default Home;
