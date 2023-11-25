import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const url = "http://localhost:4000";

async function Profile() {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  console.log(token);

  if (!token) {
    return redirect("/login?callbackUrl=/profile");
  }

  const response = await fetch(url + "/me");
  const data = await response.json();
  console.log("data", data);
  return (
    <div>
      <div>{data.name}</div>
      <div>{data.lastname}</div>
    </div>
  );
}

export default Profile;
