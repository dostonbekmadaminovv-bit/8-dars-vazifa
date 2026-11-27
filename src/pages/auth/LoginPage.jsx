import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import logoimg from "../../assets/images/logo-img.png";

export default function Login() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    const loginData = {
      login: formData.get("login"),
      password: formData.get("password"),
    };

    authBlog(loginData);
  }
  async function authBlog(loginData) {
    try {
      let res = await fetch(
        "https://blogify-oquvchi.vercel.app/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(loginData),
        },
      );
      if (!res.ok) {
        throw new Error("muammo  loginda");
      }

      let data = await res.json();
      localStorage.setItem("token", data.token);

      navigate("/admin");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="flex items-center justify-center bg-white px-6 py-10">
        <div className="w-full max-w-95">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Blogify" className="h-6 w-auto" />
          </Link>

          {/* Back to Home */}
          <Link
            to="/"
            className="mt-5 inline-flex items-center gap-2 text-[11px] text-slate-700 transition hover:text-indigo-600"
          >
            <svg
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                d="M19 12H5m0 0 6-6m-6 6 6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Back to Home
          </Link>

          {/* Login Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-4 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
          >
            <h1 className="text-lg font-bold text-slate-900">Welcome Back</h1>

            <p className="mt-1 text-[11px] text-slate-500">
              Enter your credentials to access your account
            </p>

            {/* Email */}
            <div className="mt-5">
              <label
                htmlFor="email"
                className="text-[11px] font-medium text-slate-900"
              >
                Email
              </label>

              <input
                id="login"
                name="login"
                type="text"
                placeholder="nameexample.com"
                required
                className="mt-1.5 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            {/* Password */}
            <div className="mt-3">
              <label
                htmlFor="password"
                className="text-[11px] font-medium text-slate-900"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                name="password"
                placeholder="••••••••"
                required
                className="mt-1.5 w-full rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-xs outline-none placeholder:text-slate-400 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="mt-4 w-full rounded-lg bg-indigo-600 py-2.5 text-xs font-medium text-white transition hover:bg-indigo-700"
            >
              Login
            </button>

            {/* Sign Up */}
            <p className="mt-4 text-center text-[10px] text-slate-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className="font-medium text-indigo-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-violet-50 to-purple-50 px-6 lg:flex">
        <img
          src={logoimg}
          alt="Start your journey"
          className="w-full max-w-95 rounded-xl shadow-2xl shadow-indigo-200"
        />

        <h2 className="mt-4 text-base font-bold text-slate-900">
          Start Your Journey
        </h2>

        <p className="mt-2 text-center text-[11px] text-slate-500">
          Join thousands of creators sharing their stories on Blogify
        </p>
      </div>
    </div>
  );
}
