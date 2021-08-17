import './settingRow.css'

export function SettingRow({children}) {
  return <div className="setting-row">{children}</div>
}

export function SettingRowContent({children}) {
  return <div className="setting-row-content">{children}</div>
}

export function SettingRowActions({children}) {
  return <div>{children}</div>
}

export function SettingRowTitle({children}) {
  return <div className="setting-row-title"><strong>{children}</strong></div>
}