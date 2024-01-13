import Footer from "@/src/components/Footer";
import Header from "@/src/components/Header";
import {
  AccordionContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { Button } from "@/src/components/ui/button";
import { footerLinks } from "@/src/data";

import Image from "next/image";
import Link from "next/link";

const BrowserExtension = () => {
  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <div className="bg-[#489571] w-full py-8 border-t-2 flex flex-col items-center justify-center">
          <section className="container xl:w-9/12  grid lg:grid-cols-2 place-items-center gap-3">
            <div className="order-2 lg:order-1 space-y-8">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl lg:leading-[3.5rem] font-semibold text-white">
                Apply cash back savings as you shop with just one click
              </h1>
              <p className="text-white text-base">
                Install the free FastCashBack Browser Extension and make saving
                money even easier. Access deals, coupon codes and cash back at
                over 7,000 stores all in one click.
              </p>
              <Button className="bg-[#ed1c5c] hover:bg-[#ed1c5c] hidden lg:block  rounded-full hover:scale-105 w-1/3 py-2">
                Install Extension
              </Button>
              <Button
                disabled
                className="w-full lg:hidden rounded-full hover:scale-105"
              >
                Only available on desktop
              </Button>
              <div className="space-y-2">
                <div className="flex items-center text-xs text-gray-200 gap-1">
                  <span>Browser Extension </span>
                  <Link href="#">Privacy Policy</Link>
                </div>
                <div className="flex items-center text-xs text-gray-200 gap-1">
                  <span>Browser Extension </span>
                  <Link href="#">terms & conditions</Link>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 ">
              <Image
                src="/monitor-only.png"
                width={500}
                height={500}
                layout="responsive"
                alt=""
                objectFit="contain"
                className="object-contain min-w-full h-full "
              />
            </div>
          </section>
        </div>
        <section className="container xl:w-9/12 py-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl xl:text-4xl lg:leading-[3.5rem] font-semibold  text-center">
            How it works
          </h2>

          <div className="flex items-center flex-col lg:flex-row gap-8 place-items-center text-center mt-10  lg:mt-20">
            {cardItems.map((item) => {
              return (
                <div
                  key={item.id}
                  className="space-y-3 w-full md:w-1/2  lg:w-1/3"
                >
                  <Image
                    src={item.image}
                    width={200}
                    height={200}
                    layout="responsive"
                    alt=""
                    objectFit="contain"
                  />

                  <h3 className="font-semibold text-gray-700">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="bg-gray-100  min-h-[400px]">
          <div className="container xl:w-9/12 py-16">
            <h2 className="text-lg text-center md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-gray-500">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-gray-500 mt-10">
              {faq.map(({ id, question, answer }: any) => {
                return (
                  <Accordion
                    className="w-full"
                    type="single"
                    collapsible
                    key={id}
                  >
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

              <div className=" text-center col-span-2 mt-5 underline text-base">
                <Link href="#">Browser Extension FAQs</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container xl:w-9/12 py-16 ">
          <h2 className="text-gray-800 text-2xl lg:text-3xl xl:text-4xl lg:leading-[3.5rem] font-semibold  text-center">
            Save at over 7,000 stores now
          </h2>

          <div className=" grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center text-center mt-10  lg:mt-20">
            {stores.map((item) => {
              return (
                <div key={item.id} className="w-full">
                  <Image
                    src={item.logo}
                    width={200}
                    height={200}
                    layout="responsive"
                    alt=""
                    className="object-contain w-full h-full"
                  />
                </div>
              );
            })}
            <Button className="bg-[#ed1c5c] col-span-4 mt-20  hover:bg-[#ed1c5c] hidden lg:block  rounded-full hover:scale-105 w-1/4 py-2">
              Install Extension
            </Button>
          </div>
        </section>
      </main>

      <Footer links={footerLinks} />
    </>
  );
};

export default BrowserExtension;

const cardItems = [
  {
    id: 1,
    title: "Install in seconds",
    description:
      "One simple click makes shopping even easier. Plus it’s 100% free.",
    image: "/howitworks-1.png",
  },
  {
    id: 2,
    title: "Never miss out on deals",
    description:
      "Our Browser Extension will notify you when you can earn cash back.",
    image: "/howitworks-2.png",
  },
  {
    id: 3,
    title: "Shop at your favorite stores",
    description: "Search and activate deals and coupons at anytime.",
    image: "/howitworks-3.png",
  },
];

const faq = [
  {
    id: 1,
    question: "Do I still need to visit www.fastcashback.com to shop?",
    answer:
      "Nope! As long as the Browser Extension is installed, you can shop your favorite stores directly through their sites. Be sure to activate the cash back by clicking the ' Activate Now' button that may pop up.",
  },
  {
    id: 2,
    question: "Are all FastCashBack retailers featured?",
    answer:
      "Unfortunately not. There are a handful of retailers who do not work with browser extensions, however we are working hard to have them listed.",
  },
  {
    id: 3,
    question: "Is the Browser Extension free to download and use?",
    answer: "Yes, it’s totally free to download and totally free to use.",
  },
  {
    id: 4,
    question: "Do I need to be signed in to use the Browser Extension?",
    answer:
      "Yes, but if you’re not logged in at first don’t worry. You’ll still see the “Activate Now” button, where you’ll be brought to the FastCashBack sign-in page to securely log-in and start earning cash back.",
  },
];

const stores = [
  {
    id: 1,
    logo: "/macys_l1.png",
    name: "Macy's",
  },
  {
    id: 2,
    logo: "/hopedepot_lg.png",
    name: "Home Depot",
  },
  {
    id: 3,
    logo: "/walmart-logo-new-198-75.png",
    name: "Walmart",
  },
  {
    id: 4,
    logo: "/ebay_l.png",
    name: "eBay",
  },
  {
    id: 5,
    logo: "/gnc_lg.png",
    name: "GNC",
  },
  {
    id: 6,
    logo: "/sephora_lg.png",
    name: "Sephora",
  },
  {
    id: 7,
    logo: "/booking_lg.png",
    name: "Booking.com",
  },
  {
    id: 8,
    logo: "/nike_lg.png",
    name: "Nike",
  },
];
