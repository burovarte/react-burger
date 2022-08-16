import React from "react";
import Item from '../item/item';
import style from'./group.module.css';
import PropTypes from "prop-types";

function Group({title,type,butref,openModal}) {
    return(
    <div ref={butref}>
        <div  className="mt-10 mb-6">
            <h1 className="text text_type_main-medium">
                {title}
            </h1>
        </div>
        <div className={style.main}>
            {type.map((ingredient) => (
                <Item
                key={ingredient._id}
                id={ingredient._id}
                image={ingredient.image}
                name={ingredient.name}
                price={ingredient.price}
                openModal={openModal}
                />
                ))}
        </div>
    </div>)
}

Group.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.array.isRequired,
    butref: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired
};

export default Group;