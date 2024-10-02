import { faCircleCheck, faCircleXmark, faRegCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from "axios";
import React, { useState } from "react";
import TextInput from "../ui/TextInput";
import { TextBox } from './ListCSS';
import { IconWrapper, InputWrapper } from './JoinItemTextCSS';

function JoinItemText({ formValues, onChange }) {
  const [validationStatus, setValidationStatus] = useState({
    id: null,
    fullName: null,
    username: null,
    password: null
  });

  const validateField = (field, value) => {
    if (field === 'id') {
      axios
        .get(`http://localhost:8080/api/validation/id?id=${value}`)
        .then((response) => {
          setValidationStatus((prev) => ({
            ...prev,
            id: response.data ? 'valid' : 'invalid',
          }));
        })
        .catch((error) => {
          console.error('Id validation error:', error);
        });
    }

    if (field === 'password') {
      axios
        .get(`http://localhost:8080/api/validation/password?password=${value}`)
        .then((response) => {
          setValidationStatus((prev) => ({
            ...prev,
            password: response.data ? 'valid' : 'invalid',
          }));
        })
        .catch((error) => {
          console.error('Email validation error:', error);
        });
    }

    if (field === 'fullName') {
      axios
        .get(`http://localhost:8080/api/validation/fullname?fullname=${value}`)
        .then((response) => {
          setValidationStatus((prev) => ({
            ...prev,
            fullname: response.data ? 'valid' : 'invalid',
          }));
        })
        .catch((error) => {
          console.error('Fullname validation error:', error);
        });
    }

    if (field === 'username') {
      axios
        .get(`http://localhost:8080/api/validation/username?username=${value}`)
        .then((response) => {
          setValidationStatus((prev) => ({
            ...prev,
            username: response.data ? 'valid' : 'invalid',
          }));
        })
        .catch((error) => {
          console.error('Username validation error:', error);
        });
    }
  };

  const items = [
    ['text', '휴대폰 번호 또는 이메일 주소', 'id'],
    ['password', '비밀번호', 'password'],
    ['text', '성명', 'fullName'],
    ['text', '사용자 이름', 'username'],
  ];

  const getIcon = (status) => {
    if (status === 'valid') {
      return <FontAwesomeIcon icon={faCircleCheck} style={{ color: 'gray' }} />;
    }
    if (status === 'invalid') {
      return <FontAwesomeIcon icon={faCircleXmark} style={{ color: 'red' }} />;
    }
    return null;
  };

  return (
    <TextBox>
      {items.map(([type, placeholder, field], index) => (
        <InputWrapper key={index}>
          <TextInput
            type={type}
            placeholder={placeholder}
            value={formValues[field]}
            onChange={(e) => {
              onChange(field, e.target.value);
              validateField(field, e.target.value);
            }}
          />
          <IconWrapper>
            {getIcon(validationStatus[field])}
          </IconWrapper>
        </InputWrapper>
      ))}
    </TextBox>
  );
}

export default JoinItemText;