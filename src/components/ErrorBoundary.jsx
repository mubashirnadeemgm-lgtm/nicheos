import React from 'react'
import { AlertTriangle } from 'lucide-react'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null, errorInfo: null }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error Boundary caught an error:', error, errorInfo)
        this.state = { hasError: true, error, errorInfo }
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
                    <div className="max-w-2xl w-full bg-red-900/20 border-2 border-red-500/50 rounded-lg p-8 text-center">
                        <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                        <h1 className="text-2xl font-bold text-red-500 mb-4 font-mono">
                            SYSTEM ERROR DETECTED
                        </h1>
                        <p className="text-gray-300 mb-6">
                            The application encountered an unexpected error. Please refresh the page and try again.
                        </p>
                        <details className="text-left bg-black/50 p-4 rounded-lg mb-6">
                            <summary className="text-yellow-400 cursor-pointer font-mono mb-2">
                                Technical Details (Click to expand)
                            </summary>
                            <pre className="text-xs text-gray-400 overflow-auto max-h-60">
                                {this.state.error && this.state.error.toString()}
                                {'\n\n'}
                                {this.state.errorInfo && this.state.errorInfo.componentStack}
                            </pre>
                        </details>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-300 transition-colors"
                        >
                            RELOAD APPLICATION
                        </button>
                    </div>
                </div>
            )
        }

        return this.props.children
    }
}

export default ErrorBoundary
