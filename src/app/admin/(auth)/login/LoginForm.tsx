'use client';

import { FaGoogle } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import handleLogin from '../actions/handleLogin';
import styles from './styles.module.css';

export const LoginForm = () => {
  return (
    <>
      <h1 className={styles.title}>Login</h1>

      <section className={styles.formContainer}>
        <form action={() => {}}>
          <div className={styles.fieldsContainer}>
            <div className={styles.labelInputContainer}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                id="email"
                type="email"
                className={styles.input}
              />
            </div>

            <div className={styles.labelInputContainer}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input
                type="password"
                id="password"
                className={styles.input}
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