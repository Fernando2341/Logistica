import { IonContent, IonPage } from "@ionic/react";
import LogoTitle from "../../components/LogoTitle";
import EmailInputField from "../../components/EmailInputField"; 
import PasswordInputField from "../../components/PasswordInputField"; 
import Button from "../../components/Button"; 
import GoogleButton from "../../components/GoogleButton"; 
import ForgotPasswordLink from "../../components/ForgotPasswordLink"; 
import RegisterLink from "../../components/RegisterLink"; 
import "../styles.css";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding login-container">
        <div className="login-wrapper">
          <LogoTitle />

          <div className="form-container">
            <EmailInputField label="Correo electrónico" placeholder="Tu correo" />
            <PasswordInputField label="Contraseña" placeholder="Tu contraseña" />
            
            <ForgotPasswordLink text="Has olvidado tu contraseña" redirectTo="/forgot-password" />
            
            <Button>Iniciar sesión</Button>

            <GoogleButton />

            <RegisterLink />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
