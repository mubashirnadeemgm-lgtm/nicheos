import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Sparkles, Loader2 } from 'lucide-react'
import SelectDropdown from './SelectDropdown'
import AntigravityResults from './AntigravityResults'
import { generateAntigravityIdeas } from '../lib/nicheGenerator'

const Console = ({ onBack }) => {
    const [platform, setPlatform] = useState('')
    const [category, setCategory] = useState('')
    const [customCategory, setCustomCategory] = useState('')
    const [audience, setAudience] = useState('')
    const [presenter, setPresenter] = useState('')
    const [customPresenter, setCustomPresenter] = useState('')
    const [tone, setTone] = useState('')
    const [customTone, setCustomTone] = useState('')
    const [budget, setBudget] = useState('')
    const [customBudget, setCustomBudget] = useState('')
    const [goal, setGoal] = useState('')
    const [language, setLanguage] = useState('')
    const [customLanguage, setCustomLanguage] = useState('')
    const [timeCommitment, setTimeCommitment] = useState('')
    const [result, setResult] = useState(null)
    const [isGenerating, setIsGenerating] = useState(false)

    const handleGenerate = () => {
        // Get final values (use custom if "define-below" is selected)
        const finalCategory = category === 'define-below' ? customCategory : category
        const finalPresenter = presenter === 'define-below' ? customPresenter : presenter
        const finalTone = tone === 'define-below' ? customTone : tone
        const finalBudget = budget === 'define-below' ? customBudget : budget
        const finalLanguage = language === 'define-below' ? customLanguage : language

        if (!platform || !finalCategory || !audience || !finalPresenter || !finalTone || !finalBudget || !goal || !finalLanguage || !timeCommitment) {
            alert('Please fill in all required fields')
            return
        }

        setIsGenerating(true)
        setResult(null)

        // Simulate Antigravity Engine processing
        setTimeout(() => {
            const generatedIdeas = generateAntigravityIdeas({
                platform,
                category: finalCategory,
                audience,
                presenter: finalPresenter,
                tone: finalTone,
                budget: finalBudget,
                goal,
                language: finalLanguage,
                timeCommitment,
            })
            setResult(generatedIdeas)
            setIsGenerating(false)
        }, 2500)
    }

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 md:p-8"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    className="mb-8 flex items-center justify-between"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        <span className="text-sm font-medium">Back</span>
                    </button>
                    <div className="text-center">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Antigravity Engine
                        </h1>
                        <p className="text-sm text-gray-500 mt-1">YouTube Growth Strategist</p>
                    </div>
                    <div className="w-20" /> {/* Spacer */}
                </motion.div>

                {/* Console Panel */}
                <motion.div
                    className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8 mb-8"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                >
                    {/* Platform Format */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Platform Format
                        </label>
                        <SelectDropdown
                            value={platform}
                            onChange={setPlatform}
                            options={[
                                { value: 'youtube-shorts', label: 'YouTube Shorts (9:16)' },
                                { value: 'long-form', label: 'Long Form (16:9)' },
                            ]}
                            placeholder="Select platform format"
                        />
                    </div>

                    {/* Grid of Options - 3 columns */}
                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Category
                            </label>
                            <SelectDropdown
                                value={category}
                                onChange={setCategory}
                                options={[
                                    { value: 'tech', label: 'Tech' },
                                    { value: 'ai', label: 'AI' },
                                    { value: 'lifestyle-vlogs', label: 'Lifestyle & Vlogs' },
                                    { value: 'gaming', label: 'Gaming' },
                                    { value: 'business-finance', label: 'Business & Finance' },
                                    { value: 'health-fitness', label: 'Health & Fitness' },
                                    { value: 'motivation', label: 'Motivation' },
                                    { value: 'define-below', label: 'Define Below' },
                                ]}
                                placeholder="Select category"
                            />
                            {category === 'define-below' && (
                                <motion.input
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    type="text"
                                    value={customCategory}
                                    onChange={(e) => setCustomCategory(e.target.value)}
                                    placeholder="Enter your category..."
                                    className="mt-3 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            )}
                        </div>

                        {/* Target Audience */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Target Audience
                            </label>
                            <SelectDropdown
                                value={audience}
                                onChange={setAudience}
                                options={[
                                    { value: 'gen-z', label: 'Gen Z (Fast paced)' },
                                    { value: 'millennials', label: 'Millennials (Professional)' },
                                    { value: 'kids-family', label: 'Kids/Family' },
                                    { value: 'universal', label: 'Universal' },
                                ]}
                                placeholder="Select audience"
                            />
                        </div>

                        {/* Presenter Style */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Presenter Style
                            </label>
                            <SelectDropdown
                                value={presenter}
                                onChange={setPresenter}
                                options={[
                                    { value: 'on-camera', label: 'On-Camera Personality' },
                                    { value: 'faceless-voiceover', label: 'Faceless Voiceover' },
                                    { value: 'ai-avatar', label: 'AI Avatar' },
                                    { value: 'text-asmr', label: 'Text/ASMR Only' },
                                    { value: 'define-below', label: 'Define Below' },
                                ]}
                                placeholder="Select presenter style"
                            />
                            {presenter === 'define-below' && (
                                <motion.input
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    type="text"
                                    value={customPresenter}
                                    onChange={(e) => setCustomPresenter(e.target.value)}
                                    placeholder="Enter your presenter style..."
                                    className="mt-3 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            )}
                        </div>

                        {/* Tone/Vibe */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Tone/Vibe
                            </label>
                            <SelectDropdown
                                value={tone}
                                onChange={setTone}
                                options={[
                                    { value: 'humorous', label: 'Humorous/Entertaining' },
                                    { value: 'serious', label: 'Serious/Educational' },
                                    { value: 'relaxing', label: 'Relaxing/Calm' },
                                    { value: 'high-energy', label: 'High Energy/Hype' },
                                    { value: 'define-below', label: 'Define Below' },
                                ]}
                                placeholder="Select tone"
                            />
                            {tone === 'define-below' && (
                                <motion.input
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    type="text"
                                    value={customTone}
                                    onChange={(e) => setCustomTone(e.target.value)}
                                    placeholder="Enter your tone/vibe..."
                                    className="mt-3 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            )}
                        </div>

                        {/* Budget/Resources */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Budget/Resources
                            </label>
                            <SelectDropdown
                                value={budget}
                                onChange={setBudget}
                                options={[
                                    { value: 'zero', label: '$0 (Smartphone only)' },
                                    { value: 'low', label: 'Low Budget (Basic PC)' },
                                    { value: 'high', label: 'High Production (Studio Quality)' },
                                    { value: 'define-below', label: 'Define Below' },
                                ]}
                                placeholder="Select budget"
                            />
                            {budget === 'define-below' && (
                                <motion.input
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    type="text"
                                    value={customBudget}
                                    onChange={(e) => setCustomBudget(e.target.value)}
                                    placeholder="Enter your budget/resources..."
                                    className="mt-3 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            )}
                        </div>

                        {/* Goal */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Goal
                            </label>
                            <SelectDropdown
                                value={goal}
                                onChange={setGoal}
                                options={[
                                    { value: 'virality', label: 'Quick Virality' },
                                    { value: 'affiliate', label: 'Affiliate Income' },
                                    { value: 'brand', label: 'Brand Building' },
                                    { value: 'community', label: 'Community' },
                                    { value: 'income', label: 'Income' },
                                ]}
                                placeholder="Select goal"
                            />
                        </div>

                        {/* Language */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Language
                            </label>
                            <SelectDropdown
                                value={language}
                                onChange={setLanguage}
                                options={[
                                    { value: 'english', label: 'English' },
                                    { value: 'urdu', label: 'Urdu (اردو)' },
                                    { value: 'punjabi', label: 'Punjabi (ਪੰਜਾਬੀ)' },
                                    { value: 'hindi', label: 'Hindi (हिंदी)' },
                                    { value: 'define-below', label: 'Define Below' },
                                ]}
                                placeholder="Select language"
                            />
                            {language === 'define-below' && (
                                <motion.input
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    type="text"
                                    value={customLanguage}
                                    onChange={(e) => setCustomLanguage(e.target.value)}
                                    placeholder="Enter your language..."
                                    className="mt-3 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                            )}
                        </div>

                        {/* Time Commitment */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Time Commitment
                            </label>
                            <SelectDropdown
                                value={timeCommitment}
                                onChange={setTimeCommitment}
                                options={[
                                    { value: 'low', label: '0-5 hours/week' },
                                    { value: 'medium', label: '5-15 hours/week' },
                                    { value: 'high', label: '15+ hours/week' },
                                ]}
                                placeholder="Select time commitment"
                            />
                        </div>
                    </div>

                    {/* Generate Button */}
                    <motion.button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="w-full py-4 bg-black text-white rounded-lg font-semibold text-lg hover:bg-gray-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                        whileHover={{ scale: isGenerating ? 1 : 1.02 }}
                        whileTap={{ scale: isGenerating ? 1 : 0.98 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-gray-700 to-black opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            {isGenerating ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Antigravity Engine Computing...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-5 h-5" />
                                    GENERATE 3 CHANNEL IDEAS
                                </>
                            )}
                        </span>
                    </motion.button>
                </motion.div>

                {/* Results */}
                {result && <AntigravityResults ideas={result} />}
            </div>
        </motion.div>
    )
}

export default Console
