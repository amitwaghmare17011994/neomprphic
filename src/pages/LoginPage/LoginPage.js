import React from "react";
import CircularLogo from "../../components/CircularLogo/CircularLogo";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import logo from "../../logo.png";

import "./login.css";
import Card from "../../components/Card/Card";

export default function LoginPage() {
  return (
    <Card style={{ width: 500 }}>
      <div style={{ padding: 30 }}>
        <CircularLogo src={logo} />
        <div className="fields">
          <Input type="text" placeholder="Enter Username" />

          <Input type="password" placeholder="Enter Password" />

          <Button text="Login" onClick={() => {}} />
        </div>
      </div>
    </Card>
  );
}
