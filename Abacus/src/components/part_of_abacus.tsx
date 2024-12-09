import { useEffect, useState } from "react";
interface PartOfAbacusProps {
    initialItemsCount: number; // Пропс для задания начального количества элементов в первом стеке
    part: string; // Пропс для задания части абакуса (верх или низ)
    beadSkin: string; // Пропс для задания скина косточки
}
const Part_of_abacus: React.FC<PartOfAbacusProps> = ({initialItemsCount, part, beadSkin}: PartOfAbacusProps) => {
  const [stack1, setStack1] = useState<string[]>([]); // Элементы первого стека
  const [stack2, setStack2] = useState<string[]>([]); // Элементы второго стека

  // Функция для перемещения верхнего элемента из одного стека в другой
  useEffect(() => {
    if (part == "up") {
      const newStack1 = Array.from({ length: initialItemsCount }, (_) => ``);
      setStack1(newStack1); // Заполняем stack1 значениями
      setStack2([]); // Заполняем stack1 значениями
    }else if (part == "down") {
      const newStack2 = Array.from({ length: initialItemsCount }, (_) => ``);
      setStack1([]); // Заполняем stack1 значениями
      setStack2(newStack2); // Заполняем stack1 значениями
    }
  }, [initialItemsCount]);
  
  const moveTopElement = (
    fromStack: string[], 
    setFromStack: React.Dispatch<React.SetStateAction<string[]>>, 
    toStack: string[], 
    setToStack: React.Dispatch<React.SetStateAction<string[]>>,
    index: number,
  ): void => {
    if (fromStack.length === 0) return; // Если стек пуст, ничего не делать
    console.log(index)
    let amount_of_elements_after_element = fromStack.length - index - 1;
    let FromStackLoc = fromStack;
    let ToStackLoc = toStack;
    for (let i = 0; i <= amount_of_elements_after_element; i++) {
        const topElement = FromStackLoc[FromStackLoc.length - 1]; // Берем верхний элемент
        FromStackLoc = FromStackLoc.slice(0, -1); // Убираем верхний элемент из исходного стека
        ToStackLoc = [...ToStackLoc, topElement]; // Добавляем его в целевой стек
        
        setFromStack(FromStackLoc)
        setToStack(ToStackLoc); // Добавляем его в целевой стек
    }
  };

  return (
    <div style={{ display: "flex", gap: "50px", alignItems: "center", flexDirection: "column"}}>
      {/* Первый стек */}
      <div style={{ display: "flex", flexDirection: "column-reverse" }}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "5px", alignItems: "center" }}>
          {stack1.map((_, index) =>
              <li 
                key={index} 
                className={String(index)}
                style={{
                    textAlign: "center",
                    margin: "0px",
                    border: "0px solid black",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontWeight: 300,
                    width: "50px",
                    height: "20px",
                    backgroundImage: `url(${beadSkin})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
                onClick={() =>
                    moveTopElement(stack1, setStack1, stack2, setStack2, index)
                }>
              </li>
          )}
        </ul>
      </div>

      {/* Второй стек */}
      <div style={{ display: "flex", alignItems: "center", flexDirection: "column", margin: 'auto'}}>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column-reverse", gap: "5px", alignItems: "center" }}>
          {stack2.map((_, index) =>
              <li
                key={index}
                style={{ 
                    textAlign: "center",
                    margin: "0px",
                    border: "0px solid black",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontWeight: 300,
                    width: "50px",
                    height: "20px",
                    backgroundImage: `url(${beadSkin})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
                onClick={() =>
                    moveTopElement(stack2, setStack2, stack1, setStack1, index)
                }
              >
              </li>
            )}
        </ul>
      </div>
    </div>
  );
};

export default Part_of_abacus;