import styles from './FormField.module.scss';

export default function FormField({ children }) {
  return (
    <div className={styles.FormField}>
      {children}
    </div>
  )
}
