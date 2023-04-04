import { useRoutes } from "react-router-dom";
import routes from "./routes/routes";

function Router() {
  return useRoutes(routes);
}

export default Router;
