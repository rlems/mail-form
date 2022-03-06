import styles from './FormSubmitSuccessNotice.module.scss';

export default function FormSubmitSuccessNotice({ children }) {
  return (
    <div className={styles.FormSubmitSuccessNotice}>
      {children}
    </div>
  )
}
