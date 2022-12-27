import * as yup from 'yup';

const trainingFormSchema = yup.object().shape({
  book: yup.object().required('Оберіть книгу'),
});

export default trainingFormSchema;
