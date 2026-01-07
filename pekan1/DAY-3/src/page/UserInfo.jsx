import Avatar from "./Avatar";

function UserInfo({ name }) {
  return (
    <div className="flex items-center">
      <Avatar />
      <span className="font-semibold">{name}</span>
    </div>
  )
}

export default UserInfo;
