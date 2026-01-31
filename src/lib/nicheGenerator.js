// Niche Generation Algorithm
// This generates unique channel identities based on user selections

const nicheDatabase = {
    'tech-ai': {
        names: ['TechBytes', 'AI Insights', 'CodeCraft', 'Digital Frontier', 'Neural Network'],
        hooks: [
            'I tested 10 AI tools so you don\'t have to',
            'This AI will change everything in 2026',
            'The truth about AI nobody talks about',
        ],
    },
    'lifestyle-vlogs': {
        names: ['Daily Dose', 'Life Unfiltered', 'The Real Story', 'Everyday Magic', 'Vibe Check'],
        hooks: [
            'A day in my life that changed everything',
            'What nobody tells you about this lifestyle',
            'I tried living like this for 30 days',
        ],
    },
    'gaming': {
        names: ['GameVault', 'Pro Plays', 'Level Up', 'Gaming Arena', 'Quest Master'],
        hooks: [
            'This strategy got me to top 1%',
            'The most broken build in the game',
            'I spent 100 hours testing this',
        ],
    },
    'business-finance': {
        names: ['Wealth Wisdom', 'Money Moves', 'Finance First', 'Capital Growth', 'Business Brain'],
        hooks: [
            'How I made $10k with this simple strategy',
            'The investment everyone is missing',
            '5 money mistakes keeping you broke',
        ],
    },
    'health-fitness': {
        names: ['FitLife', 'Wellness Way', 'Strong Mind', 'Health Hub', 'Peak Performance'],
        hooks: [
            'I lost 20 pounds doing this one thing',
            'The workout that actually works',
            'What trainers don\'t want you to know',
        ],
    },
    'faceless-motivation': {
        names: ['Mindset Shift', 'Rise Daily', 'Success Path', 'Motivation Station', 'Growth Mode'],
        hooks: [
            'This mindset changed my entire life',
            'The one habit that separates winners',
            'Stop wasting your potential',
        ],
    },
}

const audienceModifiers = {
    'gen-z': ' | Fast & Viral',
    'millennials': ' Pro',
    'kids-family': ' Family',
    'universal': ' Global',
}

const presenterInsights = {
    'on-camera': 'Personal connection drives engagement',
    'faceless-voiceover': 'Lower barrier to entry, focus on content',
    'ai-avatar': 'Scalable and consistent production',
    'text-asmr': 'Minimal equipment, high retention',
}

const toneInsights = {
    'humorous': 'Entertainment value increases shareability',
    'serious': 'Authority building for long-term trust',
    'relaxing': 'High watch time and loyal audience',
    'high-energy': 'Maximum engagement and virality',
}

const budgetInsights = {
    'zero': 'Start immediately with what you have',
    'low': 'Basic quality with room to grow',
    'high': 'Professional quality from day one',
}

const goalInsights = {
    'virality': 'Focus on trending topics and hooks',
    'affiliate': 'Product reviews and recommendations',
    'brand': 'Consistent posting and unique voice',
    'community': 'Engagement and interaction priority',
}

const monetizationRatings = {
    'tech-ai': { virality: 4, affiliate: 5, brand: 5, community: 4 },
    'lifestyle-vlogs': { virality: 5, affiliate: 4, brand: 5, community: 5 },
    'gaming': { virality: 5, affiliate: 4, brand: 4, community: 5 },
    'business-finance': { virality: 3, affiliate: 5, brand: 5, community: 4 },
    'health-fitness': { virality: 4, affiliate: 5, brand: 5, community: 4 },
    'faceless-motivation': { virality: 5, affiliate: 3, brand: 4, community: 3 },
}

export function generateNiche(config) {
    const { platform, category, audience, presenter, tone, budget, goal } = config

    // Get category data
    const categoryData = nicheDatabase[category]

    // Generate channel name
    const baseName = categoryData.names[Math.floor(Math.random() * categoryData.names.length)]
    const channelName = baseName + (audienceModifiers[audience] || '')

    // Generate niche definition
    const nicheDefinition = generateNicheDefinition(category, audience, presenter, tone, platform)

    // Get viral hook
    const viralHook = categoryData.hooks[Math.floor(Math.random() * categoryData.hooks.length)]

    // Calculate monetization rating
    const monetizationRating = monetizationRatings[category][goal] || 3

    // Generate insights
    const insights = [
        presenterInsights[presenter],
        toneInsights[tone],
        budgetInsights[budget],
        goalInsights[goal],
    ]

    return {
        channelName,
        nicheDefinition,
        viralHook,
        monetizationRating,
        insights,
    }
}

function generateNicheDefinition(category, audience, presenter, tone, platform) {
    const categoryNames = {
        'tech-ai': 'technology and AI',
        'lifestyle-vlogs': 'lifestyle and daily experiences',
        'gaming': 'gaming',
        'business-finance': 'business and finance',
        'health-fitness': 'health and fitness',
        'faceless-motivation': 'motivational content',
    }

    const audienceNames = {
        'gen-z': 'Gen Z viewers seeking fast-paced',
        'millennials': 'professional millennials interested in',
        'kids-family': 'families looking for',
        'universal': 'a broad audience passionate about',
    }

    const presenterStyles = {
        'on-camera': 'with a personal, face-to-camera approach',
        'faceless-voiceover': 'using engaging voiceover narration',
        'ai-avatar': 'leveraging AI avatar technology',
        'text-asmr': 'through text overlays and ASMR elements',
    }

    const toneStyles = {
        'humorous': 'delivered with humor and entertainment',
        'serious': 'presented with educational depth',
        'relaxing': 'crafted for relaxation and calm',
        'high-energy': 'packed with high-energy excitement',
    }

    const platformFormats = {
        'youtube-shorts': 'optimized for YouTube Shorts',
        'long-form': 'designed for long-form YouTube content',
        'instagram-reels': 'tailored for Instagram Reels',
        'linkedin-video': 'professional LinkedIn video format',
    }

    return `Create ${categoryNames[category]} content for ${audienceNames[audience]} ${categoryNames[category]}, ${presenterStyles[presenter]}, ${toneStyles[tone]}, ${platformFormats[platform]}.`
}
