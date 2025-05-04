'use client';

import { ChangeEvent, useActionState, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import handleLogin from '../actions/handleLogin';
import { authenticate } from '../actions/loginCredentials';
import styles from './styles.module.css';
import { FaExclamationCircle } from "react-icons/fa";
import { useFormStatus } from "react-dom";
import { ImSpinner6 as Spinner } from "react-icons/im";

type FormData = {
  email: string;
  password: string;
};

const FORM_DATA: FormData = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const [ inputField, setInputField ] = useState(FORM_DATA);
  const [ errorMessage, formAction ] = useActionState(
    authenticate,
    undefined,
  );

  const handleInputFields = (event: ChangeEvent<HTMLInputElement>) => {
    setInputField((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  };

  // const clearForm = () => {
  //   setInputField(FORM_DATA);
  // };

  return (
    <>
      <h1 className={styles.title}>Login</h1>

      <section className={styles.formContainer}>
        <form action={formAction}>
          <div className={styles.fieldsContainer}>
            <div className={styles.labelInputContainer}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                id="email"
                type="email"
                name="email"
                className={styles.input}
                value={inputField.email}
                onChange={handleInputFields}
              />
            </div>

            <div className={styles.labelInputContainer}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                id="password"
                type="password"
                name="password"
                className={styles.input}
                value={inputField.password}
                onChange={handleInputFields}
              />
            </div>
          </div>

          {
            (errorMessage === 'Invalid credentials !') && (
              <div className="flex items-center gap-2 bg-pink-500 py-2 px-4 rounded mb-5">
                <FaExclamationCircle size={20} className="text-pink-50" />
                <p className="text-sm text-white font-bold italic">Credenciales Invalidas</p>
              </div>
            )
          }

          <div className={styles.submitContainer}>
            <SubmitButton />
          </div>
        </form>
      </section>

      <div className="my-5"></div>

      <section className={styles.formContainer}>
        <form action={handleLogin}>
          <div className="flex items-center justify-center">
            <button type="submit" className={styles.googleSubmitButton}>
              Sign in with Google <FaGoogle />
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={pending ? styles.disabledButton : styles.submitButton}
      disabled={pending}
    >      
      {
        pending ? (
          <>
            <span className="animate-pulse">Wait</span>
            <Spinner className="animate-spin [animation-duration:2.5s]" />
          </>
        ) : (
          <>
            <span>Signin</span>
            <RiSendPlaneFill />
          </>
        )
      }
    </button>
  );
};

export default LoginForm;