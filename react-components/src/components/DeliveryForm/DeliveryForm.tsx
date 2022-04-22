import React, { useEffect, useState } from 'react';
import styles from './deliveryForm.module.css';
import { IDeliveryCard } from '../../types/interfaces';
import { useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import { DEFAULT_VALUES_DELIVERY_FORM } from '../../constants/constants';

interface IDeliveryFormProps {
  addDeliveryCard: (key: IDeliveryCard) => void;
}

function DeliveryForm(props: IDeliveryFormProps) {
  const [isErrorsHidden, setIsErrorsHidden] = useState<boolean>();
  const {
    register,
    formState: { errors, isValid, isDirty, submitCount, isSubmitSuccessful },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: { ...DEFAULT_VALUES_DELIVERY_FORM },
  });

  useEffect(() => {
    setIsErrorsHidden(false);
  }, [submitCount]);

  useEffect(() => {
    setIsErrorsHidden(isSubmitSuccessful);
  }, [isSubmitSuccessful]);

  useEffect(() => {
    setIsErrorsHidden(true);
  }, []);

  const handleClickSubmitButton = (inputData: FieldValues) => {
    const { name, date, state, photo, shares } = inputData;

    props.addDeliveryCard({
      name,
      date,
      state,
      photo: photo[0],
      shares,
    });
    reset({ ...DEFAULT_VALUES_DELIVERY_FORM }, { keepSubmitCount: true });
    setIsErrorsHidden(true);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleClickSubmitButton)}>
      <h2 className={styles.title}>Delivery data</h2>
      <div className={styles.formGroup}>
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Michael"
          {...register('name', {
            required: 'name must be filled',
            minLength: { value: 2, message: 'name must be greater than 1 letter' },
          })}
          data-testid="nameInput"
        />
        {errors?.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="">Date</label>
        <input
          type="date"
          {...register('date', { required: 'date must be selected' })}
          data-testid="dateInput"
        />
        {errors?.date && <p className={styles.error}>{errors.date.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="">State</label>
        <select
          {...register('state', { required: 'state must be selected' })}
          data-testid="stateSelect"
        >
          <option value=""></option>
          <option value="Nevada">Nevada</option>
          <option value="Oklahoma">Oklahoma</option>
          <option value="Virginia">Virginia</option>
          <option value="Florida">Florida</option>
        </select>
        {errors?.state && <p className={styles.error}>{errors.state.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="">package photo</label>
        <input
          type="file"
          {...register('photo', { required: 'photo must be uploaded' })}
          data-testid="photoInput"
        />
        {errors?.photo && <p className={styles.error}>{errors.photo.message}</p>}
      </div>

      <div className={`${styles.formGroup} ${styles.switch}`}>
        <label className={styles.switchLabel} htmlFor="">
          agree to receive shares
        </label>
        <input
          className={styles.switchInput}
          type="checkbox"
          id="sharesInput"
          {...register('shares', { required: 'must agree to receive shares' })}
          data-testid="sharesInput"
        />
        <div className={styles.switchSliderContainer}>
          <label className={styles.switchSlider} htmlFor="sharesInput"></label>
        </div>
        {errors?.shares && <p className={styles.error}>{errors.shares.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="">agree to data processing</label>
        <input
          type="checkbox"
          {...register('dataProcessing', { required: 'must agree to data processing' })}
          data-testid="dataProcessingInput"
        />
        {errors?.dataProcessing && <p className={styles.error}>{errors.dataProcessing.message}</p>}
      </div>

      <button
        type="submit"
        name="submitButton"
        disabled={isErrorsHidden ? !isDirty : !isValid}
        data-testid="submitButton"
      >
        add delivery card
      </button>
    </form>
  );
}

export default DeliveryForm;
