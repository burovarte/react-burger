import React, {useState, useRef, useContext, useEffect, FunctionComponent, ReactNode, FC, ComponentProps} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './burger-ingredients.module.css';
import Group from '../group/group';
import PropTypes from "prop-types";
import {useSelector} from "react-redux";


type BurgerIngredientsProps = {
    openModal: (modalInfo: { typeOfModal: string; Id: string }) => void
}


const BurgerIngredients: FC<BurgerIngredientsProps> = ({openModal}) => {
    const dataBurgers: any = useSelector<any>((store) => store.mainReducer.ingredients)

    const [selected, setSelected] = useState("bun")
    const bun = dataBurgers?.filter((i: { type: string; }) => i.type === "bun")
    const main = dataBurgers?.filter((i: { type: string; }) => i.type === 'main')
    const sauce = dataBurgers?.filter((i: { type: string; }) => i.type === 'sauce')

    const sauceRef = useRef<HTMLInputElement>(null);
    const mainRef = useRef<HTMLInputElement>(null);
    const bunRef = useRef<HTMLInputElement>(null);

    const twoFunction = (e: React.SetStateAction<string>, ref: React.RefObject<HTMLInputElement>) => {
        setSelected(e);
        // @ts-ignore
        ref.current.scrollIntoView({behavior: "smooth"})
    }

    function scroll(ingredient: { target: { scrollTop: number; }; }) {
        console.log(ingredient.target)
        if (ingredient.target.scrollTop > 0 && ingredient.target.scrollTop < 300) {
            setSelected('bun');
        } else if (ingredient.target.scrollTop > 300 && ingredient.target.scrollTop < 900) {
            setSelected('sauce');
        } else if (ingredient.target.scrollTop > 900) {
            setSelected('main');
        }
    }


    // @ts-ignore
    return (
        <div className={`${style.ingredients} pt-10`}>
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <div className={`${style.menu} mt-5 mb-10`}>
                {/* @ts-ignore */}
                <Tab
                    value="bun"
                    active={selected === "bun"}
                    onClick={(e) => twoFunction(e, bunRef)}
                >
                    Булки
                </Tab>
                {/* @ts-ignore */}
                <Tab
                    value="sauce"
                    active={selected === "sauce"}
                    onClick={(e) => twoFunction(e, sauceRef)}
                >
                    Соусы
                </Tab>
                {/* @ts-ignore */}
                <Tab
                    value="main"
                    active={selected === "main"}
                    onClick={(e) => twoFunction(e, mainRef)}
                >
                    Начинки
                </Tab>
            </div>
            {/* @ts-ignore */}
            <ul className={`${style.list} pt-25`} id="ingredients" onScroll={scroll}>
                <li>

                    <Group
                        /* @ts-ignore */
                        id='bun'
                        title={"Булки"}
                        type={bun}
                        butref={bunRef}
                        openModal={openModal}
                    />
                </li>
                <li>
                    <Group
                        /* @ts-ignore */
                        id='sauce'
                        title={"Соусы"}
                        type={sauce}
                        butref={sauceRef}
                        openModal={openModal}
                    />
                </li>
                <li>
                    <Group
                        /* @ts-ignore */
                        id='main'
                        title={"Начинки"}
                        type={main}
                        butref={mainRef}
                        openModal={openModal}
                    />
                </li>
            </ul>

        </div>
    )
}


export default BurgerIngredients;