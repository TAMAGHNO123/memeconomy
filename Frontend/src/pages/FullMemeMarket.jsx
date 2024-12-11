import { useState, useMemo, useCallback,useEffect } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const initialMemePrices = [
  {
    id: 1,
    name: "Doge Coin Meme",
    currentPrice: 420.69,
    change24h: 15.3,
    volume: 1250000,
    marketCap: 8500000,
    trending: true,
    imageUrl: "https://www.researchgate.net/publication/359456368/figure/fig1/AS:11431281103138195@1669617009814/A-blank-doge-meme-template_Q320.jpg"
  },
  {
    id: 2,
    name: "Distracted Boyfriend",
    currentPrice: 89.45,
    change24h: -5.2,
    volume: 750000,
    marketCap: 3200000,
    trending: false,
    imageUrl: "https://media.wired.com/photos/59a459d3b345f64511c5e3d4/master/pass/MemeLoveTriangle_297886754.jpg"
  },
  {
    id: 3,
    name: "Stonks Meme",
    currentPrice: 256.78,
    change24h: 22.1,
    volume: 1750000,
    marketCap: 5600000,
    trending: true,
    imageUrl: "https://preview.redd.it/the-current-state-of-this-subreddit-due-to-u-cuppathecups-v0-mxiypgyf63yd1.jpeg?auto=webp&s=b2643964ac8217673d1d3f56fff80c40a872d421"
  },
  {
    id: 4,
    name: "Woman Yelling at Cat",
    currentPrice: 175.32,
    change24h: 8.7,
    volume: 980000,
    marketCap: 4100000,
    trending: true,
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1f/WomanYellingAtACat_meme.jpg"
  },
  {
    id: 5,
    name: "Mocking SpongeBob",
    currentPrice: 112.34,
    change24h: 12.5,
    volume: 890000,
    marketCap: 4700000,
    trending: false,
    imageUrl: "https://i.imgflip.com/7h09kn.jpg"
  },
  {
    id: 6,
    name: "Surprised Pikachu",
    currentPrice: 68.45,
    change24h: -3.2,
    volume: 650000,
    marketCap: 2900000,
    trending: true,
    imageUrl: "https://th.bing.com/th/id/OIP.-0VHCBFL2ZfEg2aWjR9LZgHaFR?rs=1&pid=ImgDetMain"
  },
  {
    id: 7,
    name: "Success Kid",
    currentPrice: 310.22,
    change24h: 10.8,
    volume: 1250000,
    marketCap: 6400000,
    trending: true,
    imageUrl: "https://th.bing.com/th/id/OIP.cimE40lDHMS55vOxs2OcLAHaE6?rs=1&pid=ImgDetMain"
  },
  {
    id: 8,
    name: "Two Buttons",
    currentPrice: 140.87,
    change24h: 6.3,
    volume: 780000,
    marketCap: 3500000,
    trending: false,
    imageUrl: "https://i.imgflip.com/41y342.jpg"
  },
  {
    id: 9,
    name: "Roll Safe",
    currentPrice: 95.11,
    change24h: 4.5,
    volume: 680000,
    marketCap: 3300000,
    trending: true,
    imageUrl: "https://th.bing.com/th/id/OIP.hxnXTGZFAT26JYjhDH9cnQHaGa?rs=1&pid=ImgDetMain"
  },
  {
    id: 10,
    name: "Confused Math Lady",
    currentPrice: 133.28,
    change24h: 9.1,
    volume: 830000,
    marketCap: 3700000,
    trending: false,
    imageUrl: "https://th.bing.com/th/id/OIP.MITeUdcQ2qFxTsuY-_iC2gHaE2?rs=1&pid=ImgDetMain"
  },
  {
    id: 11,
    name: "Drake Hotline Bling",
    currentPrice: 178.45,
    change24h: 7.2,
    volume: 900000,
    marketCap: 4100000,
    trending: true,
    imageUrl: "https://th.bing.com/th/id/OIP.QEvA1Aj1PLRQkq_OlXkduQHaEL?rs=1&pid=ImgDetMain"
  },
  {
    id: 12,
    name: "Grumpy Cat",
    currentPrice: 220.54,
    change24h: 5.7,
    volume: 1050000,
    marketCap: 4700000,
    trending: true,
    imageUrl: "https://th.bing.com/th/id/OIP.LaQyy7eXUNp07EJ1qwtUYwHaEK?rs=1&pid=ImgDetMain"
  }
];


function MemeMarket() {
  const [memePrices, setMemePrices] = useState(initialMemePrices);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoreMemes = useCallback(() => {
    if (isLoading) return;
    setIsLoading(true);

    // Simulate an API call to fetch more data
    setTimeout(() => {
      const newMemes = [
        {
          id: memePrices.length + 1,
          name: "New Meme",
          currentPrice: Math.random() * 500,
          change24h: Math.random() * 20 - 10,
          volume: Math.floor(Math.random() * 1000000),
          marketCap: Math.floor(Math.random() * 10000000),
          trending: Math.random() > 0.5,
          imageUrl: "http://alpha-meme-maker.herokuapp.com/add/",
        },
        // More new memes...
      ];
      setMemePrices((prev) => [...prev, ...newMemes]);
      setIsLoading(false);
    }, 1500);
  }, [isLoading, memePrices.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 10
      ) {
        fetchMoreMemes();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchMoreMemes]);

  const [sortConfig, setSortConfig] = useState(null);

  const sortedMemes = useMemo(() => {
    let sortableMemes = [...memePrices];
    if (sortConfig !== null) {
      sortableMemes.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableMemes;
  }, [memePrices, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="bg-blue-100 min-h-screen">
      {/* Meme Table */}
      <main className="container mx-auto p-4">
        <Table className="w-full border border-gray-200 shadow-lg bg-white">
          <TableCaption className="text-gray-600 font-medium">
            Current meme prices and market data
          </TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Image</TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => requestSort("name")}
              >
                Name{" "}
                {sortConfig?.key === "name" &&
                  (sortConfig.direction === "ascending" ? "▲" : "▼")}
              </TableHead>
              <TableHead
                className="cursor-pointer text-right"
                onClick={() => requestSort("currentPrice")}
              >
                Current Price{" "}
                {sortConfig?.key === "currentPrice" &&
                  (sortConfig.direction === "ascending" ? "▲" : "▼")}
              </TableHead>
              <TableHead
                className="cursor-pointer text-right"
                onClick={() => requestSort("change24h")}
              >
                24h Change{" "}
                {sortConfig?.key === "change24h" &&
                  (sortConfig.direction === "ascending" ? "▲" : "▼")}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedMemes.map((meme) => (
              <TableRow key={meme.id}>
                <TableCell>
                  <img
                    src={meme.imageUrl}
                    alt={meme.name}
                    className="w-16 h-16 rounded"
                  />
                </TableCell>
                <TableCell>{meme.name}</TableCell>
                <TableCell className="text-right">${meme.currentPrice.toFixed(2)}</TableCell>
                <TableCell
                  className={`text-right ${meme.change24h > 0 ? "text-green-600" : "text-red-600"
                    }`}
                >
                  {meme.change24h.toFixed(2)}%
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {isLoading && <p className="text-center py-4">Loading more memes...</p>}
      </main>
    </div>
  );
}

export default MemeMarket;
