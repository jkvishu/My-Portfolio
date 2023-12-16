import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
    {/* 1.this section contains the header line and the 3d model */}
      <div
      // 2.putting all the things in this div and set it in the correct position and giving it whatever value it require
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
      {/* 3.that blue dot and the gradient line is done through the below div */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
        {/* 4.now styling and creating the header lines inside a div and these divs are flexed to have the space which is required by them */}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Vishu</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Passionate competitive coder,<br className='sm:block hidden' />
          specialized in MERN stack technologies
          </p>
        </div>
      </div>
      {/* 5.now making that 3d model and loader and importing them as a component */}
      <ComputersCanvas />

      {/* 6.now that small moving mouse type motion is done with the help of this code */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
