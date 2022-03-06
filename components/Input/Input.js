import cn from 'classnames';
import styles from './Input.module.scss';

export default function Input({ type, id, hasError, onChange, ...props }) {
  const inputClassNames = cn(styles.Input, {
    [styles.error]: hasError,
  })

  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <input
      type={type}
      id={id}
      className={inputClassNames}
      onChange={handleChange}
      {...props}
    />
  );
}
