'use client';

import styles from './styles.module.css';

export const LoginForm = () => {
  return (
    <>
      <h1 className={styles.title}>Login</h1>

      <section className={styles.formContainer}>
        <form action={() => console.log('Submitting the form ...')}>
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
              Access
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default LoginForm;