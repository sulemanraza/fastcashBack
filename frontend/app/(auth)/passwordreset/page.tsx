import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import { Card } from "@/src/components/ui/card";
import { footerLinks } from "@/src/data";

const PasswordReset = () => {
  return (
    <main className="">
      <Header />
      <div className="bg-gray-100 py-5 min-h-[calc(100vh-182px)] ">
        <Card className="container xl:w-9/12  py-5 space-y-4">
          <h2 className="text-xl  text-gray-800 font-semibold ">
            Forgotten Your Password?
          </h2>
          <hr />
          <p>
            Enter your email address and we&rsquo;ll email you a link to reset
            your password.
          </p>

          <div className="w-1/2">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#ed1c5c] focus:border-[#ed1c5c] sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-1/3 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#ed1c5c] hover:bg-[#ed1c5c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ed1c5c]"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </Card>
      </div>
      <Footer links={footerLinks} />
    </main>
  );
};

export default PasswordReset;
