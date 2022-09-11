import React, {useRef} from "react";
import {useDispatch} from "react-redux";
import {useDrag, useDrop} from "react-dnd";
import style from "../burger-constructor/burger-constructor.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {DELETE_INGREDIENT} from "../../services/action";
import PropTypes from "prop-types";

function ConstructorItem({item, index, dragItem}) {
    const dispatch = useDispatch();
    const ref = useRef(null);

    const [, dragRef] = useDrag({
        type: 'constructorItem',
        item: () => {
            return {item, index}
        }
    })

    const [, dropRef] = useDrop({
        accept: 'constructorItem',
        hover: (item, monitor) => {
            if (item.index === index)
                return;

            let hoverMiddleY = (ref.current.getBoundingClientRect().bottom - ref.current.getBoundingClientRect().top) / 2;
            let hoverClientY = monitor.getClientOffset().y - ref.current.getBoundingClientRect().top;

            if (item.index < index && hoverClientY < hoverMiddleY)
                return;
            if (item.index > index && hoverClientY > hoverMiddleY)
                return;
            dragItem(item.index, index);
            item.index = index;
        },
    })

    dragRef(dropRef(ref));

    function deleteIngredient(item) {
        dispatch({
            type: DELETE_INGREDIENT,
            item: item,
            qnt: 1,
        });
    }

    return (
        <div ref={ref} className={style.item_mainAndSauce} key={item.uniqueId}>
            <div className="mr-1">
                <DragIcon type="primary"/>
            </div>
            <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
                handleClose={() => deleteIngredient(item)}
            />
        </div>
    )
}

ConstructorItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    dragItem: PropTypes.func.isRequired
}

export default ConstructorItem;