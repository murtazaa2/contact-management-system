import RegisterForm from '../components/authorization/RegisterForm';

function RegisterPage() {
  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <h2 className="mb-4">
            Register
          </h2>

          <RegisterForm />

        </div>

      </div>

    </div>
  );
}

export default RegisterPage;