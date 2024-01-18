import MainPage from "./pages/MainPage/MainPage";
import Playbar from "./components/Playbar/Playbar";
import style from "./global.module.scss";

const App = () => {
  return (
    <div className={style.wrapper}>
      <Playbar />
      <MainPage />
    </div>
  );
};

export default App;
