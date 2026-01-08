import styles from "../styles/AlertBox.module.css"

function AlertBox({ type, message }) {
  return (
    <div className={`${styles.alert} ${styles[type]}`}>
      {message}
    </div>
  )
}

export default AlertBox
