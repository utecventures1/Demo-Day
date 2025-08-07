import React from 'react';
import DomusAiLogoComponent  from '../src/assets/logos/domus_ai_w.svg?react';
import BildinLogoComponent from '../src/assets/logos/bildin_w.svg?react';
import TalentumLogoComponent from '../src/assets/logos/talentum_w.svg?react';
import QuixLogoComponent from '../src/assets/logos/quix_w.svg?react';

// Props for any icon component
interface IconProps {
  className?: string;
}

export const UsersIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
    </svg>
);

export const ArrowLeftIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
);

export const PlayIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);


// Placeholder Logos (Updated with new color palette)
export const EcoTrackLogo: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#161B22" stroke="#374151" strokeWidth="4"/>
        <path d="M50 25C60 40 60 60 50 75C40 60 40 40 50 25Z" fill="#330072"/>
        <path d="M50 25C65 50 50 75 50 75" fill="none" stroke="#C491FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const MindWellLogo: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="48" fill="#161B22" stroke="#374151" strokeWidth="4"/>
        <path d="M30 40 C30 20, 70 20, 70 40 C70 60, 50 65, 50 80 C50 65, 30 60, 30 40Z" fill="#330072"/>
        <path d="M50 45 A15 15 0 0 1 65 60" fill="none" stroke="#C491FF" strokeWidth="4" strokeLinecap="round"/>
    </svg>
);

export const DomusAI: React.FC<IconProps> = ({ className }) => {
  return <DomusAiLogoComponent className={className} />;
};

export const Bildin: React.FC<IconProps> = ({ className }) => {
  return <BildinLogoComponent className={className} />;
};

export const talentum: React.FC<IconProps> = ({ className }) => {
  return <TalentumLogoComponent className={className} />;
};

export const quix: React.FC<IconProps> = ({ className }) => {
  return <QuixLogoComponent className={className} />;
};



export const Salud360Logo: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="96" height="96" rx="48" fill="#161B22" stroke="#374151" strokeWidth="4" />
        <path d="M20 50 H 45 L 55 35 L 65 65 L 75 50 H 90" stroke="#E5E7EB" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);




export const LinkedInIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

export const TwitterIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.617l-5.21-6.817-6.044 6.817h-3.308l7.73-8.835-7.995-10.66h6.761l4.611 6.175 5.46-6.175zm-1.161 17.52h1.839l-10.422-14.03h-1.956l10.539 14.03z"/>
    </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
    </svg>
);