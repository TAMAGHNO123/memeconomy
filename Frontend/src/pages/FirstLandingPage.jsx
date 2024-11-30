import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

gsap.registerPlugin(ScrollTrigger);

function FirstLandingPage() {
    const containerRef = useRef(null);
    const leftContentRef = useRef(null);
    const titleRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonsRef = useRef(null);
    const backgroundRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom bottom",
                scrub: 1,
            },
        });

        // Background parallax effect
        tl.to(backgroundRef.current, {
            y: "30%",
            ease: "none",
        });

        // Content animations
        gsap.fromTo(
            leftContentRef.current,
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 1.5, delay: 0.5, ease: "power3.out" }
        );

        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1, delay: 1, ease: "elastic.out(1, 0.5)" }
        );

        gsap.fromTo(
            paragraphRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 1.2, ease: "power2.out" }
        );

        // Staggered button animations
        gsap.fromTo(
            buttonsRef.current.children,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: 1.4,
                stagger: 0.2,
                ease: "back.out(1.7)",
                onComplete: () => {
                    gsap.to(buttonsRef.current.children, {
                        y: 10,
                        repeat: -1,
                        yoyo: true,
                        duration: 1,
                        ease: "power1.inOut",
                        stagger: {
                            each: 0.2,
                            from: "start",
                        },
                    });
                },
            }
        );

        // Store the current value of buttonsRef
        const buttonsChildren = buttonsRef.current.children;

        // Clean up function
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
            gsap.killTweensOf(buttonsChildren);
        };
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen relative bg-gradient-to-br from-gray-900 to-indigo-900 text-white overflow-hidden">
            {/* Background Decoration */}
            <div
                ref={backgroundRef}
                className="absolute top-0 left-0 w-full h-full opacity-50 z-0"
            >
                <img
                    src="https://images.hindustantimes.com/tech/img/2024/11/26/960x540/Chill_Guy_dog_meme_1732623919310_1732623919574.jpg"
                    alt="Meme Background"
                    className="w-full h-full object-cover filter blur-sm"
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-32">
                {/* Left Side Content */}
                <div
                    ref={leftContentRef}
                    className="flex flex-col items-start justify-center space-y-8 max-w-2xl"
                >
                    <h1
                        ref={titleRef}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
                    >
                        Welcome to Memeconomy
                    </h1>
                    <p
                        ref={paragraphRef}
                        className="text-xl md:text-2xl text-gray-300"
                    >
                        Dive into the world of memes, connect with others, and have fun. Start by signing up or logging in!
                    </p>
                </div>

                {/* Right Side Buttons */}
                <div
                    ref={buttonsRef}
                    className="absolute top-10 right-10 flex flex-col space-y-4"
                >
                    {/* Replace buttons with Link components for navigation */}
                    <Link to="/login">
                        <button className="w-40 p-4 bg-blue-500 hover:bg-blue-600 rounded-lg text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50">
                            Login
                        </button>
                    </Link>
                    <Link to="/register">
                        <button className="w-40 p-4 bg-purple-500 hover:bg-purple-600 rounded-lg text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/50">
                            Register
                        </button>
                    </Link>
                </div>
            </div>

            {/* Floating Meme Elements */}
            <div className="absolute bottom-10 left-10 animate-bounce">
                <span className="text-6xl">🎭</span>
            </div>
            <div className="absolute top-20 left-1/4 animate-pulse">
                <span className="text-5xl">🚀</span>
            </div>
            <div className="absolute bottom-1/4 right-20 animate-spin-slow">
                <span className="text-7xl">💡</span>
            </div>
        </div>
    );
}

export default FirstLandingPage;
