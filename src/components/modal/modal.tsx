import React, {FC, ReactNode, useContext, useEffect} from "react";
import {createPortal} from "react-dom";
import {CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import ModalOverlay from "../modal-overlay/modal-overlay";
import style from "./modal.module.css";
import PropTypes from "prop-types";

type ModalProps = {
    title?: string;
    children: ReactNode | '';
    onClose: () => void;

}


const Modal: FC<ModalProps> = ({onClose, title, children}) => {

    useEffect(() => {
        const closeModal = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        };
        document.addEventListener("keydown", closeModal);
        return () => {
            document.removeEventListener("keydown", closeModal)
        }
    }, [onClose]);

    const reactModals = document.getElementById("react-modals")

    if (!reactModals) {
        return null
    }


    return createPortal(
        <>
            <div className={`${style.mom}`}>
                <div className={`${style.content} mt-10 mr-10 ml-10`}>
                    <p className="text text_type_main-large">
                        {title}
                    </p>
                    <div className={style.close}>
                        <CloseIcon onClick={onClose} type="primary"/>
                    </div>
                </div>
                {children}
            </div>
            <ModalOverlay onCLose={onClose}/>
        </>,
        reactModals
    )
};

export default Modal;