import Button from "./components/Button";
import Input from "./components/Input";
import Select from "./components/Select";
import Option from "./components/Option";

import Logo from "./assets/Logo.png";

import "./style.css";

function App() {
  return (
    <div className="container">
      <header>
        <img className="logo" src={Logo} alt="Convert" />
      </header>
      <div className="form">
        <div className="fields">
          <Input />
          <Select>
            <Option>Dólar americano</Option>
            <Option>Euro</Option>
            <Option>Iene japonês</Option>
            <Option>Peso argentino</Option>
            <Option>Yuan chinês</Option>
          </Select>
        </div>
        <Button>Converter em Reais</Button>
      </div>
    </div>
  );
}

export default App;
