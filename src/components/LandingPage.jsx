import React from 'react'
import { motion } from 'framer-motion'
import { Search, Sparkles } from 'lucide-react'

const FloatingElement = ({ children, delay = 0, duration = 20 }) => {
    return (
        <motion.div
            className="absolute text-4xl md:text-6xl font-bold text-gray-200 select-none pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0, 0.3, 0.3, 0],
                x: [0, 30, -20, 0],
                y: [0, -30, 20, 0],
                rotate: [0, 120, 240, 360],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut"
            }}
        >
            {children}
        </motion.div>
    )
}

const LandingPage = ({ onLaunchConsole }) => {
    const keywords = [
        { text: 'Gaming', top: '10%', left: '15%', delay: 0 },
        { text: 'Tech', top: '20%', right: '20%', delay: 2 },
        { text: 'Vlog', top: '60%', left: '10%', delay: 4 },
        { text: 'AI', top: '70%', right: '15%', delay: 1 },
        { text: 'Finance', top: '40%', left: '25%', delay: 3 },
        { text: 'Fitness', top: '50%', right: '30%', delay: 5 },
    ]

    return (
        <motion.div
            className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
        >
            {/* Floating Background Elements */}
            {keywords.map((keyword, index) => (
                <FloatingElement
                    key={index}
                    delay={keyword.delay}
                    duration={20 + index * 2}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: keyword.top,
                            left: keyword.left,
                            right: keyword.right,
                        }}
                    >
                        {keyword.text}
                    </div>
                </FloatingElement>
            ))}

            {/* Main Content */}
            <motion.div
                className="relative z-10 text-center px-4 max-w-2xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                {/* Logo/Title */}
                <motion.div
                    className="mb-8"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                >
                    <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-2 tracking-tight">
                        NicheOS
                    </h1>
                    <p className="text-gray-500 text-lg">Discover Your Perfect Content Identity</p>
                </motion.div>

                {/* Search Bar (Visual Only) */}
                <motion.div
                    className="mb-12"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >
                    <div className="relative max-w-xl mx-auto">
                        <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                            <Search className="w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Find your destiny..."
                                className="flex-1 outline-none text-gray-700 placeholder:text-gray-400 bg-transparent"
                                readOnly
                            />
                            <Sparkles className="w-5 h-5 text-gray-300" />
                        </div>
                    </div>
                </motion.div>

                {/* Launch Console Button */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                >
                    <motion.button
                        onClick={onLaunchConsole}
                        className="group relative px-12 py-4 bg-black text-white rounded-full text-lg font-medium overflow-hidden shadow-xl"
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-gray-800 to-black"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10 flex items-center gap-2">
                            LAUNCH CONSOLE
                            <motion.span
                                animate={{ x: [0, 5, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                →
                            </motion.span>
                        </span>
                    </motion.button>
                </motion.div>

                {/* Subtitle */}
                <motion.p
                    className="mt-8 text-sm text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                >
                    Powered by advanced niche discovery algorithms
                </motion.p>
            </motion.div>
        </motion.div>
    )
}

export default LandingPage
