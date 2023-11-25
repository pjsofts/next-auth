const url = "http://127.0.0.1:4000";
async function login() {
  const response = await fetch(url + "/login", { method: "POST" });
  const data = await response.json();
  console.log(data);
  return data;
}

export { login };
