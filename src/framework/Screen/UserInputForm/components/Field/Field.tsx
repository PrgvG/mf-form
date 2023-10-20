import React, { FC, HTMLInputTypeAttribute } from 'react';
import { EField } from '../../../../../domain/user';
import styles from './Field.module.css';

type Props = {
    name: EField;
    type: HTMLInputTypeAttribute;
    label: string;
};

export const Field: FC<Props> = ({ name, type, label }) => {
    return (
        <label className={styles.field}>
            {label}
            <input className={styles.input} type={type} name={name} />
        </label>
    );
};
