import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "../routes";

const AppRouter: React.FC = () => (
  <Routes>
    {publicRoutes.map(({ path, Component }) => (
      <Route key={path} path={path} element={<Component />} />
    ))}
  </Routes>
);

export default AppRouter;
