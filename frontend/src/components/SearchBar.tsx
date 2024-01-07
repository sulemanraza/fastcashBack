"use client";
import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { useEffect, useState } from "react";
import Link from "next/link";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any>([]);

  useEffect(() => {
    if (search.length > 2) {
      const searchResults = topBrands
        .map((category: any) =>
          category.stores.map((store: any) => ({
            name: store.name,
            slug: store.slug,
            category: category.category,
          }))
        )
        .flat()
        .filter((result: any) =>
          result.name.toLowerCase().includes(search.toLowerCase())
        );

      setResults(searchResults);
    }
  }, [search]);

  return (
    <div className="w-full relative">
      <div className="flex items-center justify-between border-2 lg:min-h-14 rounded-sm border-green-800 bg-gray-100">
        <input
          className="w-full h-full border-0 outline-none px-3 bg-transparent"
          placeholder="Search Retailer | e.g. adidas"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="submit" className="bg-transparent hover:bg-gary-300">
          <Search className="text-gray-600" />
        </Button>
      </div>
      {results.length > 0 && search.length > 0 && (
        <Card className="absolute top-16 left-0 w-full  h-auto max-h-64 overflow-y-auto z-50 rounded-sm shadow-sm">
          <h4 className="text-gray-500 font-semibold capitalize p-5 pb-2">
            Suggested Search
          </h4>
          {/* results */}
          <div>
            {results.map((brand: any) => (
              <Link
                href={brand.slug}
                key={brand.slug}
                className="flex items-center justify-between w-full py-2 hover:bg-gray-100  px-5"
              >
                <span className="text-gray-600 font-semibold capitalize">
                  {brand.name}
                </span>
              </Link>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
};

export default SearchBar;

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
