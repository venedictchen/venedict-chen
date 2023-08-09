import React, { ReactNode } from 'react';

export interface ProjectCardProps {
  name: string;
  description: string;
  imageUrl: string;
  icon?: ReactNode; // Define icon as a ReactNode type
}

export const projects = [
    {
      name: "LPJ PTI",
      description:
        "BEM Fasilkom UI Online Accountability Report Website",
      url: "",
      image:
      "https://drive.google.com/uc?export=view&id=1bTzvSobqxS9wSOQKGeXc7iXRHmNljZNX",
    },  
    {
        name: "Best Staff PTI",
        description:
          "BEM Fasilkom UI Best Staff Online Voting Website",
        url: "",
        image:
          "https://drive.google.com/uc?export=view&id=1nQRuG_Clz6Jxflu7--bhinFgxun-2cAb",
      },  
      {
        name: "Salam Justitia",
        description:
          "Best Friends That Consist of Great People, Let's Graduate Together Guys",
        url: "",
        image:
          "https://drive.google.com/uc?export=view&id=1gHY7VDW3PqFn9dN_TRTgWBJeb-ghAH_7",
      },  
      {
        name: "Ellisha Natasha",
        description:
          "Beautifully can't describe",
        url: "",
        image:
          "https://drive.google.com/uc?export=view&id=1UX5a4CMqXNTKoxFjrO8IawZno3nuY1f_",
      },  
];