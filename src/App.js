import * as React from 'react'
import {Switch} from './switch'
import {SettingRow, SettingRowContent, SettingRowActions, SettingRowTitle} from "./settingRow"

function Toggler({children}) {
  // todo, implement this re-usable component.
  return children
}

function TogglerOn({children}) {
  // todo, implement this re-usable component.
  return children
}

function TogglerOff({children}) {
  // todo, implement this re-usable component.
  return children
}

function TogglerButton() {
  // todo, implement this re-usable component.
  const toDoSwitchProps = {on: true, onClick: null}
  return <Switch {...toDoSwitchProps} />
}

function App() {
  return (    
      <SettingRow>
        <Toggler>
          <SettingRowContent>
            <SettingRowTitle>Some setting</SettingRowTitle>
            <TogglerOn>Is enabled</TogglerOn>
            <TogglerOff>Is disabled</TogglerOff>
          </SettingRowContent>
          <SettingRowActions>
            <TogglerButton />
          </SettingRowActions>
        </Toggler>
      </SettingRow>    
  )
}

export default App
