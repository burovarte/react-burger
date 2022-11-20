import React, {useState, useRef, useContext, useEffect, FunctionComponent, ReactNode, FC, ComponentProps} from "react";
import style from './burger-ingredients.module.css';
import Group from '../group/group';
import {Tab} from '../../utils/buttons'
import {useSelector} from "../../utils/hooks";

type BurgerIngredientsProps = {
    openModal: (modalInfo: { typeOfModal: string; Id: string }) => void
}

const BurgerIngredients: FC<BurgerIngredientsProps> = ({openModal}) => {
    const dataBurgers = useSelector((store) => store.mainReducer.ingredients)

    const [selected, setSelected] = useState("bun")
    const bun = dataBurgers?.filter((i) => i.type === "bun")
    const main = dataBurgers?.filter((i) => i.type === 'main')
    const sauce = dataBurgers?.filter((i) => i.type === 'sauce')

    const sauceRef = useRef<HTMLInputElement>(null);
    const mainRef = useRef<HTMLInputElement>(null);
    const bunRef = useRef<HTMLInputElement>(null);

    const twoFunction = (e: React.SetStateAction<string>, ref: React.RefObject<HTMLInputElement>) => {
        setSelected(e);
        ref?.current?.scrollIntoView({behavior: "smooth"})
    }

    function scroll(ingredient: { target: { scrollTop: number; } }) {
        if (ingredient.target.scrollTop > 0 && ingredient.target.scrollTop < 300) {
            setSelected('bun');
        } else if (ingredient.target.scrollTop > 300 && ingredient.target.scrollTop < 900) {
            setSelected('sauce');
        } else if (ingredient.target.scrollTop > 900) {
            setSelected('main');
        }
    }

    return (
        <div className={`${style.ingredients} pt-10`}>
            <h1 className="text text_type_main-large">Соберите бургер</h1>
            <div className={`${style.menu} mt-5 mb-10`}>
                <Tab
                    value="bun"
                    active={selected === "bun"}
                    onClick={(e) => twoFunction(e, bunRef)}
                >
                    Булки
                </Tab>
                <Tab
                    value="sauce"
                    active={selected === "sauce"}
                    onClick={(e) => twoFunction(e, sauceRef)}
                >
                    Соусы
                </Tab>
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
                        id='bun'
                        title={"Булки"}
                        type={bun}
                        butref={bunRef}
                        openModal={openModal}
                    />
                </li>
                <li>
                    <Group
                        id='sauce'
                        title={"Соусы"}
                        type={sauce}
                        butref={sauceRef}
                        openModal={openModal}
                    />
                </li>
                <li>
                    <Group
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