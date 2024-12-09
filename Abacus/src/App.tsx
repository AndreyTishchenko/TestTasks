import { useState } from "react";
import Abacus from "./components/abacus";
import SettingsPanel from "./components/settings_panel";
import Skin1 from "./assets/Vector 5.png"

const App: React.FC = () => {
  const [beadsPerRodDown, setBeadsPerRodDown] = useState<number>(4);
  const [beadsPerRodUp, setBeadsPerRodUp] = useState<number>(4);
  const [numberOfRods, setNumberOfRods] = useState<number>(6);
  const [frameSkin, setFrameSkin] = useState<string>("#8b5e4e");
  const [beadSkin, setBeadSkin] = useState<string>(Skin1);
  return (<>
      <SettingsPanel setBeadsPerRodUp={setBeadsPerRodUp} setBeadsPerRodDown={setBeadsPerRodDown} setNumberOfRods={setNumberOfRods} setFrameSkin={setFrameSkin} setBeadSkin={setBeadSkin}/>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      {Array.from({ length: numberOfRods }).map((_, index) => (
        <Abacus key={index} beadsPerRodUp={beadsPerRodUp} beadsPerRodDown={beadsPerRodDown} FrameSkin={frameSkin} beadSkin={beadSkin} />
      ))}
    </div>
  </>

  );
};

export default App;