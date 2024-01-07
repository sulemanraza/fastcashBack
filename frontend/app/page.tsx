import JoinFrom from "@/src/components/pages/Home/JoinFrom";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <main>
      <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
        <nav className="container py-4 flex items-center justify-between">
          <Link href="/" className="font-semibold text-2xl text-[#245843]">
            Fast<span>cashBack</span>
          </Link>
          <Link href="/join" className="font-semibold text-[#245843]">
            Join
          </Link>
        </nav>
      </header>

      {/* hero section */}
      <section className="bg-[#1e9c6d] w-full py-16 md:p-0">
        <div className="flex items-center justify-center md:justify-between flex-col md:flex-row md:gap-3 container ">
          {/* left side */}
          <div className="relative space-y-1 md:space-y-8 lg:w-1/2">
            <h1 className=" font-extrabold  text-2xl lg:text-3xl xl:text-5xl text-gray-50 mt-10 md:mt-20 w-[95%]">
              Cashback Rewards with Every Online Shop!
            </h1>
            <p className="text-gray-50 text-xs sm:text-sm md:text-lg my-10">
              Join for free, shop your favorite brands, and start earning up to
              $450 a year in returns.
            </p>

            <Image
              src="/bird-hero.png"
              width={350}
              height={350}
              alt=""
              className="mt-10 object-contain object-center "
            />
          </div>
          {/* right side */}
          <div className="flex justify-end item-start lg:w-1/2">
            <JoinFrom />
          </div>
        </div>
      </section>

      {/* guid section */}
      <section className="container py-20 grid place-items-center">
        <h2 className="text-lg text-center md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-700">
          Cash back is quick, rewarding, and flexible
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-2 py-2 lg:w-9/12">
          {/* image Card */}

          <div className="flex items-center justify-center px-2 text-center flex-col lg:w-fit ">
            <Image
              src="/home_card_1.png"
              width={250}
              height={250}
              alt=""
              className="mt-10 object-cover object-center rounded-full "
            />
            <div>
              <h3 className="text-lg font-semibold">Quick and easy</h3>
              <p className="px-3">So you can get on with your shopping.</p>
            </div>
          </div>

          <div className="flex items-center justify-center px-2 text-center flex-col lg:w-fit ">
            <Image
              src="/home_card_2.png"
              width={250}
              height={250}
              alt=""
              className="mt-10 object-cover object-center rounded-full "
            />
            <div>
              <h3 className="text-lg font-semibold">It all adds up</h3>
              <p className="px-3">
                Members earn on average $450 cash back a year.
              </p>{" "}
            </div>
          </div>

          <div className="flex items-center justify-center px-2 text-center flex-col lg:w-fit ">
            <Image
              src="/home_card_3.png"
              width={250}
              height={250}
              alt=""
              className="mt-10 object-cover object-center rounded-full "
            />
            <div>
              <h3 className="text-lg font-semibold">Pay out how you want</h3>
              <p className="px-3">
                Get your money directly to your bank account, PayPal, or Gift
                Cards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-gray-100  min-h-[400px]">
        <div className="container py-16">
          <h2 className="text-lg text-center md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-600">
            Frequently Asked Questions
          </h2>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-4  mt-10">
            {faq.map(({ id, question, answer }: any) => {
              return (
                <Accordion className="" type="single" collapsible key={id}>
                  <AccordionItem
                    className="bg-white rounded-sm"
                    value={`item-${id}`}
                  >
                    <AccordionTrigger className="p-3">
                      {question}
                    </AccordionTrigger>

                    <AccordionContent className="p-3">
                      {answer}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              );
            })}
          </div>
        </div>
      </section>

      {/* top US brands */}
      <section>
        <div className="container py-16">
          <h2 className="text-lg text-center md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-600">
            Huge savings on 1000s of top US brands
          </h2>

          {/* Store by Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center mt-10 xl:w-9/12 mx-auto">
            {topBrands.map(({ category, stores }) => (
              <div
                className="text-gray-600 py-2 sm:py-5 flex items-start justify-center flex-col w-full"
                key={category}
              >
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold py-2">
                  {category}
                </h3>
                <div className="flex flex-col items-start gap-2 sm:gap-3 flex-wrap">
                  {stores.map(({ id, name, slug }) => (
                    <Link
                      href={slug}
                      key={id}
                      className="text-gray-500 hover:text-gray-700 underline text-sm sm:text-base"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link
              className="text-center col-span-full mt-8 underline text-base sm:text-lg text-gray-600 hover:text-gray-800"
              href="/offer"
            >
              Browse our top offers
            </Link>
          </div>
        </div>
      </section>

      {/* Discover Green Cash Back */}
      <section className="bg-[#e9eaeb]">
        <div className="container py-16">
          <h2 className="text-center text-2xl font-bold text-gray-600">
            Discover Green Cash Back
          </h2>

          <p className="md:w-9/12 mx-auto text-center text-xs text-gray-500 sm:text-base  py-5">
            We&apos;ve made it easy for you to find brands that support ethical
            and sustainable choices. From sustainable production and ethical
            sourcing, to protecting the world that supports us.
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
  );
}

const faq = [
  {
    id: 1,
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 2,
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 3,
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 4,
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 5,
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 6,
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
];

const topBrands = [
  {
    category: "Clothing",
    stores: [
      {
        id: 1,
        name: "Nike",
        logo: "/nike.png",
        slug: "/nike",
      },
      {
        id: 2,
        name: "Adidas",
        logo: "/adidas.png",
        slug: "/adidas",
      },

      {
        id: 3,
        name: "Old Navy",
        logo: "/old_navy.png",
        slug: "/old-navy",
      },
      {
        id: 4,
        name: "H&M",
        logo: "/h&m.png",
        slug: "/hm",
      },
      {
        id: 5,
        name: "American Eagle",
        logo: "/american_eagle.png",
        slug: "/american-eagle",
      },
    ],
  },
  {
    category: "Electronics",
    stores: [
      {
        id: 1,
        name: "Best Buy",
        logo: "/best_buy.png",
        slug: "/best-buy",
      },
      {
        id: 2,
        name: "Apple",
        logo: "/apple.png",
        slug: "/apple",
      },

      {
        id: 3,
        name: "Samsung",
        logo: "/samsung.png",
        slug: "/samsung",
      },
      {
        id: 4,
        name: "Lenovo",
        logo: "/lenovo.png",
        slug: "/lenovo",
      },
      {
        id: 5,
        name: "Dell",
        logo: "/dell.png",
        slug: "/dell",
      },
    ],
  },
  {
    category: "Food",
    stores: [
      {
        id: 1,
        name: "McDonald's",
        logo: "/mcdonalds.png",
        slug: "/mcdonalds",
      },
      {
        id: 2,
        name: "Starbucks",
        logo: "/starbucks.png",
        slug: "/starbucks",
      },

      {
        id: 3,
        name: "Subway",
        logo: "/subway.png",
        slug: "/subway",
      },
      {
        id: 4,
        name: "Pizza Hut",
        logo: "/pizza_hut.png",
        slug: "/pizza-hut",
      },
      {
        id: 5,
        name: "Taco Bell",
        logo: "/taco_bell.png",
        slug: "/taco-bell",
      },
    ],
  },
  {
    category: "Travel",
    stores: [
      {
        id: 1,
        name: "Expedia",
        logo: "/expedia.png",
        slug: "/expedia",
      },
      {
        id: 2,
        name: "Booking.com",
        logo: "/booking.png",
        slug: "/booking",
      },

      {
        id: 3,
        name: "Hotels.com",
        logo: "/hotels.png",
        slug: "/hotels",
      },
      {
        id: 4,
        name: "Trip.com",
        logo: "/trip.png",
        slug: "/trip",
      },
      {
        id: 5,
        name: "Airbnb",
        logo: "/airbnb.png",
        slug: "/airbnb",
      },
    ],
  },
  {
    category: "Beauty",
    stores: [
      {
        id: 1,
        name: "Sephora",
        logo: "/sephora.png",
        slug: "/sephora",
      },
      {
        id: 2,
        name: "Ulta",
        logo: "/ulta.png",
        slug: "/ulta",
      },

      {
        id: 3,
        name: "MAC",
        logo: "/mac.png",
        slug: "/mac",
      },
      {
        id: 4,
        name: "L'Oreal",
        logo: "/loreal.png",
        slug: "/loreal",
      },
      {
        id: 5,
        name: "Estee Lauder",
        logo: "/estee_lauder.png",
        slug: "/estee-lauder",
      },
    ],
  },
  {
    category: "Home",
    stores: [
      {
        id: 1,
        name: "Wayfair",
        logo: "/wayfair.png",
        slug: "/wayfair",
      },
      {
        id: 2,
        name: "Home Depot",
        logo: "/home_depot.png",
        slug: "/home-depot",
      },

      {
        id: 3,
        name: "Lowe's",
        logo: "/lowes.png",
        slug: "/lowes",
      },
      {
        id: 4,
        name: "Ikea",
        logo: "/ikea.png",
        slug: "/ikea",
      },
      {
        id: 5,
        name: "Target",
        logo: "/target.png",
        slug: "/target",
      },
    ],
  },
  {
    category: "Food & Drink",
    stores: [
      {
        id: 1,
        name: "McDonald's",
        logo: "/mcdonalds.png",
        slug: "/mcdonalds",
      },
      {
        id: 2,
        name: "Starbucks",
        logo: "/starbucks.png",
        slug: "/starbucks",
      },

      {
        id: 3,
        name: "Subway",
        logo: "/subway.png",
        slug: "/subway",
      },
      {
        id: 4,
        name: "Pizza Hut",
        logo: "/pizza_hut.png",
        slug: "/pizza-hut",
      },
      {
        id: 5,
        name: "Taco Bell",
        logo: "/taco_bell.png",
        slug: "/taco-bell",
      },
    ],
  },
  {
    category: "Health & Beauty",
    stores: [
      {
        id: 1,
        name: "Sephora",
        logo: "/sephora.png",
        slug: "/sephora",
      },
      {
        id: 2,
        name: "Ulta",
        logo: "/ulta.png",
        slug: "/ulta",
      },

      {
        id: 3,
        name: "MAC",
        logo: "/mac.png",
        slug: "/mac",
      },
      {
        id: 4,
        name: "L'Oreal",
        logo: "/loreal.png",
        slug: "/loreal",
      },
      {
        id: 5,
        name: "Estee Lauder",
        logo: "/estee_lauder.png",
        slug: "/estee-lauder",
      },
    ],
  },
];
