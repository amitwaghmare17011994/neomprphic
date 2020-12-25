import "./App.css";
import Button from "./components/Button/Button";
import CircularLogo from "./components/CircularLogo/CircularLogo";
import Input from "./components/Input/Input";
import logo from "./logo.png";
function App() {
  return (
    <div className="App">
      <div className="login-div">
        <CircularLogo src={logo} />
        <div className="fields">
          <Input type="text" placeholder="Enter Username" />

          <Input type="password" placeholder="Enter Password" />

          <Button text="Login" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
}

export default App;
