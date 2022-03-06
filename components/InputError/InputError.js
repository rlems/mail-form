import styles from './InputError.module.scss';
export default function InputError({ error }) {
  return (
    <p className={styles.InputError}>{error}</p>
  )
}
