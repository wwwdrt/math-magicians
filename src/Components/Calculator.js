const Calculator = () => (
  <div id="calculator">
    <div id="keypad">
      <div id="display">0</div>
      <div className="row">
        <button type="button" className="key">AC</button>
        <button type="button" className="key">+/-</button>
        <button type="button" className="key">%</button>
        <button type="button" className="key orange">÷</button>
      </div>
      <div className="row">
        <button type="button" className="key">7</button>
        <button type="button" className="key">8</button>
        <button type="button" className="key">9</button>
        <button type="button" className="key orange">X</button>
      </div>
      <div className="row">
        <button type="button" className="key">4</button>
        <button type="button" className="key">5</button>
        <button type="button" className="key">6</button>
        <button type="button" className="key orange">-</button>
      </div>
      <div className="row">
        <button type="button" className="key">1</button>
        <button type="button" className="key">2</button>
        <button type="button" className="key">3</button>
        <button type="button" className="key orange">+</button>
      </div>
      <div className="row">
        <button type="button" className="key">0</button>
        <button type="button" className="key">.</button>
        <button type="button" className="key orange">=</button>
      </div>
    </div>
  </div>
);

export default Calculator;
