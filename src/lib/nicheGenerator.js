// Antigravity Engine - Advanced YouTube Niche Generation
// Generates 3 comprehensive channel ideas based on user profile

const nicheDatabase = {
    'tech-ai': {
        ideas: [
            {
                name: 'AI Tool Hunter',
                concept: 'Testing and reviewing AI tools before they go mainstream',
                antigravity: 'Most AI channels focus on news; tool testing is underserved',
                strategy: 'Weekly tool tests, before/after comparisons, honest reviews',
                monetization: {
                    virality: 'Trending AI tool announcements',
                    affiliate: 'AI tool affiliate programs (high commissions)',
                    brand: 'Become the go-to AI tool authority',
                    community: 'Discord for AI enthusiasts'
                }
            },
            {
                name: 'Code in 60 Seconds',
                concept: 'Ultra-short coding tutorials solving one specific problem',
                antigravity: 'Long tutorials saturated; micro-learning is growing',
                strategy: 'Problem → Solution → Code in under 60 seconds',
                monetization: {
                    virality: 'Solve trending dev problems',
                    affiliate: 'Course and tool recommendations',
                    brand: 'Quick-fix coding expert',
                    community: 'GitHub community'
                }
            },
            {
                name: 'Tech for Grandma',
                concept: 'Explaining complex tech in the simplest way possible',
                antigravity: 'Tech content assumes knowledge; beginners are ignored',
                strategy: 'Use analogies, no jargon, step-by-step visuals',
                monetization: {
                    virality: 'Trending tech explained simply',
                    affiliate: 'Beginner-friendly tech products',
                    brand: 'The tech translator',
                    community: 'Supportive beginner community'
                }
            }
        ]
    },
    'lifestyle-vlogs': {
        ideas: [
            {
                name: 'The $100 Week Challenge',
                concept: 'Living on extreme budgets in different cities',
                antigravity: 'Luxury vlogs are saturated; frugal living is trending',
                strategy: 'Weekly challenges, budget breakdowns, survival tips',
                monetization: {
                    virality: 'Extreme budget challenges',
                    affiliate: 'Budget travel and living products',
                    brand: 'Frugal living expert',
                    community: 'Budget-conscious community'
                }
            },
            {
                name: 'Silent City',
                concept: 'Cinematic city walks with ambient sound, no talking',
                antigravity: 'Commentary vlogs are noisy; ASMR walking is peaceful niche',
                strategy: 'High-quality walking tours, binaural audio, 4K visuals',
                monetization: {
                    virality: 'Unique city locations',
                    affiliate: 'Camera and audio gear',
                    brand: 'Meditative travel content',
                    community: 'Relaxation seekers'
                }
            },
            {
                name: 'Reverse Routine',
                concept: 'Living life in reverse order for productivity experiments',
                antigravity: 'Morning routines are overdone; reverse psychology is fresh',
                strategy: 'Start with night routine, work backwards, track results',
                monetization: {
                    virality: 'Unusual productivity hacks',
                    affiliate: 'Productivity tools and apps',
                    brand: 'Unconventional lifestyle guru',
                    community: 'Productivity experimenters'
                }
            }
        ]
    },
    'gaming': {
        ideas: [
            {
                name: 'Noob to Pro in 30 Days',
                concept: 'Complete beginner learns competitive game from scratch',
                antigravity: 'Pro gameplay is common; learning journeys are relatable',
                strategy: 'Daily progress videos, mistakes shown, coaching sessions',
                monetization: {
                    virality: 'Dramatic improvement stories',
                    affiliate: 'Gaming gear and coaching',
                    brand: 'Relatable gaming journey',
                    community: 'Learning gamers'
                }
            },
            {
                name: 'Game Economics Lab',
                concept: 'Analyzing in-game economies like real-world markets',
                antigravity: 'Gameplay is saturated; economic analysis is unique',
                strategy: 'Market trends, inflation analysis, trading strategies',
                monetization: {
                    virality: 'Game economy crashes/booms',
                    affiliate: 'Trading guides and tools',
                    brand: 'Gaming economist',
                    community: 'Strategic traders'
                }
            },
            {
                name: 'Retro Remix',
                concept: 'Playing classic games with modern speedrun techniques',
                antigravity: 'New games are crowded; retro nostalgia is growing',
                strategy: 'Old games, new strategies, nostalgia + skill',
                monetization: {
                    virality: 'Nostalgic game moments',
                    affiliate: 'Retro gaming equipment',
                    brand: 'Retro speedrun specialist',
                    community: 'Nostalgic gamers'
                }
            }
        ]
    },
    'business-finance': {
        ideas: [
            {
                name: 'Side Hustle Autopsy',
                concept: 'Analyzing failed side hustles to learn what NOT to do',
                antigravity: 'Success stories are common; failure analysis is rare',
                strategy: 'Interview failed entrepreneurs, extract lessons, prevent mistakes',
                monetization: {
                    virality: 'Shocking failure stories',
                    affiliate: 'Business tools and courses',
                    brand: 'Failure prevention expert',
                    community: 'Aspiring entrepreneurs'
                }
            },
            {
                name: 'Salary Negotiation Lab',
                concept: 'Real salary negotiations with expert commentary',
                antigravity: 'Generic advice is common; real examples are scarce',
                strategy: 'Role-play negotiations, breakdown tactics, results tracking',
                monetization: {
                    virality: 'Dramatic negotiation wins',
                    affiliate: 'Career coaching and courses',
                    brand: 'Negotiation specialist',
                    community: 'Career advancers'
                }
            },
            {
                name: 'Micro-Investing Daily',
                concept: 'Investing $1-$10 daily and tracking long-term results',
                antigravity: 'Big investment channels intimidate; micro is accessible',
                strategy: 'Daily small investments, compound tracking, beginner-friendly',
                monetization: {
                    virality: 'Surprising compound results',
                    affiliate: 'Investment apps and platforms',
                    brand: 'Accessible investing advocate',
                    community: 'Beginner investors'
                }
            }
        ]
    },
    'health-fitness': {
        ideas: [
            {
                name: 'Desk Warrior Fitness',
                concept: '5-minute workouts designed for office workers',
                antigravity: 'Gym content is saturated; desk exercises are underserved',
                strategy: 'No equipment, office-friendly, quick results',
                monetization: {
                    virality: 'Office transformation stories',
                    affiliate: 'Desk fitness equipment',
                    brand: 'Corporate wellness expert',
                    community: 'Office workers'
                }
            },
            {
                name: 'Food Forensics',
                concept: 'Investigating what\'s really in popular foods',
                antigravity: 'Recipe channels are common; food investigation is unique',
                strategy: 'Ingredient deep-dives, lab tests, health impacts',
                monetization: {
                    virality: 'Shocking food revelations',
                    affiliate: 'Health food products',
                    brand: 'Food truth advocate',
                    community: 'Health-conscious eaters'
                }
            },
            {
                name: 'Sleep Hacker',
                concept: 'Experimenting with sleep optimization techniques',
                antigravity: 'Workout content is crowded; sleep optimization is growing',
                strategy: 'Weekly sleep experiments, data tracking, results analysis',
                monetization: {
                    virality: 'Unusual sleep hacks',
                    affiliate: 'Sleep products and trackers',
                    brand: 'Sleep optimization expert',
                    community: 'Sleep-deprived audience'
                }
            }
        ]
    },
    'faceless-motivation': {
        ideas: [
            {
                name: 'Stoic Shorts',
                concept: 'Ancient Stoic wisdom applied to modern problems',
                antigravity: 'Generic motivation is saturated; philosophy is timeless',
                strategy: 'Stoic quotes + modern scenarios, cinematic visuals',
                monetization: {
                    virality: 'Relatable modern struggles',
                    affiliate: 'Philosophy books and courses',
                    brand: 'Modern Stoic teacher',
                    community: 'Philosophy seekers'
                }
            },
            {
                name: 'Failure Highlight Reel',
                concept: 'Celebrating famous failures before success',
                antigravity: 'Success stories are common; failure normalization is needed',
                strategy: 'Historical failures, modern examples, inspiring comebacks',
                monetization: {
                    virality: 'Surprising failure stories',
                    affiliate: 'Personal development products',
                    brand: 'Resilience advocate',
                    community: 'Struggling achievers'
                }
            },
            {
                name: 'The 1% Rule',
                concept: 'Tiny daily improvements tracked over time',
                antigravity: 'Big transformations intimidate; small steps are achievable',
                strategy: 'Daily 1% improvement challenges, long-term tracking',
                monetization: {
                    virality: 'Dramatic long-term results',
                    affiliate: 'Habit tracking apps',
                    brand: 'Incremental growth expert',
                    community: 'Consistent improvers'
                }
            }
        ]
    }
}

export function generateAntigravityIdeas(config) {
    const {
        platform,
        category,
        audience,
        presenter,
        tone,
        budget,
        goal,
        language = 'english',
        timeCommitment = 'medium',
        avoidTopics = []
    } = config

    const categoryIdeas = nicheDatabase[category]?.ideas || []

    // Generate 3 customized ideas
    const ideas = categoryIdeas.map((idea, index) => {
        return {
            channelName: customizeChannelName(idea.name, audience, language),
            concept: idea.concept,
            antigravity: idea.antigravity,
            contentStrategy: generateContentStrategy(idea.strategy, presenter, budget, timeCommitment, platform),
            monetization: idea.monetization[goal] || idea.monetization.brand,
            firstVideoIdea: generateFirstVideoIdea(category, tone, language),
            weeklyWorkflow: generateWeeklyWorkflow(timeCommitment, presenter, budget)
        }
    })

    return ideas
}

function customizeChannelName(baseName, audience, language) {
    const audienceModifiers = {
        'gen-z': ' HQ',
        'millennials': ' Pro',
        'kids-family': ' Family',
        'universal': ''
    }

    const languageModifiers = {
        'urdu': ' اردو',
        'punjabi': ' ਪੰਜਾਬੀ',
        'hindi': ' हिंदी',
        'english': ''
    }

    return baseName + (audienceModifiers[audience] || '') + (languageModifiers[language] || '')
}

function generateContentStrategy(baseStrategy, presenter, budget, timeCommitment, platform) {
    let strategy = baseStrategy

    // Adjust for presenter style
    if (presenter === 'faceless-voiceover') {
        strategy += '. Use stock footage or screen recordings with professional voiceover.'
    } else if (presenter === 'ai-avatar') {
        strategy += '. Create AI avatar presenter for consistent branding.'
    } else if (presenter === 'text-asmr') {
        strategy += '. Use text animations with calming background music.'
    }

    // Adjust for budget
    if (budget === 'zero') {
        strategy += ' Film on smartphone, edit with free apps like CapCut.'
    } else if (budget === 'high') {
        strategy += ' Use professional camera, lighting, and editing software.'
    }

    // Adjust for platform
    const platformTips = {
        'youtube-shorts': ' Keep under 60 seconds, vertical format, hook in first 3 seconds.',
        'long-form': ' Aim for 8-15 minutes, chapters, strong intro/outro.',
        'instagram-reels': ' 15-30 seconds, trending audio, text overlays.',
        'linkedin-video': ' Professional tone, 1-3 minutes, value-first approach.'
    }

    strategy += platformTips[platform] || ''

    return strategy
}

function generateFirstVideoIdea(category, tone, language) {
    const hooks = {
        'tech-ai': {
            humorous: 'I asked AI to plan my entire day... it went terribly wrong',
            serious: 'The AI tool that will replace 50% of jobs in 2026',
            relaxing: 'Peaceful coding session: Building an AI app from scratch',
            'high-energy': 'I tested 10 AI tools in 10 minutes - HERE\'S THE WINNER!'
        },
        'lifestyle-vlogs': {
            humorous: 'I lived on $5 a day for a week... here\'s what happened',
            serious: 'The minimalist lifestyle nobody talks about',
            relaxing: 'A quiet day in my simple life',
            'high-energy': '24 HOURS IN THE CHEAPEST CITY IN THE WORLD!'
        },
        'gaming': {
            humorous: 'I tried speedrunning as a complete noob... embarrassing',
            serious: 'The economics of Fortnite\'s in-game market explained',
            relaxing: 'Chill retro gaming: Super Mario 64 nostalgia',
            'high-energy': 'NOOB TO PRO IN 24 HOURS - DAY 1 CHALLENGE!'
        },
        'business-finance': {
            humorous: 'My side hustle failed in 3 days... here\'s why',
            serious: 'The salary negotiation mistake costing you $50k',
            relaxing: 'Building wealth slowly: My $5 daily investment journey',
            'high-energy': 'I MADE $1000 IN ONE WEEK - HERE\'S EXACTLY HOW!'
        },
        'health-fitness': {
            humorous: 'I tried every desk workout... my coworkers thought I was crazy',
            serious: 'What\'s really in your protein powder? Lab results',
            relaxing: 'Gentle morning stretches for better sleep',
            'high-energy': '5-MINUTE OFFICE WORKOUT THAT CHANGED MY LIFE!'
        },
        'faceless-motivation': {
            humorous: 'Stoic philosophy vs. modern dating... surprisingly useful',
            serious: 'How Marcus Aurelius would handle your problems',
            relaxing: 'Daily wisdom for a calmer mind',
            'high-energy': 'THE 1% RULE THAT WILL CHANGE EVERYTHING!'
        }
    }

    return hooks[category]?.[tone] || 'Your first viral video idea'
}

function generateWeeklyWorkflow(timeCommitment, presenter, budget) {
    const workflows = {
        'low': {
            hours: '0-5 hours/week',
            schedule: 'Film 1 video on weekend (1-2 hours), edit in 30-min sessions, post 1x/week',
            tips: 'Batch record multiple videos, use templates, repurpose content'
        },
        'medium': {
            hours: '5-15 hours/week',
            schedule: 'Film 2-3 videos (3-4 hours), edit (4-6 hours), engage with audience (2-3 hours), post 2-3x/week',
            tips: 'Create content calendar, engage daily, analyze metrics weekly'
        },
        'high': {
            hours: '15+ hours/week',
            schedule: 'Daily filming (1-2 hours), daily editing (2-3 hours), community management (1-2 hours), post daily',
            tips: 'Treat as part-time job, invest in tools, build team eventually'
        }
    }

    return workflows[timeCommitment] || workflows['medium']
}
