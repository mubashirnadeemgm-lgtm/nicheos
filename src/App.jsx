import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LandingPage from './components/LandingPage'
import Console from './components/Console'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
    // Initialize state from localStorage
    const [showConsole, setShowConsole] = useState(() => {
        const savedView = localStorage.getItem('current_view')
        return savedView === 'console'
    })

    const handleLaunchConsole = () => {
        localStorage.setItem('current_view', 'console')
        setShowConsole(true)
    }

    const handleBack = () => {
        localStorage.setItem('current_view', 'landing')
        setShowConsole(false)
    }

    return (
        <ErrorBoundary>
            <div className="min-h-screen overflow-hidden">
                <AnimatePresence mode="wait">
                    {!showConsole ? (
                        <LandingPage key="landing" onLaunchConsole={handleLaunchConsole} />
                    ) : (
                        <Console key="console" onBack={handleBack} />
                    )}
                </AnimatePresence>
            </div>
        </ErrorBoundary>
    )
}

export default App
