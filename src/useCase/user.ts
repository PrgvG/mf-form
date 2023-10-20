import { User } from '../domain/user';
import { FormEvent } from 'react';
import { userServices } from '../adapter/user';

const prepareUser = (event: FormEvent<HTMLFormElement>): User | null => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    return userServices.mapFormDataToUser(formData);
};

export const userUserCases = {
    prepareUser,
};
