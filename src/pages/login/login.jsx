import "./login.css";

export const Login = () => {
  return (
    <main className="login">
      <section className="login-container">
        <h1>Login</h1>
        <form action="login" className="login-form">
          <label htmlFor="name">Name</label>
          <input type="text" />
          <label htmlFor="password">Password</label>
          <input type="password" />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
};
