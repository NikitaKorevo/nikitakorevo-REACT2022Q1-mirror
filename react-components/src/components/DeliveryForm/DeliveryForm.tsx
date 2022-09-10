import React from 'react';
import { IDeliveryCard } from '../../types/interfaces';
import styles from './deliveryForm.module.css';

interface IDeliveryFormProps {
  addDeliveryCard: (key: IDeliveryCard) => void;
}

interface IDeliveryFormState {
  isNameInputValid: boolean;
  isDateInputValid: boolean;
  isStateSelectValid: boolean;
  isFileInputValid: boolean;
  isSharesInputValid: boolean;
  isDataProcessingInputValid: boolean;
  isSubmitButtonDisabled: boolean;
}

class DeliveryForm extends React.Component<IDeliveryFormProps, IDeliveryFormState> {
  form: React.RefObject<HTMLFormElement>;

  constructor(props: IDeliveryFormProps) {
    super(props);
    this.form = React.createRef();
    this.state = {
      isNameInputValid: true,
      isDateInputValid: true,
      isStateSelectValid: true,
      isFileInputValid: true,
      isSharesInputValid: true,
      isDataProcessingInputValid: true,
      isSubmitButtonDisabled: true,
    };
  }

  handleChangeForm = (): void => {
    const {
      isNameInputValid,
      isDateInputValid,
      isStateSelectValid,
      isFileInputValid,
      isSharesInputValid,
      isDataProcessingInputValid,
    } = this.state;

    const isAllValidityValuesNotFalsy = Object.values({
      isNameInputValid,
      isDateInputValid,
      isStateSelectValid,
      isFileInputValid,
      isSharesInputValid,
      isDataProcessingInputValid,
    }).every((value) => value !== false);

    this.setState({ isSubmitButtonDisabled: !isAllValidityValuesNotFalsy });
  };

  hideErrorFromElement(targetElement: string): void {
    this.setState({
      ...this.state,
      [targetElement]: true,
    });

    setTimeout(() => {
      this.handleChangeForm();
    }, 0);
  }

  validateNameInput(): boolean {
    const nameInputValue = this.form.current?.nameInput.value;
    const isNameInputValid = nameInputValue.length > 1;
    this.setState({ isNameInputValid });
    this.handleChangeForm();
    return isNameInputValid;
  }

  validateDateInput(): boolean {
    const dateInputValue = this.form.current?.dateInput.value;
    const isDateInputValid = dateInputValue !== '';
    this.setState({ isDateInputValid });
    return isDateInputValid;
  }

  validateStateSelect(): boolean {
    const stateSelectValue = this.form.current?.stateSelect.value;
    const isStateSelectValid = stateSelectValue !== 'Choose state';
    this.setState({ isStateSelectValid });
    return isStateSelectValid;
  }

  validatePhotoInput(): boolean {
    const photoInputValue = this.form.current?.photoInput.files[0];
    const isFileInputValid = photoInputValue !== undefined;
    this.setState({ isFileInputValid });
    return isFileInputValid;
  }

  validateSharesInput(): boolean {
    const isSharesInputValid = this.form.current?.sharesInput.checked;
    this.setState({ isSharesInputValid });
    return isSharesInputValid;
  }

  validateDataProcessingInput(): boolean {
    const isDataProcessingInputValid = this.form.current?.dataProcessingInput.checked;
    this.setState({ isDataProcessingInputValid });
    return isDataProcessingInputValid;
  }

  validateAllData(): boolean {
    return [
      this.validateNameInput(),
      this.validateDateInput(),
      this.validateStateSelect(),
      this.validatePhotoInput(),
      this.validateSharesInput(),
      this.validateSharesInput(),
      this.validateDataProcessingInput(),
    ].every((validationResult) => validationResult === true);
  }

  handleClickSubmitButton = (): void => {
    const formElement = this.form.current;
    const nameInputValue = formElement?.nameInput.value;
    const dateInputValue = formElement?.dateInput.value;
    const stateSelectValue = formElement?.stateSelect.value;
    const photoInputValue = formElement?.photoInput.files[0];
    const sharesInputValue = formElement?.sharesInput.checked;

    if (this.validateAllData()) {
      this.props.addDeliveryCard({
        name: nameInputValue,
        date: dateInputValue,
        state: stateSelectValue,
        photo: photoInputValue,
        shares: sharesInputValue,
      });
      formElement?.reset();
    }
    this.setState({ isSubmitButtonDisabled: true });
  };

  render(): JSX.Element {
    return (
      <form className={styles.form} ref={this.form}>
        <h2 className={styles.title}>Delivery data</h2>
        <div className={styles.formGroup}>
          <label htmlFor="">Name</label>
          <input
            type="text"
            placeholder="Michael"
            name="nameInput"
            data-testid="nameInput"
            onInput={() => this.hideErrorFromElement('isNameInputValid')}
          />
          <p className={styles.error} hidden={this.state.isNameInputValid}>
            name must be greater than 1 letter
          </p>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="">Date</label>
          <input
            type="date"
            name="dateInput"
            data-testid="dateInput"
            onInput={() => this.hideErrorFromElement('isDateInputValid')}
          />
          <p className={styles.error} hidden={this.state.isDateInputValid}>
            date must be selected
          </p>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="">State</label>
          <select
            defaultValue="Choose state"
            name="stateSelect"
            data-testid="stateSelect"
            onChange={() => this.hideErrorFromElement('isStateSelectValid')}
          >
            <option value="Choose state" disabled>
              Choose state
            </option>
            <option value="Nevada">Nevada</option>
            <option value="Oklahoma">Oklahoma</option>
            <option value="Virginia">Virginia</option>
            <option value="Florida">Florida</option>
          </select>
          <p className={styles.error} hidden={this.state.isStateSelectValid}>
            state must be selected
          </p>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="">package photo</label>
          <input
            type="file"
            name="photoInput"
            data-testid="photoInput"
            onChange={() => this.hideErrorFromElement('isFileInputValid')}
          />
          <p className={styles.error} hidden={this.state.isFileInputValid}>
            photo must be uploaded
          </p>
        </div>

        <div className={`${styles.formGroup} ${styles.switch}`}>
          <label className={styles.switchLabel}>agree to receive shares</label>
          <input
            className={styles.switchInput}
            type="checkbox"
            name="sharesInput"
            id="sharesInput"
            data-testid="sharesInput"
            onClick={() => this.hideErrorFromElement('isSharesInputValid')}
          />
          <div className={styles.switchSliderContainer}>
            <label className={styles.switchSlider} htmlFor="sharesInput"></label>
          </div>

          <p className={styles.error} hidden={this.state.isSharesInputValid}>
            must agree to receive shares
          </p>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="">agree to data processing</label>
          <input
            type="checkbox"
            name="dataProcessingInput"
            data-testid="dataProcessingInput"
            onClick={() => this.hideErrorFromElement('isDataProcessingInputValid')}
          />
          <p className={styles.error} hidden={this.state.isDataProcessingInputValid}>
            must agree to data processing
          </p>
        </div>

        <button
          type="button"
          name="submitButton"
          data-testid="submitButton"
          disabled={this.state.isSubmitButtonDisabled}
          onClick={this.handleClickSubmitButton}
        >
          add delivery card
        </button>
      </form>
    );
  }
}

export default DeliveryForm;
