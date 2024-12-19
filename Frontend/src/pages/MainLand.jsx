import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function MainLand() {
    const navigate = useNavigate();

    const MemeMarketPage = () => {
        const [userPortfolioData, setUserPortfolioData] = useState({
            portfolioComposition: [],
        });

        const addMemeToPortfolio = (meme) => {
            setUserPortfolioData((prevData) => ({
                ...prevData,
                portfolioComposition: [...prevData.portfolioComposition, meme],
            }));
        };

        const removeMemeFromPortfolio = (id) => {
            setUserPortfolioData((prevData) => ({
                ...prevData,
                portfolioComposition: prevData.portfolioComposition.filter((meme) => meme.id !== id),
            }));
        };
        


        // Use setUserPortfolioData to update the state
        useEffect(() => {
            setUserPortfolioData({
                totalValue: 15423.67,
                dailyChange: 456.23,
                portfolioComposition: [
                    {
                        id: 1,
                        name: "Doge Coin Meme",
                        symbol: "DOGE",
                        quantity: 250,
                        currentPrice: 42.69,
                        totalValue: 10672.50,
                        dailyChange: 15.3,
                        imageUrl: "https://www.researchgate.net/publication/359456368/figure/fig1/AS:11431281103138195@1669617009814/A-blank-doge-meme-template_Q320.jpg"
                    },
                    {
                        id: 2,
                        name: "Stonks Meme",
                        symbol: "STONK",
                        quantity: 100,
                        currentPrice: 256.78,
                        totalValue: 3245.80,
                        dailyChange: 22.1,
                        imageUrl: "https://preview.redd.it/the-current-state-of-this-subreddit-due-to-u-cuppathecups-v0-mxiypgyf63yd1.jpeg?auto=webp&s=b2643964ac8217673d1d3f56fff80c40a872d421"
                    },
                    {
                        id: 3,
                        name: "Woman Yelling at Cat",
                        symbol: "YELL",
                        quantity: 75,
                        currentPrice: 175.32,
                        totalValue: 1564.90,
                        dailyChange: 8.7,
                        imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1f/WomanYellingAtACat_meme.jpg"
                    }
                ]
            });
        }, []);

        const memePrices = [
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
            }
        ];

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
                country: "🇺🇸"
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
                country: "🇬🇧"
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
                country: "🇨🇦"
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
                country: "🇦🇺"
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
                country: "🇩🇪"
            }
        ];

        let totalPortfolioPrice = 0;
        userPortfolioData.portfolioComposition.forEach((asset) => {
            totalPortfolioPrice += asset.currentPrice;
        });

        return (
            <div className="min-h-screen bg-blue-200 p-8">
                {/* Header Section */}
                <header className="mb-12 text-center flex justify-between items-center">
                    <div className="flex flex-col items-center">
                        <motion.h1
                            className="text-5xl font-extrabold text-gray-800"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            Welcome to <span className="text-blue-600">Memeconomy</span>
                        </motion.h1>
                        <motion.p
                            className="mt-4 text-lg text-gray-600"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            The one-stop platform to buy and sell memes like stocks!
                        </motion.p>
                    </div>
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                        onClick={() => navigate("/")}>
                        Logout
                    </button>
                </header>

                {/* Main Content */}
                <main className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Portfolio Section */}
                    <div className="col-span-1">
                        <div className="my-portfolio-container bg-green-300 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Portfolio ${totalPortfolioPrice.toFixed(2)}</h2>
                            <div className="grid gap-4">
                                {userPortfolioData.portfolioComposition.map((asset, index) => (
                                    <motion.div
                                        key={asset.id}
                                        className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }} // Stagger effect
                                    >
                                        <img
                                            src={asset.imageUrl}
                                            alt={asset.name}
                                            className="w-16 h-16 object-cover rounded-full mr-4"
                                        />
                                        <div className="flex-grow">
                                            <div className="flex justify-between">
                                                <div>
                                                    <h3 className="font-bold text-gray-800">{asset.name}</h3>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-semibold">${asset.currentPrice.toLocaleString()}</p>
                                                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                                                        onClick={() => removeMemeFromPortfolio(asset.id)}>Remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Meme Market Section */}
                    <motion.section
                        className="col-span-1 md:col-span-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meme Market</h2>
                        <p className="text-gray-600 mb-4">Explore trending memes and their market prices.</p>

                        <div className="grid grid-cols-2 gap-4">
                            {memePrices.slice(0, 4).map((meme) => (
                                <div
                                    key={meme.id}
                                    className="bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                                >
                                    <img
                                        src={meme.imageUrl}
                                        alt={meme.name}
                                        className="w-full h-32 object-cover rounded-md mb-2"
                                    />
                                    <h3 className="font-bold text-gray-800">{meme.name}</h3>
                                    <p className="text-sm text-gray-600">Price: ${meme.currentPrice.toFixed(2)}</p>
                                    <button
                                        className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                                        onClick={() => addMemeToPortfolio(meme)} // Add meme to portfolio
                                    >
                                        Buy
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 text-center">
                            <button className="bg-purple-500 text-white px-6 py-3 rounded-full text-lg hover:bg-purple-600 transition" onClick={() => navigate("/full+mememarket")}>
                                Dive into Meme World
                            </button>
                        </div>
                    </motion.section>

                    {/* Leaderboard Section */}
                    <motion.section
                        className="col-span-1 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-2xl font-semibold text-gray-800">Leaderboard</h2>
                            <div className="flex items-center">
                                <span className="mr-2 text-gray-600">🏆</span>
                                <span className="text-gray-600">Top Meme Traders</span>
                            </div>
                        </div>

                        <p className="text-gray-600 mb-4">Check out the top-performing users in the Memeconomy.</p>

                        <div className="grid gap-4">
                            {leaderboardData.map((trader) => (
                                <div
                                    key={trader.id}
                                    className="flex items-center bg-gray-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                                >
                                    <div className="mr-4 flex items-center">
                                        <span className="font-bold text-xl mr-2 text-gray-700">{trader.rank}</span>
                                        <img
                                            src={trader.profileImage}
                                            alt={trader.username}
                                            className="w-12 h-12 rounded-full border-2 border-blue-500"
                                        />
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <div className="flex items-center">
                                                    <h3 className="font-bold text-gray-800 mr-2">{trader.username}</h3>
                                                    <span>{trader.country}</span>
                                                </div>
                                                <p className="text-gray-500 text-sm">Top Meme: {trader.topMeme}</p>
                                            </div>

                                            <div className="text-right">
                                                <p className="font-semibold text-green-600">${trader.totalValue.toLocaleString()}</p>
                                                <p className={`text-xs ${trader.dailyChange > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                                    {trader.dailyChange > 0 ? '▲' : '▼'} {Math.abs(trader.dailyChange)}%
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-2 flex justify-between text-sm text-gray-600">
                                            <span>Trades: {trader.trades}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 text-center">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors" onClick={() => navigate("/full+leaderboard")}>
                                View Full Leaderboard
                            </button>
                        </div>
                    </motion.section>
                </main>

                {/* Footer */}
                <footer className="mt-12 text-center">
                    <p className="text-gray-500">
                        © {new Date().getFullYear()} Memeconomy. All rights reserved.
                    </p>
                </footer>
            </div>
        );
    }

    // Render the MemeMarketPage component
    return <MemeMarketPage />;
}
export default MainLand;
