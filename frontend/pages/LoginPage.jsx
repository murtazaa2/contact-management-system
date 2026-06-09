import LoginForm from '../components/authorization/LoginForm';

function LoginPage() {
  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-5">

          <h2 className="mb-4">
            Login
          </h2>

          <LoginForm />

        </div>

      </div>

    </div>
  );
}

export default LoginPage;