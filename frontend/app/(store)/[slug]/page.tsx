import { Card } from "@/src/components/ui/card";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import Header from "@/src/components/Header";

const Brand = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="bg-[#e9eaeb]  space-y-5">
        <div className="container xl:w-9/12 p-3 lg:p-10 flex flex-col lg:flex-row gap-5">
          {/* content */}
          <div className="lg:w-9/12 space-y-4">
            <Card className=" bg-white  rounded-sm">
              <h1 className="p-5 text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700">
                <span className="capitalize">{params.slug}</span> Cash Back
                Offers & Discounts
              </h1>

              {/* logo */}
              <div className="bg-[url('/brand-bg.png')] bg-cover bg-center h-[200px] w-full flex justify-center sm:justify-start items-center p-5">
                <div className=" bg-white h-[120px] w-[250px]  shadow-sm grid  place-items-center">
                  <Image
                    src="/expedia.png"
                    layout="responsive"
                    objectFit="cover"
                    alt=""
                    width={150}
                    height={150}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/*   Offers */}
              <div className="mt-5">
                <div className="text-gray-600 flex items-center justify-between p-3 px-5 bg-gray-100">
                  <h3>Expedia.com Offers</h3>
                  <span> Cash Back</span>
                </div>

                {offers.map((offer) => {
                  return (
                    <div
                      key={offer.id}
                      className="flex items-center justify-between p-4 px-5 border-b  last:border-b-0"
                    >
                      <h3 className="font-semibold text-base sm:text-lg text-gray-600">
                        {offer.title}
                      </h3>
                      <strong className="font-bold text-base sm:text-lg text-gray-700">
                        {offer.cashback}
                      </strong>
                    </div>
                  );
                })}
              </div>
            </Card>
            {/* Special Deals & Coupons */}
            <div className="space-y-3 mt-3">
              <h2 className="font-semibold text-lg lg:text-2xl text-gray-600">
                Special Deals & Coupons
              </h2>

              <div className="flex flex-col items-center sm:flex-row gap-3 p-5 bg-white hover:bg-gray-50 shadow-sm">
                <div className="bg-white border-2 h-[120px] w-[120px] grid place-items-center">
                  <Image
                    src="/expedia.png"
                    layout="responsive"
                    objectFit="cover"
                    alt=""
                    width={150}
                    height={150}
                    className="w-full h-auto"
                  />
                </div>

                <div className=" space-y-3">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-600">
                    The latest flight + hotel packages under $499 to help you
                    get away.
                  </h3>
                  <h4 className="font-semibold text-base sm:text-lg text-gray-600">
                    Up to 6% Cash Back
                  </h4>
                </div>
              </div>
            </div>

            {/* About */}
            <Card className=" rounded-sm">
              <div className="text-gray-600 flex items-center justify-between p-3 px-5 bg-gray-50 border-[1px]">
                <h3 className="font-semibold text-base sm:text-lg">
                  Expedia - The Best Travel Deals
                </h3>
              </div>

              <div className="about p-5 text-[93.8%] text-[#6d6d6d] space-y-5">
                <p>
                  Visit Expedia.com to book flights, hotels, car rentals,
                  cruises, vacation packages and vacation rentals for far less
                  money than other online travel sites. You&apos;ll find your
                  next beach getaway with Expedia&apos;s helpful search tool.
                  Just type in your holiday destination, the dates you&apos;re
                  planning on being away and Expedia will pull up the best
                  ticket prices.
                </p>
                <p>
                  You can snag a hotel price guarantee and discounts at Expedia
                  by signing up for its One Key Rewards program. You can also
                  nab last-minute deals on select hotels, packages and economy
                  or premium economy flights. Plus, if you&apos;re looking for
                  savings when you book a trip on the go, the Expedia mobile app
                  can fulfill all your travel needs in one seamless experience.
                </p>
                <p>
                  Add savings on top of savings with our Expedia coupons and
                  cash back deals--only if you have an account with us. Join
                  TopCashback for free today through the brief form at the top
                  of this page. You&apos;ll enjoy getting money back with every
                  qualifying purchase you make online!
                </p>
              </div>

              <h3 className="font-semibold text-base sm:text-lg text-[#6d6d6d]  p-5 ">
                Expedia Features
              </h3>

              <div className="px-5">
                {faq.map(({ id, question, answer }: any) => {
                  return (
                    <Accordion
                      className="text-[#6d6d6d]"
                      type="single"
                      collapsible
                      key={id}
                    >
                      <AccordionItem
                        className="bg-white rounded-none"
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
            </Card>

            {/* Terms & Conditions */}
            <Card className=" rounded-sm ">
              <div className="text-gray-600 flex items-center justify-between p-3 px-5 bg-gray-50">
                <h3 className="font-semibold text-base sm:text-lg">
                  Terms & Conditions
                </h3>
              </div>
              <div className="px-5">
                {faq.map(({ id, question, answer }: any) => {
                  return (
                    <Accordion
                      className="text-[#6d6d6d]"
                      type="single"
                      collapsible
                      key={id}
                    >
                      <AccordionItem
                        className="bg-white rounded-none"
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
              <p className="px-5 p-3 text-[#6d6d6d] text-[14px]">
                Please note the terms & conditions above are in addition to our
                general{" "}
                <Link href="#" className="underline">
                  terms & conditions
                </Link>
              </p>
            </Card>
          </div>
          {/* sidebar */}
          <div className="lg:w-1/4 space-y-5 h-auto">
            <Card className="rounded-sm">
              <div className="text-gray-600 flex items-center justify-between p-2 px-3">
                <h3 className="font-semibold text-base sm:text-lg">
                  Navigation
                </h3>
              </div>

              <div>
                <Link
                  href="#"
                  className="text-[#6d6d6d] text-[14px]  flex border-b-[1px] border-b-gray-300 items-center justify-between px-4 bg-gray-100 py-3 border-l-[3px] border-l-green-500 hover:bg-gray-200"
                >
                  <span>Cash Back</span>
                  <FaAngleRight />
                </Link>
                <Link
                  href="#"
                  className=" text-[#6d6d6d] text-[14px] flex border-b-[1px] border-b-gray-300 items-center justify-between px-4  py-3 hover:bg-gray-200"
                >
                  <span>Reviews</span>
                  <FaAngleRight />
                </Link>

                <div className="text-[#6d6d6d]  flex flex-col px-3 py-3">
                  <strong>See also:</strong>
                  <Link
                    href="#"
                    className="text-[#6d6d6d] text-[14px] hover:underline-offset-2 hover:underline hover:decoration-dotted"
                  >
                    Expedia Canada
                  </Link>
                </div>
              </div>
            </Card>

            {/* about */}
            <Card className="rounded-sm">
              <div className="text-gray-600 flex border-b-[1px] items-center justify-between p-2 px-3">
                <h3 className="font-semibold text-base sm:text-lg">
                  About Expedia.com
                </h3>
              </div>

              <div className="px-5 p-3 text-[#6d6d6d] text-[14px] space-y-3">
                <p>
                  Book with confidence, with free cancellation on select hotels.
                </p>
                <p>
                  Expedia provides customers with an award-winning site
                  experience and superior inventory, allowing them to find the
                  right trip at the right price. It negotiates directly with
                  hotel suppliers to secure access to exclusive rates and
                  superior inventory at over 70,000 properties world-wide. One
                  Key takes your favorite parts of the Expedia Rewards program
                  and adds new benefits to help you save more and travel better.
                  One Key will offer a faster path to tier status, as well as
                  new opportunities to earn and use rewards on Expedia,
                  Hotels.com, and Vrbo. You will earn OneKeyCash for all
                  eligible travel in a booking, where the eligible travel is
                  completed on or after the date you become a One Key member,
                  including any eligible travel beforehand.
                </p>
              </div>
            </Card>

            {/* faq */}
            {/* Terms & Conditions */}
            <Card className=" rounded-sm ">
              <div className="text-gray-600 flex items-center justify-between p-3 px-5 border-b-[1px]">
                <h3 className="font-semibold text-base sm:text-lg">Faq</h3>
              </div>
              <div className="text-left">
                {siteFaq.map(({ id, question, answer }: any) => {
                  return (
                    <Accordion
                      className="text-[#6d6d6d] text-left"
                      type="single"
                      collapsible
                      key={id}
                    >
                      <AccordionItem
                        className="bg-white rounded-none"
                        value={`item-${id}`}
                      >
                        <AccordionTrigger className="p-2 text-sm">
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
            </Card>
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
      </div>
    </div>
  );
};

export default Brand;

const offers = [
  {
    id: 1,
    title: "Hotel & Vacation Rental Bookings",
    cashback: "6%",
  },
  {
    id: 2,
    title: "Cruise",
    cashback: "6%",
  },
  {
    id: 3,
    title: "Activities",
    cashback: "5%",
  },
  {
    id: 4,
    title: "Package Bookings",
    cashback: "4%",
  },
  {
    id: 5,
    title: "Bundle and Save Packages",
    cashback: "4%",
  },
  {
    id: 6,
    title: "Rental Car",
    cashback: "2%",
  },
];

const faq = [
  {
    id: 1,
    question: "Coupons",
    answer:
      "When you're not using our special offer codes, you can check the 'Expedia Coupon Codes' page on their website for online deals. It features instructions on how to redeem a coupon, too, both on the app and desktop.",
  },
  {
    id: 2,
    question: "Sale",
    answer:
      "In March 2022, The Palms Hotel & Spa in Miami was a whopping 67% off for any traveler booking a stay there between May 15-May 19. On the opposite coast, the Hotel Shangri La Santa Monica in Los Angeles was an irresistible 30% off for a limited time. So, expect similar Expedia sales like these in the near future. You should keep an eye out for holiday sales as well. Expedia Black Friday events are always shop-worthy.",
  },
  {
    id: 3,
    question: "Expedia Rewards",
    answer:
      "Earning OneKeyCash is easy. Members can accrue rewards from their travel purchases. For every $500 they spend on their bookings, they’ll unlock $11 in OneKeyCash. If members apply for a One Key Rewards credit card—which can be used on everyday purchases—they can collect rewards faster.",
  },
  {
    id: 4,
    question: "Expedia Mobile App",
    answer:
      "Browse a wide selection of reviews and survey flight options. Visiting a place without WiFi? No problem! The Expedia app will keep all of your important travel information secure and easily accessible in offline mode.",
  },
  {
    id: 5,
    question: "Support",
    answer:
      "Need fast online help with booking cheap flights? That's what Expedia’s customer support team is for. You can contact a virtual travel agent to ask about a refund, coupon code, cancellation or change in plans, no matter the time of day. This service is available to you 24/7.",
  },
];

const siteFaq = [
  {
    id: 1,
    question: "How does TopCashback work?",
    answer:
      "When you shop through TopCashback, we earn a commission and share it with you. It's our way of saying thank you for being a loyal member.",
  },
  {
    id: 2,
    question: "How do I get cash back?",
    answer:
      "Join TopCashback and sign up for a FREE account. Once you've selected your favorite retailer, click through to their site and shop as usual.",
  },
  {
    id: 3,
    question: "How do I withdraw my cash?",
    answer:
      "Once you've earned cash back, you can withdraw it from your TopCashback account. Choose from a bank transfer, PayPal payment, or gift card.",
  },
  {
    id: 4,
    question: "What else is TopCashback known for?",
    answer:
      "TopCashback is the most generous free cashback and voucher website. Save money on purchases through thousands of merchants online and in-store.",
  },
];
