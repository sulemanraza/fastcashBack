"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuIcon, User } from "lucide-react";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mb-[108px] lg:mb-0">
      <div className="fixed top-0 z-50  bg-white container xl:w-9/12 py-4 flex items-center flex-col lg:flex-row justify-between lg:relative">
        <div className="w-full flex items-center justify-between">
          <Link
            href="/"
            className="font-semibold text-base sm:text-xl md:text-2xl text-[#245843]"
          >
            Fast<span>cashBack</span>
          </Link>

          <div className="lg:hidden flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <User className="w-5 h-5 sm:w-6 sm:h-6" />
              <span> Join / Login</span>
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-500 text-xs"
            >
              {menuOpen ? <MenuIcon /> : <MenuIcon />}
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

      <div className="hidden bg-[#418868] lg:h-[45px] lg:flex items-center">
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
      <div
        className={`fixed w-screen h-screen  left-0 lg:hidden bg-[#418868] z-40 transition-all duration-300 ease-in-out ${
          menuOpen ? "top-0" : "top-[-100%]"
        }  
         
        `}
      ></div>
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
        name: "Home 1",
        href: "/",
      },
      {
        name: "Home 2",
        href: "/",
      },
      {
        name: "Home 3",
        href: "/",
      },
      {
        name: "Home 4",
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
    title: "mobile app",
    submenus: null,
    slug: "/",
  },
];
