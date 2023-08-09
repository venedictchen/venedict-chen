import Image from 'next/image'
import Navbar from '@/components/Navbar'
import HeroSection from '@/modules/HeroSection'
import ExperienceSection from '@/modules/ExperienceSection'
import AboutSection from '@/modules/AboutSection'
import ProjectSection from '@/modules/ProjectSection'
import ContactSection from '@/modules/ContactSection'
export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection/>
    <ExperienceSection/>
    <AboutSection/>
    <ProjectSection/>
    <ContactSection/>
    </>
  )
}
