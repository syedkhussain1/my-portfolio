
import React from 'react';
import { Experience } from '@/config/portfolioConfig';
import { Plus } from 'lucide-react';

interface PixelExperienceItemProps {
  experience: Experience;
}

const PixelExperienceItem: React.FC<PixelExperienceItemProps> = ({ experience }) => {
  return (
    <div className="mb-4 border-b border-gray-800 pb-2">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-pixel text-xs text-pixel-cyan mb-1">{experience.title}</h3>
          <p className="font-mono text-xs mb-1">{experience.company}</p>
        </div>
        <div className="text-right">
          <p className="font-mono text-xs mb-1">{experience.location}</p>
          <p className="font-mono text-xs text-gray-400">{experience.period}</p>
        </div>
      </div>
    </div>
  );
};

export default PixelExperienceItem;
