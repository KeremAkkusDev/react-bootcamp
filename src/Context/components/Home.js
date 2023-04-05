import Header from "./Header";
import Footer from "./Footer";

import { useAuthContext } from "../contexts/AuthContext";
import { useSiteContext } from "../contexts/SiteContext";

function Home() {
  
  const { user } = useAuthContext();
  const { theme } = useSiteContext();

  return (
    <div className={theme}>
      {user ? (
        <h1>Hoşgeldin {user.name}</h1>
      ) : (
        <h1>Bu alan sadece kullanıcılar içindir.</h1>
      )}
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
