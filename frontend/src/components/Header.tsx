"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { MenuIcon, User, XIcon } from "lucide-react";
import SearchBar from "./SearchBar";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mb-[108px]   bg-white lg:mb-0">
      <div className="fixed top-0 z-50  bg-white container xl:w-9/12 py-4 flex items-center flex-col lg:flex-row justify-between lg:relative">
        <div className="w-full flex items-center justify-between">
          <Link
            href="/"
            className="font-semibold text-base sm:text-xl md:text-2xl text-brand"
          >
            Fast<span>cashBack</span>
          </Link>

          <div className="lg:hidden flex items-center gap-2">
            <Link href="/join" className="flex items-center">
              <User className="w-5 h-5 sm:w-6 sm:h-6" />
              <span> Join / Login</span>
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-brand text-xs"
            >
              {!menuOpen ? <MenuIcon /> : <XIcon />}
            </button>
          </div>
        </div>
        {/* search and topBar */}
        <div className="w-full xl:w-2/3 space-y-2">
          {/* topBar */}
          <div className="hidden lg:flex items-center justify-between">
            <NavigationMenu className="bg-transparent capitalize">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className=" bg-transparent hover:bg-transparent">
                    Latest Offers
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-5 min-w-fit flex-col flex relative">
                    <ul className="grid w-[200px] self-end gap-3 p-2">
                      {[
                        {
                          name: "Trending ",
                          href: "/trending ",
                          external: false,
                        },
                        {
                          name: "Offers ",
                          href: "/offers ",
                          external: false,
                        },
                      ].map(({ name, href, external }, index) => {
                        return (
                          <Link
                            key={index}
                            href={href}
                            legacyBehavior
                            passHref
                            target={external ? "_blank" : "_self"}
                          >
                            <NavigationMenuLink
                              className={"bg-transparent hover:bg-transparent"}
                            >
                              {name}
                            </NavigationMenuLink>
                          </Link>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu className="bg-transparent capitalize">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className=" bg-transparent hover:bg-transparent flex items-center gap-1">
                    <User />
                    <span> Join / Login</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-5 min-w-fit flex-col flex relative">
                    <ul className="grid w-[200px] self-end gap-3 p-2">
                      {[
                        {
                          name: "Members login",
                          href: "/login",
                          external: false,
                        },
                        {
                          name: "Create an account",
                          href: "/join",
                          external: false,
                        },
                      ].map(({ name, href, external }, index) => {
                        return (
                          <Link
                            key={index}
                            href={href}
                            legacyBehavior
                            passHref
                            target={external ? "_blank" : "_self"}
                          >
                            <NavigationMenuLink
                              className={"bg-transparent hover:bg-transparent"}
                            >
                              {name}
                            </NavigationMenuLink>
                          </Link>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          {/* search */}
          <div>
            <SearchBar />
          </div>
        </div>
      </div>

      <div className="hidden bg-brand lg:h-[45px] lg:flex items-center">
        <div className="hidden container xl:w-9/12 py-2 lg:flex lg:flex-row items-center justify-between gap-5 list-none">
          <div className="flex items-center  lg:flex-row gap-5 list-none">
            {menus.map(({ title, slug, submenus }, index) => {
              return (
                <div key={index}>
                  {submenus ? (
                    <NavigationMenu className="bg-transparent capitalize">
                      <NavigationMenuList>
                        <NavigationMenuItem>
                          <NavigationMenuTrigger className="text-gray-50   bg-transparent hover:bg-transparent">
                            {title}
                          </NavigationMenuTrigger>
                          <NavigationMenuContent className="p-5 min-w-fit flex-col flex">
                            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                              {submenus.map(({ name, href }, index) => {
                                return (
                                  <Link
                                    key={index}
                                    href="/docs"
                                    legacyBehavior
                                    passHref
                                  >
                                    <NavigationMenuLink
                                      className={
                                        "bg-transparent hover:bg-transparent"
                                      }
                                    >
                                      {name}
                                    </NavigationMenuLink>
                                  </Link>
                                );
                              })}
                            </ul>
                          </NavigationMenuContent>
                        </NavigationMenuItem>
                      </NavigationMenuList>
                    </NavigationMenu>
                  ) : (
                    <NavigationMenu className="flex items-center gap-4 bg-transparent capitalize">
                      <NavigationMenuItem className="bg-transparent text-gray-50 ">
                        <Link href="/docs" legacyBehavior passHref>
                          <NavigationMenuLink
                            className={"bg-transparent hover:bg-transparent"}
                          >
                            {title}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    </NavigationMenu>
                  )}
                </div>
              );
            })}
          </div>
          <div>
            <NavigationMenu className="bg-transparent capitalize">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-50   bg-transparent hover:bg-transparent">
                    More
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="p-5 min-w-fit flex-col flex relative">
                    <ul className="grid w-[200px] self-end gap-3 p-4">
                      {[
                        { name: "Blog", href: "/blog", external: false },
                        {
                          name: "Browser Extension",
                          href: "https://chromewebstore.google.com/category/extensions",
                          external: true,
                        },
                      ].map(({ name, href, external }, index) => {
                        return (
                          <Link
                            key={index}
                            href={href}
                            legacyBehavior
                            passHref
                            target={external ? "_blank" : "_self"}
                          >
                            <NavigationMenuLink
                              className={"bg-transparent hover:bg-transparent"}
                            >
                              {name}
                            </NavigationMenuLink>
                          </Link>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <div
        className={`fixed w-screen min-h-screen h-full  overflow-y-auto left-0 lg:hidden  bg-[#f9f9f9]  z-40 transition-all duration-300 ease-in-out ${
          menuOpen ? "top-0" : "top-[-100%]"
        }  
         
        `}
      >
        <div className="mt-[108px] text-gray-500  py-5">
          {/* menu */}
          {[...onlyMobileMenus, ...menus].map(
            ({ title, slug, submenus }, index) => {
              return (
                <div key={index} className="py-2 ">
                  {submenus ? (
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full capitalize bg-transparent hover:bg-transparent"
                    >
                      <AccordionItem value="item-1" className="py-2  px-5">
                        <AccordionTrigger
                          className="py-0 font-normal"
                          style={{
                            textDecoration: "none",
                          }}
                        >
                          {title}
                        </AccordionTrigger>
                        <AccordionContent className="flex flex-col gap-3 mt-3 pb-0">
                          {submenus.map(({ name, href }, index) => {
                            return (
                              <div key={index} className="px-2">
                                <Link
                                  href={href}
                                  legacyBehavior
                                  passHref
                                  className={
                                    "bg-transparent hover:bg-transparent block w-full"
                                  }
                                >
                                  {name}
                                </Link>
                              </div>
                            );
                          })}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  ) : (
                    <div className=" border-b p-2  px-5 capitalize">
                      <Link
                        href="/docs"
                        legacyBehavior
                        passHref
                        className={
                          "bg-transparent hover:bg-transparent block w-full "
                        }
                      >
                        {title}
                      </Link>
                    </div>
                  )}
                </div>
              );
            }
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

const menus = [
  {
    title: "Categories",
    slug: "/",
    submenus: [
      {
        name: "Travel",
        href: "/",
      },
      {
        name: "Fashion",
        href: "/",
      },
      {
        name: "Electronics",
        href: "/",
      },
    ],
  },

  {
    title: "Gift Cards",
    submenus: null,
    slug: "/",
  },
  {
    title: "Highest Cash Back Guarantee",
    submenus: null,
    slug: "/",
  },
  {
    title: "Refer & Earn $10",
    submenus: null,
    slug: "/",
  },
  {
    title: "Mobile app",
    submenus: null,
    slug: "/",
  },
];

const onlyMobileMenus = [
  {
    title: "Latest Offers",
    slug: "/",
    submenus: [
      {
        name: "Trending",
        href: "/trending",
      },
      {
        name: "Offers",
        href: "/offers",
      },
    ],
  },
];
