import Home from "./components/Home";
import { SiteProvider } from "./contexts/SiteContext";
import { AuthProvider } from "./contexts/AuthContext";

function Context() {
  return (
    <>
      <SiteProvider>
        <AuthProvider>
          <Home />
        </AuthProvider>
      </SiteProvider>
    </>
  );
}

export default Context;
