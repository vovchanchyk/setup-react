import  * as React from 'react'
import { MenuItemType } from '../header/Header'
import MenuItem from './row/MenuItem'
import * as styles from './Menu.module.css'


type MenuPropsType ={
    items : MenuItemType[]
}



const Menu:React.FC <MenuPropsType> = (props) => {
    console.log(props)
    return (
        <nav className={styles.default.menu}>
            {props.items.map((item,i)=> <MenuItem item={item} key={i}/> )}
        </nav>
    )
}

export default Menu
