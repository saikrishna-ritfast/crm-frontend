import './App.css';
import { text, box } from './Themes/index';

function App() {
  return (
    <>
      <div className={`${box.boxOne}`} >
        <p className={`${text.textOne}`} style={{ fontSize: "var(--fontNine)" }} > RitFast </p>
      </div>
    </>
  );
}

export default App;
