import { languages } from '../../utils/constant';
import { Menu } from 'antd';
import i18next from 'i18next';
export const CreateMenuItems = () => {

  return (<Menu>
    {
      languages.map(e => {
        return (
          <Menu.Item key={e.code}>
            <a href="/" onClick={() => {
              i18next.changeLanguage(e.code)
            }}>{e.name}</a>
          </Menu.Item>)
      })
    }

  </Menu>)
}