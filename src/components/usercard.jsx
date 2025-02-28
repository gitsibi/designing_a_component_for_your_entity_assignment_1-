// import profilePic from "../assets/image/profile-pic.jpg";


function UserCard() {
  return (
    <div className="w-72 border border-gray-300 rounded-lg shadow-md p-4 text-center mx-auto">
      <img
        src="/image/profile-pic.jpg"
        alt="Profile"
        className="w-36 h-36 rounded-full object-cover mx-auto"
      />
      <h2 className="text-xl font-semibold mt-2">Sibishree</h2>
      <p className="mt-2">
        <strong>Email: </strong>
        sibishree200@gmail.com
      </p>
      <p>
        <strong>Phone: </strong>
        xxxxxxxxx
      </p>
      <p>
        <strong>Address: </strong>
        123 Main St, Anytown, USA
      </p>
    </div>
  );
}

export default UserCard;
