import cn from "classnames";
import styles from "./Checkbox.module.scss";

export default function Checkbox({ options, id, hasError, label, onChange, checked, ...props }) {
  const checkboxCassNames = cn(styles.Checkbox, {
    [styles.error]: hasError,
  })

  function handleChange(e) {
    onChange(e.target.checked)
  }

  return (
    <div className="d-flex align-items-center">
      <input type="checkbox" id={id} className={checkboxCassNames} onChange={handleChange} checked={checked} {...props} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}
