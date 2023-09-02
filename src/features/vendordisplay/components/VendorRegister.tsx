import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: #915A44;
  ;

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

const VendorRegistration = () => {
  const [businessName, setBusinessName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [registrationType, setRegistrationType] = useState('');
  const [businessNameFilled, setBusinessNameFilled] = useState(false);
  const [categoryFilled, setCategoryFilled] = useState(false);
  const [descriptionFilled, setDescriptionFilled] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const navigate = useNavigate();


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

  const handleCategoryNextClick = (e) => {
    e.preventDefault();
    console.log('Something');
    setCategoryFilled(false);
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    console.log('Something');
    setShowSuccessMessage(true);
  };

  const handleCustomerClick = () => {
    navigate('/customerRegistration');  //need this to navigate to customer page
  };


  return (
    <Background>
      <RegisterWrapper>
        <h1>Welcome!</h1>
        <h1>Register your business here!</h1>
        <RegisterForm>
          <Input
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={handleBusinessNameChange}
          />
          <Input
            type="text"
            placeholder="Category"
            value={category}
            onChange={handleCategoryChange}
          />
          <Input
            type="text"
            placeholder="Description"
            value={description}
            onChange={handleDescriptionChange}
          />
          <Button onClick={handleRegisterClick}>Register</Button>
        </RegisterForm>
        {showSuccessMessage && (
          <SuccessMessage>Registration successful!</SuccessMessage>
        )}
      </RegisterWrapper>
    </Background>
  );
};

export default VendorRegistration;

