import { BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import AppRouter from "./routes/AppRoutes";
import "./index.css";

const App: React.FC = (): JSX.Element => (
  <BrowserRouter>
    <Sidebar>
      <AppRouter />
    </Sidebar>
  </BrowserRouter>
);

export default App;
