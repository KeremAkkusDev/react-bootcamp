import { useSiteContext } from "../contexts/SiteContext";

function SwitchLanguage() {
  
  const { language, dispatch } = useSiteContext();

  const switchLanguage = () => {
    dispatch({
      type: "TOGGLE_LANGUAGE",
    });
  };

  return (
    <div>
      <p>Mevcut Dil = {language}</p>
      <button onClick={switchLanguage}>Dili Değiştir</button>
    </div>
  );
}

export default SwitchLanguage;
