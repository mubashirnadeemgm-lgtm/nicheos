import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LandingPage from './components/LandingPage'
import Console from './components/Console'

function App() {
    const [showConsole, setShowConsole] = useState(false)

    return (
        <div className="min-h-screen overflow-hidden">
            <AnimatePresence mode="wait">
                {!showConsole ? (
                    <LandingPage key="landing" onLaunchConsole={() => setShowConsole(true)} />
                ) : (
                    <Console key="console" onBack={() => setShowConsole(false)} />
                )}
            </AnimatePresence>
        </div>
    )
}

export default App
