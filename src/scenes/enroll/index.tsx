import { useMutation, useQuery } from '@apollo/client';
import React, { useCallback } from 'react';
import { Container } from '../../components/layout/Container';
import { PageHeader } from '../../components/layout/PageHeader';
import * as GQL from '../../__generated__/graphql';
import { GET_TRIALS } from '../trials/graphql/queries';
import { Form, Formik, FormikValues } from 'formik';
import * as Yup from 'yup';
import { Input } from '../../components/inputs/Input';
import { Checkbox } from '../../components/inputs/Checkbox';
import { Select } from '../../components/inputs/Select';
import { Button } from '../../components/buttons/Button';
import { ENROLL_PARTICIPANT } from './graphql/mutation';

const EnrollSchema = Yup.object().shape({
  name: Yup.string().required('This is a required field'),
  height: Yup.number().required('This is a required field'),
  weight: Yup.number().required('This is a required field'),
  hasDiabetes: Yup.boolean().required('This is a required field'),
  hadCovid: Yup.boolean().required('This is a required field'),
  trialId: Yup.string().required('This is a required field'),
});

export const Enroll: React.FC = () => {
  const { data, loading } = useQuery<{ trials: GQL.Trial[] }>(GET_TRIALS);

  const [
    enrollParticipant,
    { data: enrollParticipantData, loading: enrollParticipantLoading, error },
  ] = useMutation(ENROLL_PARTICIPANT);

  const formInitialValues: GQL.EnrollParticipant = {
    name: '',
    height: 0,
    weight: 0,
    hasDiabetes: false,
    hadCovid: false,
    trialId: '',
  };

  const handleSubmit = useCallback(
    (values: FormikValues) => {
      console.log('tei', values);
      enrollParticipant({
        variables: { participant: values },
      });
    },
    [enrollParticipant]
  );

  return (
    <Container>
      <PageHeader title="Enroll a participant" />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Formik
            onSubmit={handleSubmit}
            initialValues={formInitialValues}
            validationSchema={EnrollSchema}
            validateOnBlur={true}
          >
            {({ errors, handleBlur, handleChange, values, setFieldValue }) => {
              const options = data?.trials.map((trial) => ({
                label: trial.name,
                value: trial.id,
              }));

              const handleSelectChange = (value: string) => {
                setFieldValue('trialId', value);
              };

              return (
                <Form>
                  <Input
                    inputProps={{
                      name: 'name',
                      onChange: handleChange,
                      onBlur: handleBlur,
                    }}
                    label="Name"
                    errorMessage={errors.name}
                  />

                  <Input
                    inputProps={{
                      name: 'height',
                      type: 'number',
                      onChange: handleChange,
                      onBlur: handleBlur,
                    }}
                    label="Height (inches)"
                    errorMessage={errors.height}
                  />
                  <Input
                    inputProps={{
                      name: 'weight',
                      type: 'number',
                      onChange: handleChange,
                      onBlur: handleBlur,
                    }}
                    label="Weight (pounds)"
                    errorMessage={errors.weight}
                  />
                  <Checkbox
                    inputProps={{
                      name: 'hasDiabetes',
                      onChange: handleChange,
                      onBlur: handleBlur,
                      type: 'checkbox',
                    }}
                    label="I have diabetes"
                    errorMessage={errors.hasDiabetes}
                  />
                  <Checkbox
                    inputProps={{
                      name: 'hadCovid',
                      onChange: handleChange,
                      onBlur: handleBlur,
                      type: 'checkbox',
                    }}
                    label="I had COVID-19"
                    errorMessage={errors.hadCovid}
                  />

                  <Select
                    inputProps={{
                      name: 'trialId',
                    }}
                    label="Trial"
                    options={options ?? []}
                    onChange={handleSelectChange}
                  />

                  <Button type="submit" $contained>
                    Save
                  </Button>
                </Form>
              );
            }}
          </Formik>
        </div>
      )}
    </Container>
  );
};
