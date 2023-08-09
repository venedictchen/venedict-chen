import React from 'react';
import { ProjectCardProps } from '@/constant/Project';

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, imageUrl }) => {
    return (
        <div className="w-full md:w-1/2 lg:w-full p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="aspect-w-2 aspect-h-1">
                    <div className="w-full h-full relative">
                        <img
                            src={imageUrl}
                            alt={name}
                            className="object-cover object-center w-full h-full"
                        />
                    </div>
                </div>
                <div className="p-4">
                    <h4 className="text-xl font-semibold mb-2">{name}</h4>
                    <p className="text-gray-700  h-16">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;