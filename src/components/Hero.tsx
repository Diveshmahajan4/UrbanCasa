import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='relative'>
        {/* Layer 1 */}
        <div className='flex justify-between items-center z-10'>
            <p className='text-[200px] font-semibold leading-none'>urban</p>
            <p className='p-24 w-[500px]'>Elevate Your Space,Crafting Success through Timeless Style - Your Foundation for Inspired Living.</p>
        </div>

        {/* Layer 2 */}
        <div className='flex overflow-hidden justify-start max-w-screen-2xl'>
        <p className='text-[200px] font-semibold leading-none'>furniture</p>
        </div>

        {/* Layer 3 */}
        <div className='flex justify-around items-center z-10'>
            <div className='flex flex-col p-8 bg-white w-32 h-32 justify-center items-center rounded-full'>
                <p className='font-semibold'>Scroll</p>
                <p className='font-semibold'>Down</p>
            </div>
        <p className='text-[200px] font-semibold leading-none w-[900px] text-start'>studio</p>
        </div>

        {/* Hero Image */}
        <div className='absolute top-[550px] left-4 -z-50 rounded-md'>
            <Image src='/image5.jpg' alt='heroimage' width={1536} height={1200}/>
        </div>
    </section>
  )
}

// interface BannerRowCenterProps {
//     title: string;
//     playMarquee: any; 
//   }

// const BannerRowCenter: React.FC<BannerRowCenterProps> = ({ title, playMarquee }) => {
//     return (
//       <div className={`banner-row marquee  ${playMarquee && "animate"}`}>
//         <div className="marquee__inner">
//           <AnimatedLetters title={title} />
//           <AnimatedLetters title={title} />
//           <AnimatedLetters title={title} />
//           <AnimatedLetters title={title} />
//         </div>
//       </div>
//     );
// };

// interface AnimatedLettersProps{
//     title: string
// }

// const AnimatedLetters: React.FC<AnimatedLettersProps = ({title}) => (
//     <span className="row-title">
//       {title.split('').map((letter) => (
//         <span className="row-letter">{letter}</span>
//       ))}
//     </span>
//   );



export default Hero