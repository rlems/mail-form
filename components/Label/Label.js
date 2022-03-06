import styles from './Label.module.scss';

export default function Label({ id, label }) {
  return (
    <label className={styles.label} htmlFor={id}>{label}</label>
  )
}
