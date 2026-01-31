import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, DollarSign, AlertTriangle, Wrench, FileText, Award } from 'lucide-react'

const AntigravityResults = ({ ideas }) => {
    // Error boundary: Check if ideas exists and is an array
    if (!ideas) {
        return (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-red-900 mb-2">No Data Received</h3>
                <p className="text-red-700">The webhook did not return any data. Please try again.</p>
            </div>
        )
    }

    // Handle if ideas is not an array
    if (!Array.isArray(ideas)) {
        console.error('Expected array but got:', typeof ideas, ideas)
        return (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
                <AlertTriangle className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Invalid Data Format</h3>
                <p className="text-yellow-700">Expected an array of niches but received a different format.</p>
                <pre className="mt-4 text-xs text-left bg-white p-4 rounded overflow-auto max-h-40">
                    {JSON.stringify(ideas, null, 2)}
                </pre>
            </div>
        )
    }

    // Handle empty array
    if (ideas.length === 0) {
        return (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                <Sparkles className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No Ideas Generated</h3>
                <p className="text-gray-600">Try adjusting your parameters and generate again.</p>
            </div>
        )
    }

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
                    Your {ideas.length} Channel Opportunities
                </h2>
                <p className="text-gray-600">
                    Low-competition, high-demand niches tailored to your profile
                </p>
            </div>

            {/* Ideas Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {ideas.map((idea, index) => {
                    // Safely access properties with fallbacks
                    const nicheName = idea.niche_name || idea.channelName || `Niche Idea ${index + 1}`
                    const viralityScore = idea.virality_score || idea.viralityScore || 0
                    const competitionLevel = idea.competition_level || idea.competitionLevel || 'Not specified'
                    const revenuePotential = idea.revenue_potential || idea.revenuePotential || 'Not specified'
                    const reasonForSuccess = idea.reason_for_success || idea.reasonForSuccess || idea.antigravity || 'High potential niche'
                    const contentSource = idea.content_source || idea.contentSource || idea.contentStrategy || 'Create original content'
                    const toolsNeeded = idea.tools_needed || idea.toolsNeeded || 'Basic equipment'
                    // Handle production_guide as array or string
                    let productionGuide = idea.production_guide || idea.productionGuide || idea.weeklyWorkflow?.schedule || 'Follow standard production workflow'
                    if (Array.isArray(productionGuide)) {
                        productionGuide = productionGuide.join('\n')
                    }

                    // Determine virality badge color
                    const getViralityColor = (score) => {
                        if (score >= 80) return 'bg-green-500'
                        if (score >= 60) return 'bg-yellow-500'
                        return 'bg-orange-500'
                    }

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + index * 0.2 }}
                            className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 hover:border-purple-300 transition-all p-6 md:p-8"
                        >
                            {/* Header with Niche Name and Virality Score */}
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex items-center gap-3 flex-1">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                                        {index + 1}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                                            {nicheName}
                                        </h3>
                                        <p className="text-sm text-gray-500">Niche Idea #{index + 1}</p>
                                    </div>
                                </div>
                                {/* Virality Score Badge */}
                                <div className="flex flex-col items-end gap-1 ml-4">
                                    <div className={`${getViralityColor(viralityScore)} text-white px-4 py-2 rounded-full font-bold text-lg flex items-center gap-2`}>
                                        <Award className="w-5 h-5" />
                                        {viralityScore}
                                    </div>
                                    <span className="text-xs text-gray-500">Virality Score</span>
                                </div>
                            </div>

                            {/* Competition Level */}
                            <div className="mb-6 bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <TrendingUp className="w-5 h-5 text-purple-600" />
                                    <h4 className="font-semibold text-purple-900">Competition Level</h4>
                                </div>
                                <p className="text-purple-800 leading-relaxed">
                                    {competitionLevel}
                                </p>
                            </div>

                            {/* Revenue Potential */}
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <DollarSign className="w-5 h-5 text-green-500" />
                                    <h4 className="font-semibold text-gray-900">Revenue Potential</h4>
                                </div>
                                <p className="text-2xl font-bold text-green-600">
                                    {revenuePotential}
                                </p>
                            </div>

                            {/* Reason for Success */}
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <Sparkles className="w-5 h-5 text-yellow-500" />
                                    <h4 className="font-semibold text-gray-900">Why This Will Succeed</h4>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {reasonForSuccess}
                                </p>
                            </div>

                            {/* Content Source */}
                            <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <FileText className="w-5 h-5 text-blue-600" />
                                    <h4 className="font-semibold text-blue-900">Content Source</h4>
                                </div>
                                <p className="text-blue-800 leading-relaxed">
                                    {contentSource}
                                </p>
                            </div>

                            {/* Tools Needed */}
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <Wrench className="w-5 h-5 text-orange-500" />
                                    <h4 className="font-semibold text-gray-900">Tools Needed</h4>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    {toolsNeeded}
                                </p>
                            </div>

                            {/* Production Guide */}
                            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <h4 className="font-semibold text-gray-900 mb-3">📋 Production Guide</h4>
                                <p className="text-gray-700 leading-relaxed text-sm whitespace-pre-line">
                                    {productionGuide}
                                </p>
                            </div>
                        </motion.div>
                    )
                })}
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
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors"
                    >
                        Generate More Ideas
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default AntigravityResults
