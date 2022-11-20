import style from "./modal-overlay.module.css";
import {FC} from "react";

type ModalOverlayProps = {
    onCLose: () => void
}

const ModalOverlay: FC<ModalOverlayProps> = ({onCLose}) => {
    return (
        <div className={style.main} onClick={onCLose}></div>
    )
};

export default ModalOverlay;
