import { MouseEventHandler } from 'react';

export interface ButtonProps {
  category?:
    | 'PRIMARY'
    | 'PRIMARY_LARGE'
    | 'SECONDARY'
    | 'SECONDARY_LARGE'
    | 'TERTIARY'
    | 'TERTIARY_ALPHA'
    | 'ALERT'
    | 'DEFAULT';
  type?: 'submit' | 'button';
  form?: 'string';
  value?: string;
  className?: string;
  style?: { [key: string]: string };
  children?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
