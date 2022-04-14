import React from 'react';
import { IDeliveryCard } from '../../types/interfaces';
import styles from './deliveryForm.module.css';

interface IDeliveryFormProps {
  addDeliveryCard: (key: IDeliveryCard) => void;
}

interface IDeliveryFormState {
  isNameInputValid: null | boolean;
  isDateInputValid: null | boolean;
  isStateSelectValid: null | boolean;
  isFileInputValid: null | boolean;
  isSharesInputValid: null | boolean;
  isDataProcessingInputValid: null | boolean;
  isSubmitButtonDisabled: boolean;
}

class DeliveryForm extends React.Component<IDeliveryFormProps, IDeliveryFormState> {
  form: React.RefObject<HTMLFormElement>;

  constructor(props: IDeliveryFormProps) {
    super(props);
    this.form = React.createRef();
    this.state = {
      isNameInputValid: null,
      isDateInputValid: null,
      isStateSelectValid: null,
      isFileInputValid: null,
      isSharesInputValid: null,
      isDataProcessingInputValid: null,
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

    const areAllValidityValuesNotFalsy = Object.values({
      isNameInputValid,
      isDateInputValid,
      isStateSelectValid,
      isFileInputValid,
      isSharesInputValid,
      isDataProcessingInputValid,
    }).every((value) => value === null || value === true);

    if (areAllValidityValuesNotFalsy) {
      this.setState({ isSubmitButtonDisabled: false });
    } else {
      this.setState({ isSubmitButtonDisabled: true });
    }
  };

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

  hideErrorFromElement(targetElement: string): void {
    let object = {};
    object = {
      [targetElement]: true,
    };
    this.setState(object);

    setTimeout(() => {
      this.handleChangeForm();
    }, 0);
  }

  validateNameInput(): boolean {
    const nameInputValue = this.form.current?.nameInput.value;
    const isNameInputValid = nameInputValue.length > 1 ? true : false;
    this.setState({ isNameInputValid: isNameInputValid });
    this.handleChangeForm();
    return isNameInputValid;
  }

  validateDateInput(): boolean {
    const dateInputValue = this.form.current?.dateInput.value;
    const isDateInputValid = dateInputValue !== '' ? true : false;
    this.setState({ isDateInputValid: isDateInputValid });
    return isDateInputValid;
  }

  validateStateSelect(): boolean {
    const stateSelectValue = this.form.current?.stateSelect.value;
    const isStateSelectValid = stateSelectValue !== 'Choose state' ? true : false;
    this.setState({ isStateSelectValid: isStateSelectValid });
    return isStateSelectValid;
  }

  validatePhotoInput(): boolean {
    const photoInputValue = this.form.current?.photoInput.files[0];
    const isFileInputValid = photoInputValue !== undefined ? true : false;
    this.setState({ isFileInputValid: isFileInputValid });
    return isFileInputValid;
  }

  validateSharesInput(): boolean {
    const sharesInputValue = this.form.current?.sharesInput.checked;
    const isSharesInputValid = sharesInputValue === true ? true : false;
    this.setState({ isSharesInputValid: isSharesInputValid });
    return isSharesInputValid;
  }

  validateDataProcessingInput(): boolean {
    const DataProcessingInputValue = this.form.current?.dataProcessingInput.checked;
    const isDataProcessingInputValid = DataProcessingInputValue === true ? true : false;
    this.setState({ isDataProcessingInputValid: isDataProcessingInputValid });
    return isDataProcessingInputValid;
  }

  validateAllData(): boolean {
    const AreAllDataValid = [
      this.validateNameInput(),
      this.validateDateInput(),
      this.validateStateSelect(),
      this.validatePhotoInput(),
      this.validateSharesInput(),
      this.validateSharesInput(),
      this.validateDataProcessingInput(),
    ].every((validationResult) => validationResult === true);
    return AreAllDataValid;
  }

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
          <p className={styles.error} hidden={this.state.isNameInputValid === false ? false : true}>
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
          <p className={styles.error} hidden={this.state.isDateInputValid === false ? false : true}>
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
          <p
            className={styles.error}
            hidden={this.state.isStateSelectValid === false ? false : true}
          >
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
          <p className={styles.error} hidden={this.state.isFileInputValid === false ? false : true}>
            photo must be uploaded
          </p>
        </div>

        <div className={[styles.formGroup, styles.switch].join(' ')}>
          <label className={styles.switchLabel}>agree to receive shares</label>
          <input
            className={styles.switchInput}
            type="checkbox"
            name="sharesInput"
            id="sharesInput"
            data-testid="sharesInput"
            onChange={() => this.hideErrorFromElement('isSharesInputValid')}
          />
          <div className={styles.switchSliderContainer}>
            <label className={styles.switchSlider} htmlFor="sharesInput"></label>
          </div>

          <p
            className={styles.error}
            hidden={this.state.isSharesInputValid === false ? false : true}
          >
            must agree to receive shares
          </p>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="">agree to data processing</label>
          <input
            type="checkbox"
            name="dataProcessingInput"
            data-testid="dataProcessingInput"
            onChange={() => this.hideErrorFromElement('isDataProcessingInputValid')}
          />
          <p
            className={styles.error}
            hidden={this.state.isDataProcessingInputValid === false ? false : true}
          >
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
