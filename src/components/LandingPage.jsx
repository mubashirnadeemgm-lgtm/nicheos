import React, { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { Terminal, Radar, Eye, Zap } from 'lucide-react'

// Binary Code Particle Component
const BinaryParticle = ({ delay = 0 }) => {
    const binary = ['0', '1']
    const randomBinary = () => binary[Math.floor(Math.random() * binary.length)]

    return (
        <motion.div
            className="absolute text-cyan-500/20 font-mono text-xs select-none pointer-events-none"
            style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
                opacity: [0, 0.3, 0.3, 0],
                y: [0, -100],
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                delay: delay,
                ease: "linear"
            }}
        >
            {Array.from({ length: 8 }).map((_, i) => (
                <div key={i}>{randomBinary()}</div>
            ))}
        </motion.div>
    )
}

// Radar Scanning Effect
const RadarGrid = () => {
    return (
        <div className="absolute inset-0 overflow-hidden opacity-10">
            {/* Horizontal lines */}
            {Array.from({ length: 20 }).map((_, i) => (
                <div
                    key={`h-${i}`}
                    className="absolute w-full h-px bg-cyan-500"
                    style={{ top: `${i * 5}%` }}
                />
            ))}
            {/* Vertical lines */}
            {Array.from({ length: 20 }).map((_, i) => (
                <div
                    key={`v-${i}`}
                    className="absolute h-full w-px bg-cyan-500"
                    style={{ left: `${i * 5}%` }}
                />
            ))}

            {/* Scanning line */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent h-32"
                animate={{
                    y: ['-10%', '110%'],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>
    )
}

// Typing Effect Hook
const useTypingEffect = (text, speed = 100) => {
    const [displayedText, setDisplayedText] = useState('')
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(prev => prev + text[currentIndex])
                setCurrentIndex(prev => prev + 1)
            }, speed)
            return () => clearTimeout(timeout)
        }
    }, [currentIndex, text, speed])

    return displayedText
}

const LandingPage = ({ onLaunchConsole }) => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const [isGlitching, setIsGlitching] = useState(false)

    // Typing effect for subtitle
    const typedText = useTypingEffect('Declassify the Secrets of Viral Content', 80)

    // Mouse move handler for spotlight effect
    const handleMouseMove = (e) => {
        mouseX.set(e.clientX)
        mouseY.set(e.clientY)
    }

    // Glitch effect trigger
    const triggerGlitch = () => {
        setIsGlitching(true)
        setTimeout(() => setIsGlitching(false), 200)
    }

    return (
        <motion.div
            className="relative min-h-screen bg-[#050505] flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onMouseMove={handleMouseMove}
        >
            {/* Radar Grid Background */}
            <RadarGrid />

            {/* Binary Code Particles */}
            {Array.from({ length: 15 }).map((_, i) => (
                <BinaryParticle key={i} delay={i * 0.5} />
            ))}

            {/* Cursor Spotlight Effect */}
            <motion.div
                className="fixed w-96 h-96 rounded-full pointer-events-none z-0"
                style={{
                    background: 'radial-gradient(circle, rgba(250, 204, 21, 0.08) 0%, transparent 70%)',
                    x: useTransform(mouseX, (x) => x - 192),
                    y: useTransform(mouseY, (y) => y - 192),
                }}
            />

            {/* Scanlines Overlay */}
            <div className="absolute inset-0 pointer-events-none z-10">
                <div className="w-full h-full bg-[linear-gradient(transparent_50%,rgba(250,204,21,0.02)_50%)] bg-[length:100%_4px]" />
            </div>

            {/* Main Content */}
            <motion.div
                className="relative z-20 text-center px-4 max-w-4xl"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                {/* Top Badge */}
                <motion.div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/5 mb-8"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring' }}
                >
                    <Radar className="w-4 h-4 text-yellow-400 animate-pulse" />
                    <span className="text-yellow-400 text-sm font-mono tracking-wider">INTELLIGENCE SYSTEM ACTIVE</span>
                </motion.div>

                {/* Logo/Title with Glitch Effect */}
                <motion.div
                    className="mb-6"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <h1
                        className={`text-7xl md:text-8xl font-bold mb-4 tracking-tight font-mono ${isGlitching ? 'animate-glitch' : ''
                            }`}
                        style={{
                            background: 'linear-gradient(to right, #FACC15, #FDE047, #FACC15)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            textShadow: isGlitching ? '2px 2px #FF0000, -2px -2px #00FF00' : 'none',
                        }}
                    >
                        ViralSpy
                    </h1>

                    {/* Subtitle with Typing Effect */}
                    <div className="h-8 flex items-center justify-center">
                        <p className="text-gray-400 text-lg md:text-xl font-light">
                            {typedText}
                            <motion.span
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 0.8, repeat: Infinity }}
                                className="inline-block w-0.5 h-5 bg-yellow-400 ml-1"
                            />
                        </p>
                    </div>
                </motion.div>

                {/* Mission Brief */}
                <motion.div
                    className="mb-12 max-w-2xl mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.5 }}
                >
                    <div className="bg-gradient-to-r from-yellow-400/10 via-yellow-400/5 to-yellow-400/10 border border-yellow-400/20 rounded-lg p-6 backdrop-blur-sm">
                        <div className="flex items-start gap-3">
                            <Eye className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                            <div className="text-left">
                                <h3 className="text-yellow-400 font-mono text-sm mb-2 tracking-wider">MISSION OBJECTIVE</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Deploy advanced AI reconnaissance to identify high-value, low-competition content niches.
                                    Extract actionable intelligence for maximum viral potential.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Command Prompt Input (Visual) */}
                <motion.div
                    className="mb-12 max-w-2xl mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.5 }}
                >
                    <div className="relative">
                        <div className="flex items-center gap-3 px-6 py-4 bg-black/50 rounded-lg border border-yellow-400/30 backdrop-blur-sm font-mono">
                            <Terminal className="w-5 h-5 text-yellow-400" />
                            <span className="text-yellow-400">$</span>
                            <input
                                type="text"
                                placeholder="viralspy --scan --target=youtube"
                                className="flex-1 outline-none text-gray-300 placeholder:text-gray-600 bg-transparent font-mono text-sm"
                                readOnly
                            />
                            <motion.div
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                                className="w-2 h-4 bg-yellow-400"
                            />
                        </div>

                        {/* Scan line effect on input */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent"
                            animate={{ x: ['-100%', '200%'] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        />
                    </div>
                </motion.div>

                {/* Launch Console Button with Glitch Hover */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.5 }}
                >
                    <motion.button
                        onClick={onLaunchConsole}
                        onHoverStart={triggerGlitch}
                        className="group relative px-12 py-5 bg-yellow-400 text-black rounded-lg text-lg font-bold overflow-hidden shadow-2xl shadow-yellow-400/20 font-mono tracking-wider"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0 0 40px rgba(250, 204, 21, 0.4)"
                        }}
                        whileTap={{ scale: 0.98 }}
                    >
                        {/* Scan line animation on hover */}
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                            initial={{ x: '-100%' }}
                            whileHover={{ x: '200%' }}
                            transition={{ duration: 0.6 }}
                        />

                        {/* Glitch bars */}
                        <motion.div
                            className="absolute inset-0 bg-black"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: [0, 1, 0] }}
                            transition={{ duration: 0.3 }}
                            style={{ transformOrigin: 'left' }}
                        />

                        <span className="relative z-10 flex items-center gap-3">
                            <Zap className="w-5 h-5" />
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

                {/* Footer Info */}
                <motion.div
                    className="mt-12 flex items-center justify-center gap-6 text-xs text-gray-600 font-mono"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                >
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>SYSTEM ONLINE</span>
                    </div>
                    <div className="w-px h-4 bg-gray-700" />
                    <span>POWERED BY GEMINI AI</span>
                    <div className="w-px h-4 bg-gray-700" />
                    <span>CLASSIFIED: TOP SECRET</span>
                </motion.div>
            </motion.div>

            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-yellow-400/20" />
            <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-yellow-400/20" />
            <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-yellow-400/20" />
            <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-yellow-400/20" />
        </motion.div>
    )
}

export default LandingPage
