/** \n * @component
 * @author Dilip Joshi
 * This component is a reusable button that can be customized
 * based on the provided properties.
 *
 * @param {string} category - The type of button, determines styling (optional).
 * @param {string} className - Additional class name to be added (optional).
 * @param {boolean} disabled - Whether or not the button is disabled (optional).
 * @param {string} form - Specifies one or more forms the button belongs to (optional).
 * @param {function} onClick - Function that will be called on click (optional).
 * @param {string} type - The type of button (submit or button) (optional).
 * @param {string} value - Specifies the value of the button (optional).
 * @param {object} style - Additional styles to be added (optional).
 * @param {*} children - Child elements to be rendered within the button (optional).
 *
 * @returns {element} - Rendered button element.
 *
 * @example
 *
 * import React from 'react';
 * import Button from './Button';
 *
 * const MyComponent = () => {
 *   return (
 *     <Button category="PRIMARY" onClick={() => console.log('Button clicked!')}>
 *       Click me!
 *     </Button>
 *   );
 * };
 *
 * export default MyComponent;
 *
 */

import React from 'react';
import { ButtonProps } from './types';

const Button = (props: ButtonProps) => {
  const getButtonStyleForGivenButtonType = (category: string | undefined): string | null => {
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
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      value={props.value}
      style={{ ...props.style }}
      type={props.type === 'submit' ? 'submit' : 'button'}
      form={props.form}
      className={`button ${getButtonStyleForGivenButtonType(props.category)} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Button;
