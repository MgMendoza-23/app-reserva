import React from 'react';
import {Form, FloatingLabel, Button, Row, InputGroup, FormControl, FormGroup} from "react-bootstrap";
import {useFormik} from "formik";
import { Auth } from "../../../../api";
import {useAuth} from "../../../../hooks";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {initialValues, validationSchema} from "./LoginForm.form";

const authCtr=new Auth();
export function Login() {


  const {login} = useAuth();
  const navigate = useNavigate();
  const handleRegistroClick = () => {
    navigate('/registro'); 
  };

  const formik=useFormik({
    initialValues:initialValues(),
    validationSchema:validationSchema(),
    validateOnChange: false,
    onSubmit: async(formValue)=>{
      try {
      const response = await authCtr.login(formValue); 
      authCtr.setAccessToken(response.access);
      authCtr.setRefreshToken(response.refresh);
      login(response.access);
      } catch (error) {
        console.error(error);
      }
    }
 
  })
  return (
    <Form noValidate onSubmit={formik.handleSubmit}>
      <Row className='mb-3'>
        <InputGroup>
        <FloatingLabel 
        controlId='floatingInput'
        label="correo"
        className='mb-3'>
          <FormControl
          type='email'
          name='email'
          placeholder='nombre@ejemplo.com'
          onChange={formik.handleChange}
          value={formik.values.email}
          isValid={!formik.errors.email}
          isInvalid={!!formik.errors.email}
          required/>

        </FloatingLabel>
        </InputGroup>
        <InputGroup>
        <FloatingLabel 
        controlId='floatingInput'
        label="Password"
        className='mb-3'>
          <FormControl
          type='password'
          name='password'
          onChange={formik.handleChange}
          value={formik.values.password}
          isValid={!formik.errors.password}
          isInvalid={!!formik.errors.password}
          required/>
        </FloatingLabel>
        </InputGroup>
      </Row>
      <FormGroup>
        <div className='d-grid gap-2'> 
          <Button type='submit' size='Ig'>Enviar</Button>
          <Button onClick={handleRegistroClick} size='Ig'>Registro</Button>
        </div>
      </FormGroup>
    </Form>
  )
}
