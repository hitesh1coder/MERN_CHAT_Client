import { useRecoilValue } from "recoil";
import LoginCard from "../Componets/LoginCard";
import SignupCard from "../Componets/SignupCard";
import authScreenAtom from "../atoms/authAtom";

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);

  return <>{authScreenState === "signup" ? <SignupCard /> : <LoginCard />}</>;
};

export default AuthPage;
