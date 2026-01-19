import Middle from "./Middle";

function Parent() {
  const message = "Halo dari Parent";

  return (
    <div className="box">
      <h3>📦 Prop Drilling</h3>
      <Middle message={message} />
    </div>
  );
}

export default Parent;
