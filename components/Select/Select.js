import cn from 'classnames';
import styles from './Select.module.scss';

export default function Select({ options, id, hasError, onChange, ...props }) {
  const selectCassNames = cn(styles.Select, {
    [styles.error]: hasError,
  })

  function handleChange(e) {
    onChange(e.target.value);
  }

  return (
    <select id={id} className={selectCassNames} onChange={handleChange} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value} label={option.label} />
      ))}
    </select>
  );
}
