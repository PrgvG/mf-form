import { EField, User } from '../domain/user';

const mapFormDataToUser = (userFormData: FormData): User | null => {
    const name = userFormData.get(EField.NAME);
    const email = userFormData.get(EField.EMAIL);
    const age = Number(userFormData.get(EField.AGE));
    const gender = userFormData.get(EField.GENDER);
    if (
        name &&
        typeof name === 'string' &&
        email &&
        typeof email === 'string' &&
        age &&
        !Number.isNaN(age) &&
        gender &&
        (gender === 'male' || gender === 'female')
    ) {
        return { name, email, age: age, gender };
    }

    return null;
};

export const userServices = {
    mapFormDataToUser,
};
