import Part_of_abacus from "./part_of_abacus";

interface AbacusProps {
    beadsPerRodUp: number;
    beadsPerRodDown: number;
    FrameSkin: string;
    beadSkin: string;
}

const Abacus: React.FC<AbacusProps> = ({beadsPerRodUp, beadsPerRodDown, FrameSkin, beadSkin}: AbacusProps) => {
  return (
    <div className="abacus"
        style={{
            "--color": FrameSkin,
        } as React.CSSProperties}
    >
      <Part_of_abacus initialItemsCount={beadsPerRodUp} part="up" beadSkin={beadSkin}/>
      <div style={{
        width: "100%",
        height: "5px",
        backgroundColor: `${FrameSkin}`,
        margin: "10px 0px"
        }}></div>
      <Part_of_abacus initialItemsCount={beadsPerRodDown} part="down" beadSkin={beadSkin}/>
    </div>
  );
};

export default Abacus;
