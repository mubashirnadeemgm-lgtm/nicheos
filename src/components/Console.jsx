import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Sparkles, Loader2 } from 'lucide-react'
import SelectDropdown from './SelectDropdown'
import ResultCard from './ResultCard'
import { generateNiche } from '../lib/nicheGenerator'

const Console = ({ onBack }) => {
    const [platform, setPlatform] = useState('')
    const [category, setCategory] = useState('')
    const [audience, setAudience] = useState('')
    const [presenter, setPresenter] = useState('')
    const [tone, setTone] = useState('')
    const [budget, setBudget] = useState('')
    const [goal, setGoal] = useState('')
    const [result, setResult] = useState(null)
    const [isGenerating, setIsGenerating] = useState(false)

    const handleGenerate = () => {
        if (!platform || !category || !audience || !presenter || !tone || !budget || !goal) {
            alert('Please fill in all fields')
            return
        }

        setIsGenerating(true)
        setResult(null)

        // Simulate processing time
        setTimeout(() => {
            const generatedNiche = generateNiche({
                platform,
                category,
                audience,
                presenter,
                tone,
                budget,
                goal,
            })
            setResult(generatedNiche)
            setIsGenerating(false)
        }, 2000)
    }

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-br from-gray-50 to-white p-4 md:p-8"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-5xl mx-auto">
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
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        NicheOS Console
                    </h1>
                    <div className="w-20" /> {/* Spacer for centering */}
                </motion.div>

                {/* Console Panel */}
                <motion.div
                    className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 md:p-8 mb-8"
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.4 }}
                >
                    {/* Platform Format */}
                    <div className="mb-8">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                            Platform Format
                        </label>
                        <SelectDropdown
                            value={platform}
                            onChange={setPlatform}
                            options={[
                                { value: 'youtube-shorts', label: 'YouTube Shorts (9:16)' },
                                { value: 'long-form', label: 'Long Form (16:9)' },
                                { value: 'instagram-reels', label: 'Instagram Reels' },
                                { value: 'linkedin-video', label: 'LinkedIn Video' },
                            ]}
                            placeholder="Select platform format"
                        />
                    </div>

                    {/* Grid of Options */}
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {/* Category */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                                Category
                            </label>
                            <SelectDropdown
                                value={category}
                                onChange={setCategory}
                                options={[
                                    { value: 'tech-ai', label: 'Tech & AI' },
                                    { value: 'lifestyle-vlogs', label: 'Lifestyle & Vlogs' },
                                    { value: 'gaming', label: 'Gaming' },
                                    { value: 'business-finance', label: 'Business & Finance' },
                                    { value: 'health-fitness', label: 'Health & Fitness' },
                                    { value: 'faceless-motivation', label: 'Faceless Motivation' },
                                ]}
                                placeholder="Select category"
                            />
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
                                ]}
                                placeholder="Select presenter style"
                            />
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
                                ]}
                                placeholder="Select tone"
                            />
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
                                ]}
                                placeholder="Select budget"
                            />
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
                                ]}
                                placeholder="Select goal"
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
                                    Computing...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-5 h-5" />
                                    GENERATE IDENTITY
                                </>
                            )}
                        </span>
                    </motion.button>
                </motion.div>

                {/* Result Card */}
                {result && <ResultCard result={result} />}
            </div>
        </motion.div>
    )
}

export default Console
