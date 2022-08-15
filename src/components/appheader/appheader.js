import React from 'react';
import style from './appheader.module.css';
import {BurgerIcon, ListIcon, Logo, ProfileIcon,} from "@ya.praktikum/react-developer-burger-ui-components";

function AppHeader() {
    return (
        <header className={style.header}>
            <div className={style.box}>
                <nav className={style.left}>
                    <a className={`${style.buttons} pt-4 pb-4 pl-5 pr-5`}>
                        <BurgerIcon type="primary" />
                        <p className="text text_type_main-default pl-2">Конструктор</p>
                    </a>
                    <a className={`${style.buttons} pt-4 pb-4 pl-5 pr-5`}>
                        <ListIcon type="secondary" />
                        <p className="text text_type_main-default text_color_inactive pl-2">
                            Лента заказов
                        </p>
                    </a>
                </nav>
                <a className={style.logoBurger}>
                    <Logo />
                </a>
                <nav className={style.right}>
                    <a className={`${style.buttons} pt-4 pb-4 pl-5 pr-5`}>
                        <ProfileIcon type="secondary" />
                        <p className="text text_type_main-default text_color_inactive pl-2">
                            Личный кабинет
                        </p>
                    </a>
                </nav>
            </div>
        </header>
    );
}

export default AppHeader;
