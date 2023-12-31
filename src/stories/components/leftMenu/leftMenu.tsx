import { IconType } from '../icon/icon'
import { Menu } from '../menu/Menu'
import { Text } from '../text/Text'
import './leftMenu.scss'
export interface LeftMenuProps {
  topMenuItems: {
    icon?: IconType
    label?: string
    activedIcon?: IconType
    onClick?: () => void
    actived?: boolean
  }[]
  bottomMenuItems: {
    label?: string
  }[]
}

export const LeftMenu = (props: LeftMenuProps) => {
  const { topMenuItems, bottomMenuItems } = props

  return (
    <div className="left-menu">
      <div className="col-top">
        {topMenuItems.map((item, index) => (
          <Menu
            key={index}
            icon={item.icon}
            activedIcon={item.activedIcon}
            onMenuClick={item.onClick}
            actived={item.actived}
          >
            <div className="label-container">{item.label}</div>
          </Menu>
        ))}
      </div>
      <div className="col-bottom">
        {bottomMenuItems.map((item, index) => (
          <Text textSize="xs" key={index}>
            {item.label}
          </Text>
        ))}
      </div>
    </div>
  )
}
