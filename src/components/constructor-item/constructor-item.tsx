import React, {FC, RefObject, useRef} from "react";
import {useDispatch} from "../../utils/hooks";
import {useDrag, useDrop} from "react-dnd";
import style from "../burger-constructor/burger-constructor.module.css";
import {ConstructorElement, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import {DELETE_INGREDIENT} from "../../services/action";
import {Ingredient} from "../../utils/types";

type ConstructorItemProps = {
    item: Ingredient;
    index: number;
    dragItem: (dragIndex: number, hoverIndex: number) => void
}

const ConstructorItem: FC<ConstructorItemProps> = ({item, index, dragItem}) => {
    const dispatch = useDispatch();
    const ref = useRef<HTMLInputElement>(null);

    const [, dragRef] = useDrag({
        type: 'constructorItem',
        item: () => {
            return {item, index}
        }
    })

    const [, dropRef] = useDrop({
        accept: 'constructorItem',
        hover: (item: Ingredient, monitor) => {
            if (item.index === index)
                return;
            console.log("ref: ", ref)

            if (!ref.current) return;
            let hoverMiddleY = (ref.current.getBoundingClientRect().bottom - ref.current.getBoundingClientRect().top) / 2;

            const getClientOffset = monitor.getClientOffset();
            if (!getClientOffset) return;

            let hoverClientY = getClientOffset.y - ref.current.getBoundingClientRect().top;


            if (item.index < index && hoverClientY < hoverMiddleY)
                return;

            if (item.index > index && hoverClientY > hoverMiddleY)
                return;
            dragItem(item.index, index);
            item.index = index;
        },
    })

    dragRef(dropRef(ref));

    function deleteIngredient(item: Ingredient) {
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


export default ConstructorItem;