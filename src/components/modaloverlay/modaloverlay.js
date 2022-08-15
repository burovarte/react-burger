import style from "./modaloverlay.module.css";
import PropTypes from "prop-types";

function ModalOverlay ({ onCLose }){
    return (
        <div className={style.main} onClick={onCLose}></div>
    )
};

ModalOverlay.propTypes = {
    onClose: PropTypes.func
}

export default ModalOverlay;
