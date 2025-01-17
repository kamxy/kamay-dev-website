export const PERSONAL_DATA = {
    name: 'Mehmet Kamay',
    title: 'Software Developer',
    location: 'Istanbul, Turkey',
    email: 'mehmet@kamay.dev',
    education: 'Computer Engineering',
    experience: '4+ years of experience in mobile and web development',
    achievement: 'Winner of Google DSC Mobile Hackathon',
};

export const SOCIAL_LINKS = {
    github: 'https://github.com/kamxy',
    linkedin: 'https://linkedin.com/in/mehmetkamay',
    twitter: 'https://twitter.com/kamaymehmet',
    medium: 'https://medium.com/@builtwithswift',
};

export const PROJECTS = [
    {
        title: 'PDF Resume Creator',
        description: 'iOS application for creating professional resumes with customizable templates',
        image: '/projects/pdf-resume.jpg',
        technologies: ['Swift', 'iOS', 'UIKit', 'PDF Generation'],
        category: 'iOS',
        liveUrl: 'https://apps.apple.com/app/pdf-resume-creator',
        appStore: true,
    },
    {
        title: 'Lilio Health',
        description: 'Health and wellness application available on Google Play Store',
        image: '/projects/lilio-health.jpg',
        technologies: ['Flutter', 'Dart', 'Firebase', 'Health APIs'],
        category: 'Flutter',
        liveUrl: 'https://play.google.com/store/apps/details?id=com.liliohealth',
        playStore: true,
    },
    {
        title: 'App Revenue',
        description: 'Platform for tracking and analyzing app revenue metrics',
        image: '/projects/app-revenue.jpg',
        technologies: ['Swift', 'iOS', 'Analytics', 'Revenue Tracking'],
        category: 'iOS',
        liveUrl: 'https://apprevenue.co',
        website: true,
    },
    {
        title: 'Built with Swift',
        description: 'Technical writing and tutorials about Swift and iOS development',
        image: '/projects/built-with-swift.jpg',
        technologies: ['Swift', 'iOS', 'SwiftUI', 'Technical Writing'],
        category: 'Writing',
        liveUrl: 'https://medium.com/@buildwithswift',
        website: true,
    },
    {
        title: 'Portfolio Website',
        description: 'Personal portfolio website built with Next.js and TailwindCSS',
        image: '/projects/portfolio.jpg',
        technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
        category: 'Web',
        githubUrl: 'https://github.com/mehmetkamay/portfolio',
        website: true,
    },
    {
        title: 'iOS Development Blog',
        description: 'Sharing knowledge and experiences about iOS development',
        image: '/projects/ios-blog.jpg',
        technologies: ['Swift', 'iOS', 'Technical Writing'],
        category: 'Writing',
        liveUrl: 'https://twitter.com/buildwithswift',
        website: true,
    }
];

export const PROJECT_CATEGORIES = ['All', 'iOS', 'Flutter', 'Web', 'Writing'];

export const SKILLS = [
    {
        category: 'Mobile Development',
        items: ['Swift', 'SwiftUI', 'Flutter', 'iOS Development', 'Android Development'],
    },
    {
        category: 'Backend & Cloud',
        items: ['Firebase', 'SQL', 'RESTful APIs', 'Node.js', 'MongoDB'],
    },
    {
        category: 'Tools & Platforms',
        items: ['Git', 'App Store Connect', 'Google Play Console', 'CI/CD'],
    },
    {
        category: 'Languages',
        items: ['Swift', 'Dart', 'JavaScript', 'TypeScript', 'SQL'],
    },
];

export const ACHIEVEMENTS = [
    {
        icon: '🏆',
        text: 'Winner of Google DSC Mobile Hackathon',
    },
    {
        icon: '🎓',
        text: 'Computer Science M.Sc. Graduate',
    },
    {
        icon: '📱',
        text: 'Multiple successful app launches on App Store and Google Play',
    },
    {
        icon: '✍️',
        text: 'Technical writer on Medium (@buildwithswift)',
    },
]; 