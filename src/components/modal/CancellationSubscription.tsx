import {PropsWithChildren} from "react";
import ReactDOM from "react-dom";
import MainButton from "../Buttons/MainButton.tsx";
import "../../styles/modal.css"


interface ICancellationSubscription {
    active: boolean;
    title: string;
    onSubmit: () => void;
    onClose: () => void;
}

const Modal = ({
    active,
    title,
    onSubmit,
    onClose,
    children
}: PropsWithChildren<ICancellationSubscription>) => {
    if(!active) {
        return null
    }
    const portalElement = document.getElementById("root");
    if (portalElement){
    return ReactDOM.createPortal(
        <div className="modal" onClick={onClose}>
            <div className="modal__content" onClick={(event) => event.stopPropagation()}>
                <div className="modal__header">
                    <div className="modal__title">{title}</div>
                </div>
                <div className="modal__body">{children}</div>
                <div className="modal__footer">
                    <MainButton
                        title={"Confirm"}
                        handleClick={onSubmit}
                        value={""}
                        additionalStyles={
                            "bg-white-700  text-black-500 m-3 hover:bg-white-400 transition-all duration-300 max-w-[500px]"
                        }
                    />
                    <MainButton
                        title={"Cancel"}
                        handleClick={onClose}
                        value={""}
                        additionalStyles={
                            "bg-white-700  text-black-500 m-3 hover:bg-white-400 transition-all duration-300 max-w-[500px]"
                        }
                    />
                </div>
            </div>
        </div>,
        portalElement
        )
    }
};

export default Modal;