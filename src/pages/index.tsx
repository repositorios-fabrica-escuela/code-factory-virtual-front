import { RegisterForm } from '@/pages/authentication/register/index';
import { NavBar } from '@/pages/authentication/nav/index';
import { LoginForm } from '@/pages/authentication/login/index';




export default function Home() {

  return (


    <>
      <div className="">
        <NavBar />
      </div>
      <LoginForm />
      <RegisterForm />
      
    </>

  );
}
