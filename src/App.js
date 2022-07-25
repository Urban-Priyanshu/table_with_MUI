import "./App.css";
import { MuiCard } from "./components/MuiCard";
import { MuiFooter } from "./components/MuiFooter";
// import SpacingGrid from "./components/MuiGrid";
import MuiTbl from "./components/MuiTbl";
import MuiTxt from "./components/MuiTxt";

function App() {
  return (
    <div>
      <MuiTbl />
      <MuiTxt />
      <MuiCard />
      <MuiFooter />
    </div>
  );
}

export default App;
