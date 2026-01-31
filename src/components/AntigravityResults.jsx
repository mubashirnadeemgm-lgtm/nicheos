import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, DollarSign, Clock, Lightbulb } from 'lucide-react'

const AntigravityResults = ({ ideas }) => {
    if (!ideas || ideas.length === 0) return null

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
        >
            {/* Header */}
            <div className="text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold mb-4"
                >
                    <Sparkles className="w-5 h-5" />
                    Antigravity Ideas Generated
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Your 3 Channel Opportunities
                </h2>
                <p className="text-gray-600">
                    Low-competition, high-demand niches tailored to your profile
                </p>
            </div>

            {/* Ideas Grid */}
            <div className="grid md:grid-cols-1 gap-6">
                {ideas.map((idea, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.2 }}
                        className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:border-purple-300 transition-all p-6 md:p-8"
                    >
                        {/* Idea Number Badge */}
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {idea.channelName}
                                    </h3>
                                    <p className="text-sm text-gray-500">Channel Idea #{index + 1}</p>
                                </div>
                            </div>
                        </div>

                        {/* The Concept */}
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-2">
                                <Lightbulb className="w-5 h-5 text-yellow-500" />
                                <h4 className="font-semibold text-gray-900">The Concept</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                {idea.concept}
                            </p>
                        </div>

                        {/* Why it Works (Antigravity) */}
                        <div className="mb-6 bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                            <div className="flex items-center gap-2 mb-2">
                                <TrendingUp className="w-5 h-5 text-purple-600" />
                                <h4 className="font-semibold text-purple-900">Why it Works (Antigravity)</h4>
                            </div>
                            <p className="text-purple-800 leading-relaxed">
                                {idea.antigravity}
                            </p>
                        </div>

                        {/* Content Strategy */}
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-2">
                                <Clock className="w-5 h-5 text-blue-500" />
                                <h4 className="font-semibold text-gray-900">Content Strategy</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                {idea.contentStrategy}
                            </p>
                        </div>

                        {/* Monetization */}
                        <div className="mb-6">
                            <div className="flex items-center gap-2 mb-3">
                                <DollarSign className="w-5 h-5 text-green-500" />
                                <h4 className="font-semibold text-gray-900">Monetization Strategy</h4>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                {idea.monetization}
                            </p>
                        </div>

                        {/* First Video Idea */}
                        <div className="mb-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                            <h4 className="font-semibold text-gray-900 mb-2">🎬 Your First Video</h4>
                            <p className="text-gray-800 italic">
                                "{idea.firstVideoIdea}"
                            </p>
                        </div>

                        {/* Weekly Workflow */}
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                            <h4 className="font-semibold text-gray-900 mb-3">📅 Weekly Workflow</h4>
                            <div className="space-y-2 text-sm">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium text-gray-700">Time:</span>
                                    <span className="text-gray-600">{idea.weeklyWorkflow.hours}</span>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">Schedule:</span>
                                    <p className="text-gray-600 mt-1">{idea.weeklyWorkflow.schedule}</p>
                                </div>
                                <div>
                                    <span className="font-medium text-gray-700">Pro Tips:</span>
                                    <p className="text-gray-600 mt-1">{idea.weeklyWorkflow.tips}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Action CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl text-center"
            >
                <h3 className="text-2xl font-bold mb-2">Ready to Launch?</h3>
                <p className="text-purple-100 mb-4">
                    Pick one idea, create your first video this week, and start building your channel!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                        Save These Ideas
                    </button>
                    <button className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors">
                        Generate More Ideas
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default AntigravityResults
