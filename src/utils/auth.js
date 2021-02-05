import axios from "axios";

export const isAuthenticated = async () => {
  try {
    const res = await axios.get("http://localhost:5000/auth/logged-in", {
      withCredentials: "include",
    });
    if (res.data === "logged in") {
      return true;
    }
    return false;
  } catch (err) {
    console.log(err);
    return false;
  }
};
