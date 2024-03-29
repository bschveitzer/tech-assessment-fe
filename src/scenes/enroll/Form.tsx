import React from 'react';
import * as GQL from '../../__generated__/graphql';
import { Form, FormikErrors } from 'formik';
import { Input } from '../../components/inputs/Input';

interface FormProps {
  trials?: GQL.Trial[];
  errors?: FormikErrors<GQL.EnrollParticipant>;
}

export const EnrollForm: React.FC<FormProps> = ({ trials, errors }) => {
  console.log(errors);
  return (
    <Form>
      <Input inputProps={{ name: 'name' }} label="Name" />
      <Input inputProps={{ name: 'height' }} label="Height (inches)" />
    </Form>
  );
};
