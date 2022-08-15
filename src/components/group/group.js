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
            {type.map((i) => (
                <Item
                key={i._id}
                id={i._id}
                image={i.image}
                name={i.name}
                price={i.price}
                openModal={openModal}
                />
                ))}
        </div>
    </div>)
}

Group.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    butref: PropTypes.object,
    openModal: PropTypes.func
};

export default Group;