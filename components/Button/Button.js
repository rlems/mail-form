import styles from './Button.module.scss';

export default function Button({ onClick, type, label, ...props }) {
  return (
    <button
      className={styles.Button}
      onClick={onClick}
      type={type}
      {...props}
    >
      {label}
    </button>
  )
}
