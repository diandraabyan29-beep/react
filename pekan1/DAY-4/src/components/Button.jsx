import styles from "../styles/Button.module.css"

function Button({ variant, children }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  )
}

export default Button
