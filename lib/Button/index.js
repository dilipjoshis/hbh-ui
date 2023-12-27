import { __assign } from "tslib";
import React from 'react';
import './styles.scss';
var Button = function (props) {
    var getButtonStyleForGivenButtonType = function (category) {
        switch (category) {
            case 'PRIMARY':
                return 'button-primary';
            case 'PRIMARY_LARGE':
                return 'button-large button-primary';
            case 'SECONDARY':
                return 'button-secondary';
            case 'SECONDARY_LARGE':
                return 'button-large button-secondary';
            case 'TERTIARY':
                return 'button-tertiary';
            case 'TERTIARY_ALPHA':
                return 'button-tertiary-alpha';
            case 'ALERT':
                return 'button-alert';
            case 'DEFAULT':
                return 'btn-default';
            default:
                return null;
        }
    };
    return (React.createElement("button", { disabled: props.disabled, onClick: props.onClick, value: props.value, style: __assign({}, props.style), type: props.type === 'submit' ? 'submit' : 'button', form: props.form, className: "button ".concat(getButtonStyleForGivenButtonType(props.category), " ").concat(props.className) }, props.children));
};
export default Button;
//# sourceMappingURL=index.js.map