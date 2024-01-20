import { useState } from "react";

export default function MultiForm() {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      label: "input",
    },
  ]);

  const [position, setPosition] = useState({ x: 10, y: 10 });

  const handleAddInp = () => {
    const nextId = inputs[inputs.length - 1].id + 1;
    setInputs([
      ...inputs,
      {
        id: nextId,
        label: "input",
      },
    ]);
  };

  return (
    <div>
      <p>X: {position.x}</p>
      <p>Y: {position.y}</p>
      <button
        // onClick={() => setPosition((prev) => ({ ...prev, y: prev.y + 5 }))}
        onClick={() => setPosition({ ...position, y: position.y + 5 })}
      >
        plus 5
      </button>
      {inputs?.map((inp) => (
        <div key={inp.id} style={{ marginBottom: "20px" }}>
          <input type="text" label={inp.label} />
        </div>
      ))}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleAddInp}>Add Input</button>
      </div>
    </div>
  );
}
