import React from 'react';
import profilePic from '../assets/profile.jpg';

interface ProfileImageProps {
  className?: string;
  futurePath?: string;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
  className = '',
  futurePath = '/assets/profile.jpg'
}) => {
  return (
    <div className={`relative flex items-end justify-center w-full max-w-[420px] md:max-w-[480px] lg:max-w-[540px] h-[520px] md:h-[600px] lg:h-[680px] mx-auto select-none ${className}`}>
      {/* Background glow & subtle accent aura */}
      <div 
        className="absolute inset-x-4 bottom-0 top-1/6 rounded-t-full bg-gradient-to-t from-blue-900/50 via-blue-400/20 to-transparent blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Real Photograph Container with cutout styling & bottom fade integration */}
      <div className="relative w-full h-full flex items-end justify-center overflow-hidden z-20">
        <img
          src={profilePic}
          alt="Aryan Shinde — AI/ML Engineer & Full-Stack Developer"
          className="w-full h-full object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.55)] filter contrast-[1.04] brightness-[1.02] transition-transform duration-500 hover:scale-[1.02]"
          referrerPolicy="no-referrer"
          onError={(e) => {
            (e.target as HTMLImageElement).src = futurePath;
          }}
        />
        {/* Subtle bottom gradient to blend cleanly into blue hero base */}
        <div 
          className="absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#285CF6] via-[#285CF6]/60 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};



