import React, { useState } from 'react';
import styles from './UserInputForm.module.css';
import { EField, User } from '../../../domain/user';
import { userUserCases } from '../../../useCase/user';
import { Field } from './components/Field';

export const UserInputForm = () => {
    const [formState, setFormState] = useState<User>();
    return (
        <form
            id="userForm"
            onSubmit={(e) => {
                const user = userUserCases.prepareUser(e);
                user && setFormState(user);
            }}
            className={styles.form}>
            <Field name={EField.NAME} type={'text'} label={'Имя'} />
            <Field name={EField.EMAIL} type={'email'} label={'Почта'} />
            <Field name={EField.AGE} type={'number'} label={'Возраст'} />

            <div className={styles.field}>
                Пол
                <div className={styles.gender}>
                    <label>
                        Муж
                        <input type="radio" name={EField.GENDER} value="male" />
                    </label>
                    <label>
                        Жен
                        <input
                            type="radio"
                            name={EField.GENDER}
                            value="female"
                        />
                    </label>
                </div>
            </div>
            <button className={styles.submit} type="submit">
                Сохранить форму
            </button>
            {formState && (
                <pre className={styles.pre}>
                    {JSON.stringify(formState, null, 4)}
                </pre>
            )}
        </form>
    );
};
