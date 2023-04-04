import { useSiteContext } from "../contexts/SiteContext";

function SwitchTheme() {
  
  const { theme, dispatch } = useSiteContext();

  const switchTheme = () => {
    dispatch({
      type: "TOGGLE_THEME",
    });
  };

  return (
    <div>
      <p>Mevcut Tema = {theme}</p>
      <button onClick={switchTheme}>Temayı Değiştir</button>
    </div>
  );
}

export default SwitchTheme;
