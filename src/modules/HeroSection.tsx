import Slider from "@/components/Slider";

const HeroSection = () => {

  const sliderImages = ['group.svg', 'jakun.svg', 'hehe.svg',]; 
  const googleDriveLink = 'https://drive.google.com/uc?export=view&id=1GVr0pzzo3LyOVjkqSM3Ia4kUw_OoWXFm';
  return (
    <div className='mx-auto bg-[#283845] pt-40 pb-20 flex flex-col md:flex-row items-center md:justify-between'>
      <div className="bg-[#283845] w-full flex flex-col items-center md:flex-row mx-20">
        <div className='text-white ml-8 text-center lg:text-left md:w-1/2 mx-4 md:mx-16 mb-6 md:mb-10'>
        <p className='text-5xl font-bold leading-relaxed'>Venedict Chen </p>
        <p className='text-4xl font-bold leading-relaxed'>
          '陳燕鴴'
        </p>
        <p className='text-4xl font-bold leading-relaxed'>
          A Web Development Enthusiast
        </p>
        <div className='flex justify-center mt-2'>
          <a href={googleDriveLink } target="_blank" rel="noopener noreferrer">
            <button className='mt-6 bg-[#F29759] hover:bg-[#E6E8E6]
             text-[#283845] font-semibold py-2 px-4 rounded'>
              My Resume
            </button>
          </a>
        </div>
        </div>
        <div className='flex mt-4 md:mb-16 mr-4 lg:justify-end md:w-1/2'>
          <div className='w-60 md:w-80 h-80 overflow-hidden  ml-6
           md:ml-4'>
            <Slider images={sliderImages} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
