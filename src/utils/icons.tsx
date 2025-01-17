import React from 'react';

export const Emoji = ({ label, symbol }: { label: string; symbol: string }) => (
    <span
        className="emoji"
        role="img"
        aria-label={label}
        aria-hidden="false"
    >
        {symbol}
    </span>
);

export const SectionIcons = {
    about: '👋',
    skills: '💻',
    projects: '🚀',
    contact: '📬',
    location: '📍',
    email: '📧',
    github: '💻',
    linkedin: '👥',
    twitter: '🐦',
    medium: '✍️',
    trophy: '🏆',
};

export const SkillIcons = {
    mobile: '📱',
    web: '🌐',
    backend: '⚙️',
    database: '🗄️',
    cloud: '☁️',
    tools: '🛠️',
};

export const ProjectIcons = {
    ios: '🍎',
    android: '🤖',
    web: '🌐',
    flutter: '💙',
    writing: '✍️',
};

export const AchievementIcons = {
    trophy: '🏆',
    graduate: '🎓',
    rocket: '🚀',
    star: '⭐',
    heart: '❤️',
};

export const UIIcons = {
    close: '✕',
    menu: '☰',
    external: '↗️',
    check: '✓',
    arrow: '→',
    loading: '⟳',
}; 