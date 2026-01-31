import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LandingPage from './components/LandingPage'
import Console from './components/Console'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
    const [showConsole, setShowConsole] = useState(false)

    return (
        <ErrorBoundary>
            <div className="min-h-screen overflow-hidden">
                <AnimatePresence mode="wait">
                    {!showConsole ? (
                        <LandingPage key="landing" onLaunchConsole={() => setShowConsole(true)} />
                    ) : (
                        <Console key="console" onBack={() => setShowConsole(false)} />
                    )}
                </AnimatePresence>
            </div>
        </ErrorBoundary>
    )
}

export default App
