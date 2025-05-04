'use client';

import { useActionState } from "react";
import { FaGoogle } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import handleLogin from '../actions/handleLogin';
import { authenticate } from '../actions/loginCredentials';
import styles from './styles.module.css';

export const LoginForm = () => {
  const [ errorMessage, formAction, isPending ] = useActionState(
    authenticate,
    undefined,
  );

  console.log("Error Message:", errorMessage);
  console.log("Is Pending:", isPending);

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
                defaultValue="daniel.van2024@gmail.com"
              />
            </div>

            <div className={styles.labelInputContainer}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                id="password"
                type="password"
                name="password"
                className={styles.input}
                defaultValue="secretpassword"
              />
            </div>
          </div>

          <div className={styles.submitContainer}>
            <button type="submit" className={styles.submitButton}>
              Signin <RiSendPlaneFill />
            </button>
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

export default LoginForm;