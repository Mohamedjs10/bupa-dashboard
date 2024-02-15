import * as yup from 'yup';

const floatingNumber = /^[-+]?(\d*\.\d+|\d+\.?\d*)([eE][-+]?\d+)?$/;
// floating number
const integerNumber = /^-?\d+$/;
// integerNumber

export const schema = yup.object().shape({
  nameEn: yup.string().min(3, 'At least 3 characters long').required('Required')
});
export const initialValues = {
  nameEn: ''
};
