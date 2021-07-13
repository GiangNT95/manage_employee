import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd';
import { menu, languages } from '../../utils/constant';
import '../../assets/styles/parts/Header/styles.scss';
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import globe from '../../assets/images/globe.svg';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { CreateMenuItems } from './createMenuItems';

const Header = () => {
  const { Header } = Layout;
  const [selectedKey, setSelectedKey] = useState('1');
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation();

  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])
  
  useEffect(() => {
    const object = menu.find(e => e.url === window.location.pathname);
    setSelectedKey(object?.id)
  }, [])

  const clickHandler = (e) => {
    window.location.replace(e.url)
  }

  return (
    <Layout className="layout-block">
      <Header>
        <div className="layout-block--logo-page">
          <h2 className='header__title' onClick={()=>{window.location.replace("/")}}>{t('app_title')}</h2>
        </div>
        <Menu className="layout-block--menu" theme="dark" mode="horizontal" defaultSelectedKeys={'1'} selectedKeys={selectedKey?.toString()}>
          {
            menu.map(e => {
              return (
                <Menu.Item key={e.id} onClick={() => { clickHandler(e) }}>{t(e.key)}</Menu.Item>
              )
            })
          }
        </Menu>
        <div className="layout-block--multiple-language">
          <img src={globe} className="layout-block--multiple-language--icon" alt=""/>
          <Dropdown overlay={CreateMenuItems} trigger={['click']}>
            <a href="/" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              {t('language')} <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </Header>
    </Layout>
  )
}
export default Header