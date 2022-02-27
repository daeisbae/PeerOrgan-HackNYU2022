import React, { Component } from 'react';
import FormUserDetails from '../FormUserDetails';
import RecepientOrDonor from './RecepientOrDonor';
import RecepientName from './RecepientName';
import RecepientOrgan from './RecepientOrgan';
import RecepientBlood from './RecepientBlood';
import RecepientStory from './RecepientStory';
// import FormPersonalDetails from './FormPersonalDetails';
// import Confirm from './Confirm';
// import Success from './Success';

export class RecepientFlow extends Component {
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
          <RecepientOrDonor
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 3:
          return (
            <RecepientName
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
          case 4:
            return (
              <RecepientOrgan
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                values={values}
              />
            );
            case 5:
              return (
                <RecepientBlood
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  values={values}
                />
              );
              case 6:
                return (
                  <RecepientStory
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                  />
                );    
      default:
    }
  }
}

export default RecepientFlow;