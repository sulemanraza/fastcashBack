import Footer from "@/src/components/Footer";
import LoginForm from "@/src/components/pages/Home/LoginForm";
import { footerLinks } from "@/src/data";
import Link from "next/link";

const Login = () => {
  return (
    <main className="bg-gray-100 flex items-center justify-center w-full min-h-screen">
      <div className="flex flex-col items-center gap-y-2">
        <h2 className="text-xl text-gray-800 font-semibold text-center ">
          Members login
        </h2>
        <p className="text-gray-600 text-center  mb-5">
          Don&rsquo;t have an account?{" "}
          <Link href="/join" className="text-[#ed1c5c]">
            Join us
          </Link>
        </p>
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
