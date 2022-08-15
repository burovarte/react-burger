import React, {useState,useEffect} from "react";
import style from './app.module.css';
import Appheader from "../appheader/appheader";
import BurgerIngredients from '../burgeringredients/burgeringredients';
import BurgerConstructor from '../burgerconstructor/burgerconstructor';
import Modal from '../modal/modal'
import IngredientDetail from '../ingredientdetails/ingrediendetails';
import OrderDetails from "../orderdetails/orderdetails";

function App(){
    const [state,setState] = useState({
        ingredientsForBurger: [],
        isLoading: false,
        hasError: false
    })

    const url = 'https://norma.nomoreparties.space/api/ingredients ';

    useEffect(() => {
        fetch(url)
            .then((res) => {return res.json()} )
            .then((res) => {
                setState((state) => ({
                    ...state,
                    isLoading: true,
                    ingredientsForBurger: res.data,
                }));
            })
            .catch(() => {
                setState((state) => ({
                    ...state,
                    isLoading: false,
                    hasError: true,
                }));
            });
    }, []);

    const [modalIngedients, setModalIngredients] = useState(null);
    const [isOpenModalIngedients, setIsOpenModalIngedients] = useState(false);
    const [isOpenModalOrder,setIsOpenModalOrder] = useState(false)

    function openModal ({typeOfModal,Id}){
        if (typeOfModal === "details"){
            setIsOpenModalIngedients(true);
            setModalIngredients(state.ingredientsForBurger.find((i)=> i._id === Id))
        }
        else {
            setIsOpenModalOrder(true)
        }
    console.log(modalIngedients)
    }

    function closeModal(){
        setIsOpenModalIngedients(false);
        setIsOpenModalOrder(false)
    }

    console.log(state)
    console.log("kuk" + modalIngedients)

    return(
        <div className={style.App} >
            <Appheader />
            <div className={style.items}>
                <BurgerIngredients dataBurgers={state.ingredientsForBurger} openModal={openModal} />
                <BurgerConstructor dataBurgers={state.ingredientsForBurger} openModal={openModal}/>
            </div>
            {isOpenModalIngedients && (
                <Modal onClose={closeModal} title={'Детали ингредиента'}>
                    <IngredientDetail
                        image={modalIngedients.image}
                        name={modalIngedients.name}
                        calories={modalIngedients.calories}
                        fat={modalIngedients.fat}
                        proteins={modalIngedients.proteins}
                        carbohydrates={modalIngedients.carbohydrates}
                    />
                </Modal>
            )}
            {isOpenModalOrder && (<Modal onClose={closeModal} ><OrderDetails /></Modal> )}
        </div>
    )

}

export default App;