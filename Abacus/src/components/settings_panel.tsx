import Skin1 from "../assets/Vector 5.png"
import Skin2 from "../assets/Vector 6.png"
interface SettingsPanelProps {
//   setBeadSkin: (skin: string) => void;
  setFrameSkin: (skin: string) => void;
  setNumberOfRods: (count: number) => void;
  setBeadsPerRodUp: (count: number) => void;
  setBeadsPerRodDown: (count: number) => void;
  setBeadSkin: (skin: string) => void;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({setBeadsPerRodUp, setBeadsPerRodDown, setNumberOfRods, setFrameSkin, setBeadSkin }) => {
  return (
    <div className="settings-panel">
      <h3>Настройки</h3>
      <div>
        <label>Скин косточки:</label>
        <select onChange={(e) => setBeadSkin(e.target.value)}>
          <option value={Skin1}>Скин 1</option>
          <option value={Skin2}>Скин 2</option>
        </select>
      </div>
      <div>
        <label>Скин рамки:</label>
        <select onChange={(e) => setFrameSkin(e.target.value)}>
          <option value={"#8b5e4e"}>Red</option>
          <option value={"rgb(75 190 201)"}>Blue</option>
        </select>
      </div>
      <div>
        <label>Количество косточек сверху на стержне:</label>
        <input type="number" min="1" onChange={
            (e) => {
                if (Number(e.target.value) < 1 || e.target.value === "") {
                    e.target.value = "1"
                }
                setBeadsPerRodDown(Number(e.target.value))
            }
        }/>
      </div>
      <div>
        <label>Количество косточек снизу на стержне:</label>
        <input type="number" min="1" onChange={
            (e) => {
                if (Number(e.target.value) < 1 || e.target.value === "") {
                    e.target.value = "1"
                }
                setBeadsPerRodUp(Number(e.target.value))
            }
        } />
      </div>
      <div>
        <label>Количество стержней в абакусе:</label>
        <input type="number" min="1" onChange={
            (e) => {
                if (Number(e.target.value) < 1 || e.target.value === "") {
                    e.target.value = "1"
                }
                setNumberOfRods(Number(e.target.value))
            }
        } />
      </div>
    </div>
  );
};

export default SettingsPanel;
export {};