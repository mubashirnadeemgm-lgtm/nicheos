import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, TrendingUp, DollarSign, AlertTriangle, Wrench, FileText, Radar } from 'lucide-react'

const AntigravityResults = ({ ideas }) => {
    // Error boundary: Check if ideas exists
    if (!ideas) {
        return (
            <div className="bg-[#050505] border-2 border-yellow-400/30 rounded-lg p-10 text-center">
                <Radar className="w-16 h-16 text-yellow-400 mx-auto mb-4 animate-pulse" />
                <h3 className="text-xl font-bold text-yellow-400 mb-2 font-mono">WAITING FOR MISSION DATA...</h3>
                <p className="text-gray-400">Stand by while the intelligence is being gathered.</p>
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
                    // Map N8N capitalized keys (priority) with fallbacks to previous formats
                    const nicheName = idea.Niche || idea.niche_name || idea.channelName || `Niche Idea ${index + 1}`
                    const viralityScore = idea.Score || idea.virality_score || idea.viralityScore || 0
                    const competitionLevel = idea.Saturation || idea.competition_level || idea.competitionLevel || 'Not specified'
                    const revenuePotential = idea.Revenue || idea.revenue_potential || idea.revenuePotential || 'Not specified'
                    const reasonForSuccess = idea.Growth || idea.reason_for_success || idea.reasonForSuccess || idea.antigravity || 'High potential niche'
                    const toolsNeeded = idea.Tools || idea.tools_needed || idea.toolsNeeded || 'Basic equipment'

                    // Handle Sub_Niches (can be string or array)
                    let subNiches = idea.Sub_Niches || idea.content_source || idea.contentSource || idea.contentStrategy || 'Create original content'

                    // Determine virality color and percentage
                    const getViralityColor = (score) => {
                        if (score >= 80) return { color: 'text-green-500', bg: 'bg-green-500', ring: 'stroke-green-500' }
                        if (score >= 60) return { color: 'text-yellow-500', bg: 'bg-yellow-500', ring: 'stroke-yellow-500' }
                        return { color: 'text-orange-500', bg: 'bg-orange-500', ring: 'stroke-orange-500' }
                    }

                    const viralityColors = getViralityColor(viralityScore * 10)
                    const scorePercentage = viralityScore * 10 // Convert 0-10 to 0-100

                    // Parse sub-niches into array if string
                    const subNichesArray = typeof subNiches === 'string'
                        ? subNiches.split(',').map(s => s.trim()).filter(Boolean)
                        : Array.isArray(subNiches) ? subNiches : []

                    // Parse tools into array if string
                    const toolsArray = typeof toolsNeeded === 'string'
                        ? toolsNeeded.split(',').map(s => s.trim()).filter(Boolean)
                        : Array.isArray(toolsNeeded) ? toolsNeeded : []

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 + index * 0.1 }}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 overflow-hidden flex flex-col h-[600px]"
                        >
                            {/* Header with Circular Progress Score */}
                            <div className="p-6 border-b border-gray-100 flex items-start justify-between gap-4">
                                <div className="flex-1 min-w-0">
                                    {/* Title - Max 2 lines with ellipsis */}
                                    <h3 className="text-xl font-bold text-gray-900 line-clamp-2 mb-2">
                                        {nicheName}
                                    </h3>
                                    {/* Competition Level Badge */}
                                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">
                                        <TrendingUp className="w-3.5 h-3.5" />
                                        {competitionLevel}
                                    </div>
                                </div>

                                {/* Circular Progress Virality Score */}
                                <div className="flex-shrink-0 relative">
                                    <svg className="w-20 h-20 transform -rotate-90">
                                        {/* Background circle */}
                                        <circle
                                            cx="40"
                                            cy="40"
                                            r="32"
                                            stroke="currentColor"
                                            strokeWidth="6"
                                            fill="none"
                                            className="text-gray-200"
                                        />
                                        {/* Progress circle */}
                                        <circle
                                            cx="40"
                                            cy="40"
                                            r="32"
                                            stroke="currentColor"
                                            strokeWidth="6"
                                            fill="none"
                                            strokeDasharray={`${2 * Math.PI * 32}`}
                                            strokeDashoffset={`${2 * Math.PI * 32 * (1 - scorePercentage / 100)}`}
                                            className={viralityColors.ring}
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                    {/* Score text in center */}
                                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                                        <span className={`text-2xl font-bold ${viralityColors.color}`}>
                                            {viralityScore}
                                        </span>
                                        <span className="text-[10px] text-gray-500 font-medium">/ 10</span>
                                    </div>
                                </div>
                            </div>

                            {/* Card Body - Scrollable content */}
                            <div className="flex-1 overflow-y-auto p-6 space-y-4">
                                {/* Revenue Stat Box - Highlighted */}
                                <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-1">
                                        <DollarSign className="w-4 h-4 text-green-600" />
                                        <span className="text-xs font-semibold text-green-900 uppercase tracking-wide">Revenue Potential</span>
                                    </div>
                                    <p className="text-sm font-medium text-green-800">
                                        {revenuePotential}
                                    </p>
                                </div>

                                {/* Why This Succeeds - 3 lines max */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <Sparkles className="w-4 h-4 text-yellow-500" />
                                        <h4 className="text-sm font-semibold text-gray-900">Why This Succeeds</h4>
                                    </div>
                                    <p className="text-sm text-gray-700 leading-relaxed line-clamp-3">
                                        {reasonForSuccess}
                                    </p>
                                </div>

                                {/* Sub-Niches as Pill Tags */}
                                {subNichesArray.length > 0 && (
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <FileText className="w-4 h-4 text-blue-500" />
                                            <h4 className="text-sm font-semibold text-gray-900">Sub-Niches</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {subNichesArray.slice(0, 6).map((subNiche, idx) => (
                                                <span
                                                    key={idx}
                                                    className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium hover:bg-blue-100 transition-colors cursor-pointer"
                                                >
                                                    {subNiche}
                                                </span>
                                            ))}
                                            {subNichesArray.length > 6 && (
                                                <span className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                                                    +{subNichesArray.length - 6} more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* Tools as Minimal Badges */}
                                {toolsArray.length > 0 && (
                                    <div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <Wrench className="w-4 h-4 text-orange-500" />
                                            <h4 className="text-sm font-semibold text-gray-900">Tools Needed</h4>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {toolsArray.map((tool, idx) => (
                                                <span
                                                    key={idx}
                                                    className="inline-flex items-center px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium"
                                                >
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Footer - Action Area */}
                            <div className="p-4 bg-gray-50 border-t border-gray-100">
                                <button className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-sm hover:shadow-md">
                                    Explore This Niche
                                </button>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </motion.div>
    )
}

export default AntigravityResults
