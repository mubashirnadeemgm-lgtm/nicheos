import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, ArrowRight, Zap, Play, Star, TrendingUp, BarChart3, Target } from 'lucide-react'

// Floating Icon Component
const FloatingIcon = ({ icon: Icon, delay, x, y, size, color }) => (
    <motion.div
        className={`absolute ${color} opacity-20`}
        style={{ left: x, top: y }}
        initial={{ y: 0, rotate: 0 }}
        animate={{
            y: [-10, 10, -10],
            rotate: [-5, 5, -5]
        }}
        transition={{
            duration: 5,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        <Icon size={size} />
    </motion.div>
)

const LandingPage = ({ onLaunchConsole }) => {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden flex flex-col items-center justify-center text-center font-sans selection:bg-yellow-200">
            {/* Animated Background Icons */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <FloatingIcon icon={Zap} delay={0} x="10%" y="15%" size={48} color="text-yellow-500" />
                <FloatingIcon icon={TrendingUp} delay={1} x="85%" y="20%" size={64} color="text-yellow-500" />
                <FloatingIcon icon={Play} delay={2} x="15%" y="75%" size={56} color="text-yellow-500" />
                <FloatingIcon icon={Star} delay={1.5} x="80%" y="80%" size={40} color="text-yellow-500" />
                <FloatingIcon icon={BarChart3} delay={0.5} x="75%" y="45%" size={32} color="text-gray-300" />
                <FloatingIcon icon={Target} delay={2.5} x="20%" y="40%" size={36} color="text-gray-300" />
            </div>

            {/* Navbar / Top Bar */}
            <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-20 max-w-7xl mx-auto">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#FFD700] rounded-xl flex items-center justify-center shadow-md transform -rotate-3">
                        <Zap className="w-6 h-6 text-black fill-black" />
                    </div>
                    <span className="font-bold text-2xl tracking-tight text-black">ViralSpy</span>
                </div>
                <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
                    <a href="#" className="hover:text-black transition-colors font-bold">Features</a>
                    <a href="#" className="hover:text-black transition-colors font-bold">Pricing</a>
                    <a href="#" className="hover:text-black transition-colors font-bold">About</a>
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
                    className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full text-yellow-700 text-sm font-bold mb-8 shadow-sm hover:shadow-md transition-all cursor-default"
                >
                    <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    <span>#1 Niche Finder for Creators</span>
                </motion.div>

                {/* Hero Title */}
                <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight text-black mb-6 leading-[1.1]">
                    Unlock Viral <br />
                    <span className="relative inline-block">
                        <span className="relative z-10">Potential</span>
                        <svg className="absolute w-full h-4 -bottom-1 left-0 text-[#FFD700] z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                            <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                        </svg>
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl mb-12 leading-relaxed">
                    Discover untapped niches, analyze competition, and generate
                    content ideas that actually go viral.
                </p>

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
                    <p className="text-sm font-bold text-gray-400 mb-4 tracking-wider uppercase">Trusted by 10,000+ Creators</p>
                    <div className="flex gap-8 opacity-40 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0">
                        {/* Placeholder text logos */}
                        <div className="text-xl font-black font-serif text-gray-900 tracking-widest">YouCreator</div>
                        <div className="text-xl font-bold font-mono text-gray-900 tracking-tight">StreamLine</div>
                        <div className="text-xl font-extrabold italic text-gray-900">VIDalytics</div>
                        <div className="text-xl font-bold text-gray-900 tracking-tighter">TubeRocket</div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default LandingPage
