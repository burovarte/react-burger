import React, {useState, useEffect} from 'react';
import style from './app-header.module.css';
import {BurgerIcon, ListIcon, Logo, ProfileIcon,} from "@ya.praktikum/react-developer-burger-ui-components";
import {Link, useLocation} from 'react-router-dom';


function AppHeader() {
    const [active, setActive] = useState<string>('constructor');
    const {pathname} = useLocation();

    useEffect(() => {
        switch (pathname) {
            case '/ordering':
                setActive('ordering');
                break;
            case '/profile':
                setActive('profile');
                break;
            case '/':
                setActive('constructor');
                break;
            default:
                setActive('constructor');
        }
    }, [pathname]);

    return (
        <header className={style.header}>
            <div className={style.box}>
                <nav className={style.left}>
                    <Link to="/"
                          className={
                              active === 'constructor'
                                  ? `${style.active} text text_type_main-default pt-4 pb-4 pl-5 pr-5  mr-2`
                                  : `${style.buttons} text text_type_main-default text_color_inactive pt-4 pb-4 pl-5 pr-5  mr-2`}>
                        <BurgerIcon type="primary"/>
                        <p className="text text_type_main-default pl-2">Конструктор</p>
                    </Link>
                    <Link to="/feed"
                          className={
                              active === 'order'
                                  ? `${style.active} text text_type_main-default pt-4 pb-4 pl-5 pr-5  mr-2`
                                  : `${style.buttons} text text_type_main-default text_color_inactive pt-4 pb-4 pl-5 pr-5  mr-2`}>
                        <ListIcon type="secondary"/>
                        <p className="text text_type_main-default text_color_inactive pl-2">
                            Лента заказов
                        </p>
                    </Link>
                </nav>
                <Link to="/" className={style.logoBurger}>
                    <Logo/>
                </Link>
                <nav className={style.right}>
                    <Link to="/profile"
                          className={
                              active === 'constructor'
                                  ? `${style.active} text text_type_main-default pt-4 pb-4 pl-5 pr-5  mr-2`
                                  : `${style.buttons} text text_type_main-default text_color_inactive pt-4 pb-4 pl-5 pr-5  mr-2`}>
                        <ProfileIcon type="secondary"/>
                        <p className="text text_type_main-default text_color_inactive pl-2">
                            Личный кабинет
                        </p>
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default AppHeader;
