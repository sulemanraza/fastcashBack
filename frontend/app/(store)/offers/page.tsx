import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import { Card } from "@/src/components/ui/card";
import { footerLinks } from "@/src/data";
import { ArrowBigRight, ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Offers = () => {
  return (
    <>
      <main className="overflow-x-hidden">
        <Header />

        <div className="bg-gray-100 min-h-screen p-5 py-8 md:py-16">
          <div className=" px-5 sm:container xl:w-9/12">
            <div className="max-w-5xl text-center mx-auto pb-8 md:pb-16">
              <div className="flex items-center justify-center flex-col space-y-3">
                <h1 className="text-gray-600 font-semibold capitalize text-3xl">
                  TOP OFFERS
                </h1>
                <p className="text-gray-600">
                  Browse our best offers, including exclusive Cash Back deals
                  increased for a limited time only.
                </p>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {topBrands.map((item, index) => {
                  return (
                    <Card
                      key={index}
                      className={`rounded-sm border-[1px] border-t-4 ${
                        index === 0 ? "border-t-green-500" : "border-t-pink-500"
                      }
                      }`}
                    >
                      {/* heading */}
                      <h2 className="font-semibold p-5 border-b-2 text-xl ">
                        {item.title}
                      </h2>

                      {item.stores
                        .slice(
                          0,
                          item.stores.length > 5 ? 5 : item.stores.length
                        )
                        .map((store, index) => {
                          return (
                            <>
                              <Link
                                href={store.slug}
                                key={index}
                                className="flex items-center justify-between w-full py-2 border-b-2  hover:bg-gray-100  px-5"
                              >
                                <div className="flex items-center gap-2">
                                  <Image
                                    src={store.logo}
                                    alt={store.name}
                                    width={100}
                                    height={100}
                                  />
                                  <span className="text-pink-700 font-semibold capitalize">
                                    {store.offer}
                                  </span>
                                </div>
                                <ChevronRight className="text-gray-600" />
                              </Link>
                            </>
                          );
                        })}
                      {item.stores.length > 5 && (
                        <div className="flex items-center justify-center w-full py-2 border-b-2 hover:bg-gray-100">
                          <Link
                            href={""}
                            key={index}
                            className="flex items-center justify-end w-full py-2 hover:bg-gray-100 gap-5 px-5"
                          >
                            <span className="text-gray-600  capitalize">
                              See More
                            </span>
                            <ChevronRight className="text-gray-600" />
                          </Link>
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
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

export default Offers;

const topBrands = [
  {
    title: "Top Picks",
    category: "stores",
    stores: [
      {
        id: 1,
        name: "Amazon",
        slug: "/amazon",
        logo: "/expedia.png",
        offer: "5% Cash Back",
      },
      {
        id: 2,
        name: "Walmart",
        slug: "/walmart",
        logo: "/expedia.png",
        offer: "8% Cash Back",
      },
      {
        id: 3,
        name: "Best Buy",
        slug: "/best-buy",
        logo: "/expedia.png",
        offer: "10% Cash Back",
      },
      {
        id: 4,
        name: "Amazon",
        slug: "/amazon",
        logo: "/expedia.png",
        offer: "6% Cash Back",
      },
    ],
  },
  {
    title: "Top Coupon Codes",
    category: "stores",
    stores: [
      {
        id: 1,
        name: "Amazon",
        slug: "/amazon",
        logo: "/expedia.png",
        offer: "5% Cash Back",
      },
      {
        id: 2,
        name: "Walmart",
        slug: "/walmart",
        logo: "/expedia.png",
        offer: "8% Cash Back",
      },
      {
        id: 3,
        name: "Best Buy",
        slug: "/best-buy",
        logo: "/expedia.png",
        offer: "10% Cash Back",
      },
      {
        id: 4,
        name: "Amazon",
        slug: "/amazon",
        logo: "/expedia.png",
        offer: "6% Cash Back",
      },
    ],
  },
  {
    title: "Travel",
    category: "travel",
    stores: [
      {
        id: 1,
        name: "Hotels.com",
        slug: "/hotels",
        logo: "/expedia.png",
        offer: "5% Cash Back",
      },
      {
        id: 2,
        name: "Expedia",
        slug: "/expedia",
        logo: "/expedia.png",
        offer: "4.5% Cash Back",
      },
      {
        id: 3,
        name: "Booking.com",
        slug: "/booking",
        logo: "/expedia.png",
        offer: "4% Cash Back",
      },
      {
        id: 4,
        name: "vrbo",
        slug: "/vrbo",
        logo: "/expedia.png",
        offer: "2.5% Cash Back",
      },
      {
        id: 5,
        name: "Orbitz",
        slug: "/orbitz",
        logo: "/expedia.png",
        offer: "6% Cash Back",
      },
      {
        id: 6,
        name: "Travelocity",
        slug: "/travelocity",
        logo: "/expedia.png",
        offer: "3% Cash Back",
      },
    ],
  },
  {
    title: "Home & Garden",
    category: "home-garden",
    stores: [
      {
        id: 1,
        name: "Hotels.com",
        slug: "/hotels",
        logo: "/expedia.png",
        offer: "5% Cash Back",
      },
      {
        id: 2,
        name: "Expedia",
        slug: "/expedia",
        logo: "/expedia.png",
        offer: "4.5% Cash Back",
      },
      {
        id: 3,
        name: "Booking.com",
        slug: "/booking",
        logo: "/expedia.png",
        offer: "4% Cash Back",
      },
      {
        id: 4,
        name: "vrbo",
        slug: "/vrbo",
        logo: "/expedia.png",
        offer: "2.5% Cash Back",
      },
      {
        id: 5,
        name: "Orbitz",
        slug: "/orbitz",
        logo: "/expedia.png",
        offer: "6% Cash Back",
      },
      {
        id: 6,
        name: "Travelocity",
        slug: "/travelocity",
        logo: "/expedia.png",
        offer: "3% Cash Back",
      },
    ],
  },
];
