import React from 'react'
import { motion } from 'framer-motion'
import { Star, TrendingUp, DollarSign, Users } from 'lucide-react'

const ResultCard = ({ result }) => {
    const renderStars = (rating) => {
        return [...Array(5)].map((_, i) => (
            <Star
                key={i}
                className={`w-5 h-5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
            />
        ))
    }

    return (
        <motion.div
            className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl p-8 text-white"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
        >
            {/* Header */}
            <motion.div
                className="mb-6 pb-6 border-b border-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
            >
                <h2 className="text-3xl font-bold mb-2">{result.channelName}</h2>
                <p className="text-gray-400 text-sm">Your Generated Identity</p>
            </motion.div>

            {/* Niche Definition */}
            <motion.div
                className="mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
            >
                <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Niche Definition</h3>
                        <p className="text-gray-300">{result.nicheDefinition}</p>
                    </div>
                </div>
            </motion.div>

            {/* Viral Hook */}
            <motion.div
                className="mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
            >
                <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold text-lg mb-2">First Video Hook</h3>
                        <p className="text-gray-300 italic">"{result.viralHook}"</p>
                    </div>
                </div>
            </motion.div>

            {/* Monetization Rating */}
            <motion.div
                className="mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
            >
                <div className="flex items-start gap-3">
                    <DollarSign className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">Monetization Potential</h3>
                        <div className="flex items-center gap-2">
                            {renderStars(result.monetizationRating)}
                            <span className="text-gray-400 text-sm ml-2">
                                ({result.monetizationRating}/5)
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* Additional Insights */}
            <motion.div
                className="bg-gray-800/50 rounded-lg p-4 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                <h4 className="font-semibold mb-2 text-sm text-gray-300">Key Insights</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                    {result.insights.map((insight, index) => (
                        <li key={index} className="flex items-start gap-2">
                            <span className="text-blue-400 mt-1">•</span>
                            <span>{insight}</span>
                        </li>
                    ))}
                </ul>
            </motion.div>

            {/* Action Button */}
            <motion.button
                className="w-full mt-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                Save & Export Identity
            </motion.button>
        </motion.div>
    )
}

export default ResultCard
