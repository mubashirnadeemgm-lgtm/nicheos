import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Sparkles, Loader2, Key, AlertCircle, Save, Check } from 'lucide-react'
import SelectDropdown from './SelectDropdown'
import AntigravityResults from './AntigravityResults'

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

    // API Keys
    const [geminiApiKey, setGeminiApiKey] = useState('')
    const [apiKeySaved, setApiKeySaved] = useState(false)

    // Niche count
    const [nicheCount, setNicheCount] = useState(3)

    // State management
    const [result, setResult] = useState(null)
    const [isGenerating, setIsGenerating] = useState(false)
    const [error, setError] = useState(null)

    // Load saved API key from localStorage on mount
    useEffect(() => {
        const savedKey = localStorage.getItem('gemini_api_key')
        if (savedKey) {
            setGeminiApiKey(savedKey)
            setApiKeySaved(true)
        }
    }, [])

    // Save API key to localStorage
    const handleSaveApiKey = () => {
        if (geminiApiKey.trim()) {
            localStorage.setItem('gemini_api_key', geminiApiKey)
            setApiKeySaved(true)
            setTimeout(() => setApiKeySaved(false), 2000) // Reset after 2 seconds
        }
    }

    const handleGenerate = async () => {
        // Clear previous errors
        setError(null)

        // Get final values (use custom if "define-below" is selected)
        const finalCategory = category === 'define-below' ? customCategory : category
        const finalPresenter = presenter === 'define-below' ? customPresenter : presenter
        const finalTone = tone === 'define-below' ? customTone : tone
        const finalBudget = budget === 'define-below' ? customBudget : budget
        const finalLanguage = language === 'define-below' ? customLanguage : language

        // Validation
        if (!platform || !finalCategory || !audience || !finalPresenter || !finalTone || !finalBudget || !goal || !finalLanguage || !timeCommitment) {
            setError('Please fill in all required fields')
            return
        }

        if (!geminiApiKey.trim()) {
            setError('Gemini API Key is required to generate ideas')
            return
        }

        setIsGenerating(true)
        setResult(null)

        // Construct payload for N8N webhook
        const payload = {
            platform_format: platform,
            category: finalCategory,
            target_audience: audience,
            presenter_style: finalPresenter,
            tone_vibe: finalTone,
            budget: finalBudget,
            goal: goal,
            language: finalLanguage,
            time_commitment: timeCommitment,
            avoided_categories: '', // Can be extended later
            gemini_api_key: geminiApiKey,
            num_niches: nicheCount
        }

        try {
            // POST request to N8N webhook
            const response = await fetch('https://arthor478.app.n8n.cloud/webhook-test/viralspy', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload)
            })

            if (!response.ok) {
                throw new Error(`Webhook error: ${response.status} ${response.statusText}`)
            }

            const data = await response.json()

            console.log('Webhook response:', data)
            console.log('Response type:', typeof data)
            console.log('Is array?', Array.isArray(data))

            // Handle different response structures
            let ideasArray = data

            // If response is an object with an array property, extract it
            if (data && typeof data === 'object' && !Array.isArray(data)) {
                // Try common array property names
                if (Array.isArray(data.ideas)) {
                    ideasArray = data.ideas
                } else if (Array.isArray(data.niches)) {
                    ideasArray = data.niches
                } else if (Array.isArray(data.results)) {
                    ideasArray = data.results
                } else if (Array.isArray(data.data)) {
                    ideasArray = data.data
                } else {
                    // If no array found, try to get the first array property
                    const arrayProp = Object.values(data).find(val => Array.isArray(val))
                    if (arrayProp) {
                        ideasArray = arrayProp
                    }
                }
            }

            console.log('Extracted ideas array:', ideasArray)
            console.log('Ideas array length:', Array.isArray(ideasArray) ? ideasArray.length : 'Not an array')

            // Final validation: Ensure we have a valid array
            if (!Array.isArray(ideasArray)) {
                console.error('Failed to extract array from response')
                throw new Error('Invalid response format: Expected an array of niches')
            }

            if (ideasArray.length === 0) {
                console.warn('Webhook returned empty array')
            }

            // Set the result from webhook response
            setResult(ideasArray)
            setIsGenerating(false)
        } catch (err) {
            console.error('Error calling webhook:', err)

            // Detailed error message
            let errorMessage = 'Failed to generate ideas: '

            if (err.message.includes('Failed to fetch')) {
                errorMessage += 'Network error. Please check your internet connection.'
            } else if (err.message.includes('Webhook error')) {
                errorMessage += 'The webhook returned an error. Please check your API keys.'
            } else if (err.name === 'SyntaxError') {
                errorMessage += 'Invalid response format from webhook. Please check your N8N workflow.'
            } else {
                errorMessage += err.message
            }

            setError(errorMessage)
            setIsGenerating(false)
            setResult(null) // Clear any previous results
        }
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

                    {/* API Keys Section */}
                    <div className="border-t border-gray-200 pt-6 mb-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Key className="w-5 h-5 text-purple-600" />
                            <h3 className="text-lg font-semibold text-gray-900">API Configuration</h3>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Gemini API Key with Save Button */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Gemini API Key <span className="text-red-500">*</span>
                                </label>
                                <div className="flex gap-2">
                                    <input
                                        type="password"
                                        value={geminiApiKey}
                                        onChange={(e) => setGeminiApiKey(e.target.value)}
                                        placeholder="Paste your Gemini API Key here"
                                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent font-mono text-sm"
                                    />
                                    <button
                                        onClick={handleSaveApiKey}
                                        className="px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
                                        title="Save API Key"
                                    >
                                        {apiKeySaved ? (
                                            <Check className="w-4 h-4" />
                                        ) : (
                                            <Save className="w-4 h-4" />
                                        )}
                                    </button>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                    {apiKeySaved ? '✓ API Key saved to browser' : 'Click save to persist your API key'}
                                </p>
                            </div>

                            {/* Number of Niches */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Number of Niches
                                </label>
                                <select
                                    value={nicheCount}
                                    onChange={(e) => setNicheCount(Number(e.target.value))}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                        <option key={num} value={num}>{num} Niche{num > 1 ? 's' : ''}</option>
                                    ))}
                                </select>
                                <p className="text-xs text-gray-500 mt-1">
                                    Select how many niche ideas to generate (1-10)
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Error Display */}
                    {error && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3"
                        >
                            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <p className="text-sm font-medium text-red-900">Error</p>
                                <p className="text-sm text-red-700 mt-1">{error}</p>
                            </div>
                        </motion.div>
                    )}

                    {/* Generate Button */}
                    <motion.button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="w-full py-4 bg-[#FFD700] text-black rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group shadow-lg"
                        whileHover={{ scale: isGenerating ? 1 : 1.02 }}
                        whileTap={{ scale: isGenerating ? 1 : 0.98 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            {isGenerating ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    GENERATING...
                                </>
                            ) : (
                                <>
                                    <Sparkles className="w-5 h-5" />
                                    GENERATE
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
