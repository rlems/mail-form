import styles from './Button.module.scss';

export default function Button({ onClick, type, label }) {
  return (
    <button
      className={styles.Button}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  )
}
