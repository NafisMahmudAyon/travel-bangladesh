'use client'
import React from 'react';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  centered = false,
  light = false
}) => {
  return (
    <div className={`mb-10 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <span className={`inline-block py-0.5 px-3 mb-2 rounded text-sm font-medium ${light ? 'bg-white/20 text-white' : 'bg-forest/10 text-forest'
          }`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-bold ${light ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
