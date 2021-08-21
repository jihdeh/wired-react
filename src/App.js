import React, { useState } from "react";
import {
  SettingRow,
  SettingRowActions,
  SettingRowContent,
  SettingRowTitle
} from "./settingRow";
import { Switch } from "./switch";

function Toggler({ Component }) {
  const [checked, setChecked] = useState(true);
  const onClick = () => setChecked(!checked);

  return <Component onClick={onClick} checked={checked} />;
}

function TogglerOn({ children, checked }) {
  return checked && children;
}

function TogglerOff({ children, checked }) {
  return checked && children;
}

function TogglerButton({onClick, checked}) {
  const toDoSwitchProps = { on: checked, onClick };
  return <Switch {...toDoSwitchProps} />;
}

function Content({onClick, checked}) {
  return (
    <>
      <SettingRowContent>
        <SettingRowTitle>Some setting</SettingRowTitle>
        <TogglerOn checked={checked}>Is enabled</TogglerOn>
        <TogglerOff checked={!checked}>Is disabled</TogglerOff>
      </SettingRowContent>
      <SettingRowActions>
        <TogglerButton onClick={onClick} checked={checked} />
      </SettingRowActions>
    </>
  );
}

function App() {
  return (
    <SettingRow>
      <Toggler Component={Content} />
    </SettingRow>
  );
}

export default App;
