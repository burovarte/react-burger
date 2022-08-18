import React, {useState, useRef} from "react";
import {Tab} from "@ya.praktikum/react-developer-burger-ui-components";
import style from './burger-ingredients.module.css';
import Group from '../group/group';
import PropTypes from "prop-types";

function BurgerIngredients({dataBurgers, openModal}) {
    const [selected, setSelected] = useState("bun")
    const bun = dataBurgers.filter((i) => i.type === "bun")
    const main = dataBurgers.filter((i) => i.type === 'main')
    const sauce = dataBurgers.filter((i) => i.type === 'sauce')

    const sauceRef = useRef(null);
    const mainRef = useRef(null);
    const bunRef = useRef(null);
    const twoFunction = (e, ref) => {
        setSelected(e);
        ref.current.scrollIntoView({behavior: "auto"})
    }

    console.log(dataBurgers)

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
            <ul className={`${style.list} pt-25`}>
                <li>
                    <Group
                        title={"Булки"}
                        type={bun}
                        butref={bunRef}
                        openModal={openModal}
                    />
                </li>
                <li>
                    <Group
                        title={"Соусы"}
                        type={sauce}
                        butref={sauceRef}
                        openModal={openModal}
                    />
                </li>
                <li>
                    <Group
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

BurgerIngredients.propTypes = {
    dataBurgers: PropTypes.array.isRequired,
    openModal: PropTypes.func.isRequired
}

export default BurgerIngredients;