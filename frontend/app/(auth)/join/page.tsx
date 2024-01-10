import JoinFrom from "@/src/components/pages/Home/JoinFrom";
import Link from "next/link";

const Join = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center w-full min-h-screen">
      <div className="flex flex-col items-center gap-y-2">
        <h2 className="text-xl text-gray-800 font-semibold text-center ">
          Join us
        </h2>
        <p className="text-gray-600 text-center mb-5">
          Already have an account?{" "}
          <Link href="/login" className="text-[#ed1c5c]">
            Login
          </Link>
        </p>
        <JoinFrom />
      </div>
    </div>
  );
};

export default Join;
