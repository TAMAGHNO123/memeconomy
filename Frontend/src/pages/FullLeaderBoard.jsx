import { useState, useMemo } from "react";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { ArrowUpIcon, ArrowDownIcon } from "lucide-react";

const leaderboardData = [
  {
    id: 1,
    rank: 1,
    username: "MemeKing420",
    profileImage: "https://m.media-amazon.com/images/I/51zRrgJQS-L.jpg",
    totalValue: 250000.45,
    dailyChange: 5.6,
    topMeme: "Doge Coin Meme",
    trades: 127,
    country: "🇺🇸",
  },
  {
    id: 2,
    rank: 2,
    username: "CryptoJoker",
    profileImage: "https://pbs.twimg.com/profile_images/1783836039661957120/et9onP2j_400x400.jpg",
    totalValue: 215678.23,
    dailyChange: -3.2,
    topMeme: "Stonks Meme",
    trades: 98,
    country: "🇬🇧",
  },
  {
    id: 3,
    rank: 3,
    username: "InternetLegend",
    profileImage: "https://storage.googleapis.com/gweb-interland.appspot.com/en-ie/hub/icons/resources/Internaut.png",
    totalValue: 189456.78,
    dailyChange: -1.9,
    topMeme: "Woman Yelling at Cat",
    trades: 85,
    country: "🇨🇦",
  },
  {
    id: 4,
    rank: 4,
    username: "MemeTrader",
    profileImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyUEnTl_Zidzmp89MuD9q-P-dINLcYZgYa7w&s",
    totalValue: 165234.56,
    dailyChange: 2.7,
    topMeme: "Distracted Boyfriend",
    trades: 72,
    country: "🇦🇺",
  },
  {
    id: 5,
    rank: 5,
    username: "ViralVentures",
    profileImage: "https://www.dexerto.com/cdn-image/wp-content/uploads/2024/02/23/viral-tiktok-hamster-meme-1024x576.jpg?width=3840&quality=75&format=auto",
    totalValue: 142567.89,
    dailyChange: -0.8,
    topMeme: "Pepe the Frog",
    trades: 60,
    country: "🇩🇪",
  },
  { id: 6, 
    rank: 6, 
    username: "MemeMaster3000", 
    profileImage: "https://th.bing.com/th/id/OIP.nAJcJ9dFP69fYTYpvq-bhAHaFj?rs=1&pid=ImgDetMain", 
    totalValue: 130456.78, 
    dailyChange: 4.1, 
    topMeme: "Mocking SpongeBob", 
    trades: 50, 
    country: "🇫🇷", 
  }, 
  { id: 7, 
    rank: 7, 
    username: "JokeInvestor", 
    profileImage: "https://th.bing.com/th/id/OIP.yKiQzTkqbjdBlixNX8uNRQHaHa?rs=1&pid=ImgDetMain", 
    totalValue: 120345.67, 
    dailyChange: -2.4, 
    topMeme: "Surprised Pikachu", 
    trades: 47, 
    country: "🇮🇳", 
  }, 
  { id: 8, 
    rank: 8, 
    username: "InternetGuru", 
    profileImage: "https://th.bing.com/th/id/OIP.DJR5jn8HkB0at8W_tAUs6QHaJD?rs=1&pid=ImgDetMain", 
    totalValue: 115234.56, 
    dailyChange: 3.9, 
    topMeme: "Success Kid", 
    trades: 44, 
    country: "🇧🇷", 
  }, 
  { id: 9, 
    rank: 9, 
    username: "LulzMaster", 
    profileImage: "https://pbs.twimg.com/profile_images/1173141076/2701095139_d19c2b21ec_400x400.jpg", 
    totalValue: 110123.45, 
    dailyChange: -1.1, 
    topMeme: "Two Buttons", 
    trades: 41, 
    country: "🇯🇵", 
  }, 
  { id: 10, 
    rank: 10, 
    username: "MemeMerchant", 
    profileImage: "https://th.bing.com/th/id/OIP.uzMcwkLxc3oUtBM9EhKZjQHaIp?rs=1&pid=ImgDetMain", 
    totalValue: 105012.34, 
    dailyChange: 2.8, 
    topMeme: "Roll Safe", 
    trades: 38, 
    country: "🇲🇽", 
  }, 
  { id: 11, 
    rank: 11, 
    username: "LaughFactory", 
    profileImage: "https://s2.dmcdn.net/v/L9ODB1Zl47xtSXaFq/x720", 
    totalValue: 100901.23, 
    dailyChange: -0.9, 
    topMeme: "Confused Math Lady", 
    trades: 35, country: "🇮🇹", 
  }, 
  { id: 12, 
    rank: 12, 
    username: "HumorHero", 
    profileImage: "https://thumbs.dreamstime.com/z/funny-superhero-character-imagination-humor-hero-costume-funny-superhero-character-imagination-humor-282595957.jpg", 
    totalValue: 95890.12, 
    dailyChange: 1.6, 
    topMeme: "Drake Hotline Bling", 
    trades: 32, 
    country: "🇷🇺", 
  }, 
  { id: 13, 
    rank: 13, 
    username: "MemeMogul", 
    profileImage: "https://th.bing.com/th/id/OIP.KjiVwY5sBIyelXLV3NA1vwHaHa?rs=1&pid=ImgDetMain", 
    totalValue: 90789.01, 
    dailyChange: -0.7, 
    topMeme: "Grumpy Cat", 
    trades: 29, 
    country: "🇪🇸", 
  }, 
  { id: 14, 
    rank: 14, 
    username: "GiggleGenius", 
    profileImage: "https://miro.medium.com/v2/resize:fit:2400/1*lR5RZ24GGdU8TEUBeExHFQ.jpeg", 
    totalValue: 85678.90, 
    dailyChange: 3.4, 
    topMeme: "Distracted Boyfriend", 
    trades: 26, 
    country: "🇳🇱", 
  }, 
  { id: 15, 
    rank: 15, 
    username: "ChucklesMaster", 
    profileImage: "https://th.bing.com/th/id/OIP.dhciFx7qdS-rkRmNAMY4ggHaFj?rs=1&pid=ImgDetMain", 
    totalValue: 80567.89, 
    dailyChange: -1.0, 
    topMeme: "Woman Yelling at Cat", 
    trades: 23, 
    country: "🇸🇪" 
  },
];

function FullLeaderBoard() {
  const [sortConfig, setSortConfig] = useState(null);

  const sortedLeaderboard = useMemo(() => {
    let sortableItems = [...leaderboardData];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="container mx-auto p-6 border-2 border-gray-300 bg-gradient-to-r bg-gray-600 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold mb-6 text-white text-center">Meme Trader Leaderboard</h1>
      <Table className="border-separate border-spacing-0 w-full">
        <TableCaption className="text-white text-lg">Top meme traders ranked by total value</TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-500 text-white">
            <TableHead className="w-[80px] text-black">
              Rank
            </TableHead>
            <TableHead className="text-black">
              Trader
            </TableHead>
            <TableHead
              className="cursor-pointer text-right text-black"
              onClick={() => requestSort("totalValue")}
            >
              Total Value
            </TableHead>
            <TableHead
              className="cursor-pointer text-right text-black"
              onClick={() => requestSort("dailyChange")}
            >
              Daily Change
            </TableHead>
            <TableHead className="text-black">
              Top Meme
            </TableHead>
            <TableHead
              className="cursor-pointer text-right text-black"
              onClick={() => requestSort("trades")}
            >
              Trades
            </TableHead >
            <TableHead className="text-black">
              Country
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedLeaderboard.map((entry) => (
            <TableRow key={entry.id} className="border-t border-gray-300 hover:bg-blue-600 transition duration-200">
              <TableCell className="font-medium text-white">{entry.rank}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={entry.profileImage} alt={entry.username} />
                    <AvatarFallback>{entry.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <span className="text-white">{entry.username}</span>
                </div>
              </TableCell>
              <TableCell className="text-right text-white">
                ${entry.totalValue.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </TableCell>
              <TableCell
                className={`text-right ${entry.dailyChange >= 0 ? "text-green-400" : "text-red-400"}`}
              >
                {entry.dailyChange >= 0 ? (
                  <ArrowUpIcon className="inline mr-1" size={16} />
                ) : (
                  <ArrowDownIcon className="inline mr-1" size={16} />
                )}
                {Math.abs(entry.dailyChange).toFixed(2)}%
              </TableCell>
              <TableCell className="text-white">{entry.topMeme}</TableCell>
              <TableCell className="text-right text-green-400">{entry.trades}</TableCell>
              <TableCell className="text-white">{entry.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default FullLeaderBoard;