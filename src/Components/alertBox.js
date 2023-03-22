import style from "./style.module.css";
import css from "classnames";
import React from "react";

export default function Alert({ children, type, message, close }) {

const renderElAlert = function () {
    return React.cloneElement(children);
};

return (
    <div className={css(style.alert, style[type])}>
    <span className={style.closebtn} onClick={close}>
        &times;
    </span>
    {children ? renderElAlert() : message}
    </div>
);
}