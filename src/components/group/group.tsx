import React, {FC, LegacyRef} from "react";
import Item from '../item/item';
import style from './group.module.css';
import {Ingredient} from "../../utils/types";

type GroupProps = {
    title: string;
    type: Ingredient[];
    id: string;
    butref: LegacyRef<HTMLDivElement>;
    openModal: (modalInfo: { typeOfModal: string; Id: string }) => void
}

const Group: FC<GroupProps> = ({title, type, butref, openModal}) => {
    return (
        <div ref={butref}>
            <div className="mt-10 mb-6">
                <h1 className="text text_type_main-medium">
                    {title}
                </h1>
            </div>
            <div className={style.main}>
                {type?.map((ingredient: Ingredient) => (
                    <Item
                        key={ingredient._id}
                        id={ingredient._id}
                        ingredient={ingredient}
                        openModal={openModal}
                    />
                ))}
            </div>
        </div>)
}

export default Group;