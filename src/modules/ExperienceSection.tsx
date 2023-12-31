import React from 'react';
import { experienceData } from '@/constant/Experience';

const ExperienceSection = () => {

  return (
    <section id='experience'>
      <div className='bg-[#283845] md:py-10 flex flex-col md:flex-row items-center md:justify-between'>
        <div className="w-full px-5 md:mx-40 mt-32 md:mt-28 md:w-3/4 lg:w-2/3 xl:w-1/2">
          <h3 className='text-5xl  text-white mb-6'>Experience</h3>
          <div className="space-y-8">
            {experienceData.map((experience, index) => (
              <div key={index} className="border-t ml-2 border-white pt-6">
                <p className="text-md text-gray-300 mb-1">{experience.period}</p>
                <p className="text-lg text-white mb-2 font-bold">
                  {experience.position}{" "}
                  {experience.url && (
                    <a
                      href={experience.url}
                      className="text-blue-500 transition duration-300 hover:underline"
                      target="_blank"
                    >
                      @{experience.company}
                    </a>
                  )}
                </p>
                <ul className="text-gray-300 list-disc pl-6">
                  {experience.achievements.map((achievement, index) => (
                    <li key={index}>{achievement.title}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
