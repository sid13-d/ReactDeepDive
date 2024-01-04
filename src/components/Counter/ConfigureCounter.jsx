import { useState } from "react";
import { log } from "../../log.js";

const ConfigureCounter = function ConfigureCounter({handleSetClick}) {
    log('<ConfigureCounter /> rendered', 1);
    const [enteredNumber, setEnteredNumber] = useState(0);

    function handleChange(event) {
        setEnteredNumber(+event.target.value);
      }

    function handleClick() {
        setEnteredNumber(0);
        handleSetClick(enteredNumber);
    }

    return (
        <section id="configure-counter">
          <h2>Set Counter</h2>
          <input type="number" onChange={handleChange} value={enteredNumber} />
          <button onClick={handleClick}>Set</button>
        </section>
    );
} 

export default ConfigureCounter;