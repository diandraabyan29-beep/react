import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

function Comment() {
  return (
    <div className="border rounded-xl p-4 mb-4 max-w-md shadow">
      <UserInfo name="Zahran" />
      <p className="text-gray-700 mt-2">
        Ini adalah contoh komentar menggunakan komposisi komponen.
      </p>
    </div>
  )
}

export default Comment;
