export enum EField {
    NAME = 'name',
    EMAIL = 'email',
    AGE = 'age',
    GENDER = 'gender',
}

export type User = {
    [EField.NAME]: string;
    [EField.EMAIL]: string;
    [EField.AGE]: number;
    [EField.GENDER]: 'male' | 'female';
};
