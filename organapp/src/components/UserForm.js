import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import DonorBirthdate from './DonorBirthdate';
import DonorQuestion2 from './DonorQuestion2';
import DonorQuestion3 from './DonorQuestion3';
import DonorQuestion4 from './DonorQuestion4';
// import FormPersonalDetails from './FormPersonalDetails';
// import Confirm from './Confirm';
// import Success from './Success';
import { DonorOrRecepient } from './DonorOrRecepient';

export class UserForm extends Component {
  state = {
    step: 1,
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: ''
  };

  

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio, password } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio, password };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <DonorOrRecepient
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 3:
          return (
            <DonorBirthdate
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
          case 4:
            return (
              <DonorQuestion2
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
              />
            );
            case 5:
              return (
                <DonorQuestion3
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  values={values}
                />
              );
              case 6:
                return (
                  <DonorQuestion4
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                  />
                );    
      // case 7:
      //   return (
      //     <Confirm
      //       nextStep={this.nextStep}
      //       prevStep={this.prevStep}
      //       values={values}
      //     />
      //   );
      // case 8:
      //   return <Success />;
      default:
    }
  }
}

export default UserForm;