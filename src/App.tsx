import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";
import Sidebar from "./components/Sidebar/Sidebar";
import AppRouter from "./routes/AppRoutes";
import "./index.css";

const App: React.FC = observer((): JSX.Element => {
  return (
    <BrowserRouter>
      <Sidebar>
        <AppRouter />
      </Sidebar>
    </BrowserRouter>
  );
});

export default App;
