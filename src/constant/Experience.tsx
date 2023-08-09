interface Achievement {
    title: string;
  }
  
  interface Experience {
    position: string;
    company: string;
    period: string;
    url?: string;
    achievements: Achievement[];
  }
  
export const experienceData: Experience[] = [
    {
      position: "Frontend Developer",
      company: "BEM Fasilkom UI",
      period: "Jun 2022 - Present",
      url: "https://bem.cs.ui.ac.id",
      achievements: [
        { title: "Developed Website For BEM Fasilkom UI and Renew Older Website. " },
      ],
    },
    {
        position: "Frontend Developer",
        company: "BEM Fasilkom UI",
        period: "Jun 2022 - Present",
        url: "https://bem.cs.ui.ac.id",
        achievements: [
          { title: "Developed Website For BEM Fasilkom UI and Renew Older Website. " },
        ],
      },
      {
        position: "Frontend Developer",
        company: "BEM Fasilkom UI",
        period: "Jun 2022 - Present",
        url: "https://bem.cs.ui.ac.id",
        achievements: [
          { title: "Developed Website For BEM Fasilkom UI and Renew Older Website. " },
        ],
      },
  ];
  