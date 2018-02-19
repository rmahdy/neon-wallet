// @flow
import React from 'react'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

import Logout from './Logout'
import styles from './Sidebar.scss'
import Tooltip from '../../../components/Tooltip'
import HomeIcon from '../../../assets/navigation/home.svg'
import HistoryIcon from '../../../assets/navigation/history.svg'
import SendIcon from '../../../assets/navigation/send.svg'
import ReceiveIcon from '../../../assets/navigation/receive.svg'
import TokenSaleIcon from '../../../assets/navigation/tokens.svg'
import { ROUTES } from '../../../core/constants'

import Logo from '../../../assets/logo.svg'

type Props = {
  className: string,
  neoPrice: number,
  gasPrice: number,
  currencyCode: string,
  showSendModal: Function,
  showReceiveModal: Function,
  showTokenSaleModal: Function
}

const Sidebar = ({
  className,
  neoPrice,
  gasPrice,
  currencyCode,
  showSendModal,
  showReceiveModal,
  showTokenSaleModal
}: Props) => (
  <div className={classNames(styles.container, className)}>
    <div className={styles.group}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <Tooltip title='Dashboard' position='right'>
        <NavLink id='dashboard' exact to={ROUTES.DASHBOARD} className={styles.navItem} activeClassName={styles.active}>
          <HomeIcon />
        </NavLink>
      </Tooltip>

      <Tooltip title='Transaction History' position='right'>
        <NavLink id='history' exact to={ROUTES.TRANSACTION_HISTORY} className={styles.navItem} activeClassName={styles.active}>
          <HistoryIcon />
        </NavLink>
      </Tooltip>

      <Tooltip title='Send' position='right'>
        <a id='send' className={styles.navItem} onClick={showSendModal}>
          <SendIcon />
        </a>
      </Tooltip>

      <Tooltip title='Receive' position='right'>
        <a id='receive' className={styles.navItem} onClick={showReceiveModal}>
          <ReceiveIcon />
        </a>
      </Tooltip>

      <Tooltip title='Token Sale' position='right'>
        <a id='tokenSale' className={styles.navItem} onClick={showTokenSaleModal}>
          <TokenSaleIcon />
        </a>
      </Tooltip>
    </div>

    <div className={styles.group}>
      <Tooltip title='Logout' position='right'>
        <Logout id='logout' className={styles.navItem} />
      </Tooltip>
    </div>
  </div>
)

export default Sidebar