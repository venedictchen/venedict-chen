import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/constant/Project';

const ProjectsSection = () => {
    return (
        <section id='project'>
            <div className='bg-[#283845] md:py-10 flex flex-col md:flex-row
         items-center md:justify-between'>
                <div className="w-full  mt-20 px-5 md:px-28 py-10 mx-auto md:w-[90%]">
                    <h3 className='text-5xl text-white mb-6'>Projects</h3>
                    <div className="flex flex-wrap -mx-4">
                        {projects.map((project, index) => (
                            <div key={index} className="w-full md:w-1/2
                        lg:w-1/3 xl:w-1/4 px-2 mb-4">
                                <ProjectCard
                                    name={project.name}
                                    description={project.description}
                                    imageUrl={project.image}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
