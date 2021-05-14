import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { Loading } from "../components/loading";
import { useAuth } from "../context/Auth";
import api from "../services/api";
import { Container } from "../styles/pages/logout";

export const Logout = () => {
  const { auth, setAuth } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await api
        .post(
          "/api/profile/logout",
          {
            email: auth.user.email,
          },
          {
            headers: {
              Authorization: auth.token,
            },
          }
        )
        .then(() => {
          return;
        });
      setAuth();
      localStorage.removeItem("user");
      history.push("/sign-In");
      return null;
    } catch (err) {
      console.log(`Error => ${err}`);
    }
  };

  useEffect(() => {
    handleLogout();
  });

  return (
    <Container>
      <Loading info={{ size: "15rem", radius: "7.5rem" }} />
      <h1>Logout...</h1>
    </Container>
  );
};
