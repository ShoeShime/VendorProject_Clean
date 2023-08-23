import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import CustomerRegister from "../../vendordisplay/components/CustomerRegister"
import VendorRegister from "../../vendordisplay/components/VendorRegister"
import { useParams } from 'react-router-dom';

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: #915A44;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    opacity: 0.5;
    animation: animate 25s linear infinite;

  }

  &::before {
    width: 300px;
    height: 300px;
    top: -100px;
    left: -100px;
    background-color: #FFE7D5;
  }

  &::after {
    width: 500px;
    height: 500px;
    top: -250px;
    right: -200px;
    background-color: #FF6D33;
  }

  @keyframes animate {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(1000px, 1000px);
    }
  }
`;

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

/*places box in the center under register*/
const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

/*size of box, how spaced out the columns looks*/
const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem;
`;

const Icon = styled.i`
  margin-left: 0.5rem;
`;

const Button = styled.button`
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #FFE7D5;  /*color of next button*/
  color: #black;                /*color of WORD next on nextButton*/
  cursor: pointer;
`;

const SuccessMessage = styled.p`
  margin-top: 1rem;
`;


export const Register = () => {
    const routerNavigate = useNavigate();
    const params = useParams();
    const [businessName, setBusinessName] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');


    const handleBusinessNameChange = (e) => {
        setBusinessName(e.target.value);
        if (e.target.value) {
            setBusinessNameFilled(true);
        } else {
            setBusinessNameFilled(false);
        }
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
        if (e.target.value) {
            setCategoryFilled(true);
        } else {
            setCategoryFilled(false);
        }
    };


    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
        if (e.target.value) {
            setDescriptionFilled(true);
        } else {
            setDescriptionFilled(false);
        }
    };

    const handleBusinessNameNextClick = (e) => {
        e.preventDefault();
        console.log('Something');
        setBusinessNameFilled(false);
        setCategoryFilled(true);
    };

    const handleRegisterClick = (e) => {
        e.preventDefault();
        console.log('Something');
        setShowSuccessMessage(true);
    };

    /*add a click for register Handler*/
    const handleRegisterVendorClick = (e) => {
      e.preventDefault();
      console.log('Something');
      setShowSuccessMessage(true);
      routerNavigate('/register/vendor');
    };

     /*add a click for customer Handler*/
     const handleRegisterCustomerClick = (e) => {
      e.preventDefault();
      console.log('Something');
      setShowSuccessMessage(true);
      routerNavigate('/register/customer');
    };

    const [businessNameFilled, setBusinessNameFilled] = useState(false);
    const [categoryFilled, setCategoryFilled] = useState(false);
    const [descriptionFilled, setDescriptionFilled] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [userType, setUserType] = useState(null); /*creating variable for the Syntax Component */

    const setCustomerUserType = (e) => {
      setUserType('customer')
    };

    const setVendorUserType = (e) => {
      setUserType('vendor')
    };


    return (
        <Background>
          {userType === null && <RegisterWrapper>
            <h1>Registration</h1>
            <Button onClick={setCustomerUserType}>Customer</Button>
            <Button onClick={setVendorUserType}>Vendor</Button>
          {userType}
          </RegisterWrapper>}
          {userType === 'customer' && <CustomerRegister userSub={params.userSub}></CustomerRegister>}
          {userType === 'vendor' && <VendorRegister userSub={params.userSub}></VendorRegister>}
          {/*}
          <RegisterWrapper>
            <h1>Registration</h1>
            <Button onClick={handleRegisterCustomerClick}>Customer</Button>
            <Button onClick={handleRegisterVendorClick}>Vendor</Button>
          </RegisterWrapper>*/}
        </Background>
      );
    };