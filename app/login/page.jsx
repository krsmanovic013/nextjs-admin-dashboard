import styles from "@/app/components/login/login.module.css";
import LoginForm from "../components/login/loginForm/LoginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
