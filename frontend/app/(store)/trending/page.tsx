import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import { Card } from "@/src/components/ui/card";
import { footerLinks } from "@/src/data";
import {
  ChevronRight,
  RefreshCcw,
  RefreshCwOff,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import { FaSpinner } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const Trending = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Header />

        <div className="bg-gray-100 min-h-screen p-5 py-8 space-y-5">
          <div className="px-5 sm:container xl:w-9/12">
            <Card className="max-w-5xl text-center rounded-sm mx-auto">
              <div className="flex items-center justify-between gap-4 flex-col sm:flex-row p-5">
                <div className="flex items-center  gap-2">
                  <span className="bg-[#d1355b] p-3">
                    <TrendingUp className="text-white" />
                  </span>
                  <h1 className="text-gray-600 font-semibold capitalize text-3xl">
                    Trending Now
                  </h1>
                </div>
                <div>
                  <div className="flex items-center justify-center text-xs gap-3 text-gray-500">
                    <RefreshCcw className="h-5 w-5" />
                    <span className="font-semibold">NEXT UPDATE</span>
                  </div>
                  {/* time min and sec */}
                  <div>
                    <div className="flex items-center justify-center  gap-1 text-gray-500 p-2">
                      <div className="border-[1px] flex flex-col items-center p-2 px-5">
                        <span className="text-2xl font-semibold">00</span>
                        <span className="text-xs">Min</span>
                      </div>

                      <div className="border-[1px] flex flex-col items-center p-2 px-5">
                        <span className="text-2xl font-semibold">00</span>
                        <span className="text-xs">Secs</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex items-center justify-between flex-col md:flex-row gap-4 p-5">
                <div className="text-left text-sm text-gray-500">
                  These trending merchants are really popular right now. See
                  where other money savvy members are shopping to find the best
                  deals and sales.
                </div>
                <div className="min-w-fit flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-base font-semibold text-gray-500">
                      Rob - Deal Finder
                    </h3>
                    <span className="text-gray-500">@Fastcashback</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="max-w-5xl text-center rounded-sm mx-auto border-t-4 border-t-green-500">
            {stores.map((store, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="flex items-center bg-gray-100 border-b-2"
                  >
                    <div className=" text-green-600 hover:bg-gray-100 flex items-center gap-3 px-5">
                      <TrendingUp className=" " />
                      <span className="text-lg font-semibold">1141%</span>
                    </div>
                    <Link
                      href={"#"}
                      className="flex items-center justify-between w-full hover:bg-gray-100 border-l-2 bg-white p-5"
                    >
                      <Image
                        src={"/expedia.png"}
                        alt={""}
                        width={100}
                        height={100}
                      />
                      <span className="text-pink-700 font-semibold capitalize">
                        {store.offer}
                      </span>

                      <ChevronRight className="text-gray-600" />
                    </Link>
                  </div>
                  {store.description && (
                    <div className="p-5 border-b-2 text-gray-600 text-sm text-left">
                      New Here? Get 15% Off Everything! Use Code: NEWBIE
                    </div>
                  )}
                </>
              );
            })}
          </Card>
        </div>

        {/* Discover Green Cash Back */}
        <section className="bg-[#e9eaeb] border-t-[1px] border-t-[#dfdfe1]">
          <div className="container py-16">
            <h2 className="text-center text-2xl font-bold text-gray-600">
              Discover Green Cash Back
            </h2>

            <p className="md:w-9/12 mx-auto text-center text-xs text-gray-500 sm:text-base  py-5">
              We&apos;ve made it easy for you to find brands that support
              ethical and sustainable choices. From sustainable production and
              ethical sourcing, to protecting the world that supports us.
            </p>

            <Link
              href="#"
              className="text-sm text-center  block text-gray-600 underline"
            >
              Find out more...
            </Link>
          </div>
        </section>
      </main>
      <Footer links={footerLinks} />
    </>
  );
};

export default Trending;

const stores = [
  {
    id: 1,
    name: "Amazon",
    slug: "/amazon",
    logo: "/expedia.png",
    offer: "5% Cash Back",
    description: " New Here? Get 15% Off Everything! Use Code: NEWBIE",
  },
  {
    id: 2,
    name: "Walmart",
    slug: "/walmart",
    logo: "/expedia.png",
    offer: "8% Cash Back",
    description: "",
  },
  {
    id: 3,
    name: "Best Buy",
    slug: "/best-buy",
    logo: "/expedia.png",
    offer: "10% Cash Back",
    description: "",
  },
  {
    id: 4,
    name: "Amazon",
    slug: "/amazon",
    logo: "/expedia.png",
    offer: "6% Cash Back",
    description: "",
  },
];
