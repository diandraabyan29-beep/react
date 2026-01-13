function SwitchStatus({ status }) {
  switch (status) {
    case "loading":
      return <span className="badge info">Loading...</span>;
    case "success":
      return <span className="badge success">Berhasil</span>;
    case "error":
      return <span className="badge error">Error</span>;
    default:
      return <span className="badge">Unknown</span>;
  }
}

export default SwitchStatus;
