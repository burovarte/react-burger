import React, {useEffect} from "react";
import ReactDom, { createPortal } from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modaloverlay/modaloverlay";
import style from "./modal.module.css";
import PropTypes from "prop-types";

function Modal  ({onClose, title,children}) {
    useEffect(() => {
        const closeModal = (e) => {if (e.key === "Escape") onClose()};
        document.addEventListener("keydown", closeModal);
        return () => {document.removeEventListener("keydown", closeModal);}}, [onClose]);

    return createPortal(
            <>
            <div className={`${style.main}`}>
                <div className={`${style.content} mt-10 mr-10 ml-10`}>
                    <p className="text text_type_main-large">
                        {title}
                    </p>
                    <div className={style.close}>
                        <CloseIcon onClick={onClose} type="primary"  />
                    </div>
                </div>
                {children}
            </div>
        <ModalOverlay onCLose={onClose}/>
            </>,
        document.getElementById("react-modals")
    )};

Modal.propTypes={
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.node
}

export default Modal;