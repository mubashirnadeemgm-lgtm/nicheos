import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Zap, Play, Star } from 'lucide-react'
import mascot from '../assets/mascot.png'

const LandingPage = ({ onLaunchConsole }) => {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center text-center font-sans selection:bg-yellow-300">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
                    animate={{
                        x: [0, -70, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 1 }}
                />
                <motion.div
                    className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70"
                    animate={{
                        x: [0, 50, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
                />
            </div>

            {/* Navbar / Top Bar */}
            <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-20 max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#FFD700] rounded-xl flex items-center justify-center shadow-md transform rotate-3">
                        <Zap className="w-6 h-6 text-black fill-black" />
                    </div>
                    <span className="font-bold text-2xl tracking-tight">ViralSpy</span>
                </div>
                <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
                    <a href="#" className="hover:text-black transition-colors">Features</a>
                    <a href="#" className="hover:text-black transition-colors">Pricing</a>
                    <a href="#" className="hover:text-black transition-colors">About</a>
                </div>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-5 py-2 bg-black text-white rounded-full text-sm font-bold hover:bg-gray-800 transition-colors"
                >
                    Get Started
                </motion.button>
            </nav>

            {/* Main Content */}
            <motion.div
                className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center mt-10 md:mt-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Badge */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-100 rounded-full text-orange-600 text-sm font-bold mb-8 shadow-sm hover:shadow-md transition-all cursor-default"
                >
                    <Star className="w-4 h-4 fill-orange-600" />
                    <span>#1 Niche Finder for Creators</span>
                </motion.div>

                {/* Hero Title */}
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-black mb-6 leading-[1.1]">
                    Unlock Viral <br />
                    <span className="relative">
                        <span className="relative z-10">Potential</span>
                        <svg className="absolute w-full h-4 -bottom-1 left-0 text-[#FFD700] z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                        </svg>
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-12 leading-relaxed">
                    Discover untapped niches, analyze competition, and generate
                    content ideas that actually go viral.
                </p>

                {/* Mascot Centerpiece */}
                <motion.div
                    className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] mb-12"
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    {/* Glow behind mascot */}
                    <div className="absolute inset-0 bg-[#FFD700] rounded-full filter blur-[80px] opacity-20 transform scale-90" />

                    {/* The Mascot Image */}
                    <img
                        src={mascot}
                        alt="Cute ViralSpy Mascot"
                        className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
                    />

                    {/* Floating Elements around mascot */}
                    <motion.div
                        className="absolute top-10 right-0 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-2"
                        animate={{ y: [0, 10, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    >
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-green-600" />
                        </div>
                        <span className="font-bold text-sm">High Revenue!</span>
                    </motion.div>

                    <motion.div
                        className="absolute bottom-10 left-0 bg-white p-3 rounded-2xl shadow-xl flex items-center gap-2"
                        animate={{ y: [0, -10, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
                    >
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                            <Zap className="w-5 h-5 text-purple-600" />
                        </div>
                        <span className="font-bold text-sm">Low Competition</span>
                    </motion.div>
                </motion.div>

                {/* Launch Button */}
                <motion.button
                    onClick={onLaunchConsole}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative px-8 py-5 bg-[#FFD700] text-black rounded-2xl font-black text-xl shadow-[0_10px_40px_-10px_rgba(255,215,0,0.6)] hover:shadow-[0_20px_60px_-15px_rgba(255,215,0,0.8)] transition-all flex items-center gap-3 overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-3">
                        <Play className="w-6 h-6 fill-black" />
                        LAUNCH CONSOLE
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </motion.button>

                {/* Social Proof / Trusted By */}
                <div className="mt-16 text-center">
                    <p className="text-sm font-semibold text-gray-400 mb-4 tracking-wider uppercase">Trusted by 10,000+ Creators</p>
                    <div className="flex gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Simple placeholder logos */}
                        <div className="text-xl font-black font-serif">YouCreator</div>
                        <div className="text-xl font-bold font-mono">StreamLine</div>
                        <div className="text-xl font-extrabold italic">VIDalytics</div>
                        <div className="text-xl font-bold">TubeRocket</div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default LandingPage
