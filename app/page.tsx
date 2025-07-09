'use client'
import Image from "next/image";
import HeadingText from "./components/HeadingText";
import WhatWeDeliver from "./components/WhatWeDeliver";
import SolutionCard from "./components/SolutionCard";
// @ts-expect-error - Splide types issue
import { Splide, SplideSlide } from '@splidejs/react-splide';
import TechnologiesUsed from "./components/TechnologiesUsed";

const whatwedeliverData = [
  {
    title: 'A Great Consultation',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and',
    icon: '/assets/icons/octicon-codescan.png'
  },
  {
    title: 'Seamless Technology',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and',
    icon: '/assets/icons/octicon-codescan.png'
  },
  {
    title: 'World Class Experience',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and',
    icon: '/assets/icons/octicon-codescan.png'
  },
  {
    title: 'Unbelievable Support',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and',
    icon: '/assets/icons/octicon-codescan.png'
  },
]

const expertiseData = [
  {
    title: 'CRM DEVELOPMENT',
    img: '/assets/img/solution.jpg',
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    href:'#'
  },
  {
    title: 'APP DEVELOPMENT',
    img: '/assets/img/solution-2.jpg',
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    href:'#'
  },
  {
    title: 'OTT PLATFORM DEVELOPMENT',
    img: '/assets/img/solution-3.jpg',
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    href:'#'
  },
  {
    title: 'ERP DEVELOPMENT',
    img: '/assets/img/solution-4.jpg',
    desc:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
    href:'#'
  },

]

export default function Home() {
  return (
    <main>

      <section className="py-6 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-y-4">
            <div className="w-full lg:w-[50%] flex justify-center flex-col">
              <div className="ps-1">
                <div>
                  <span className="text-[25px] md:text-[45px] border-b-4 border-[#61FB83]">LET US</span>
                </div>
                <div className="overflow-hidden text-[35px] leading-[40px] text-[#000] py-1 md:py-3">
                    <div className="relative flex items-start gap-x-1 h-[40px] overflow-hidden">
                      <p className="inline m-0 text-[19px] md:text-[30px]">Help you build something</p>
                      <ul className="mt-0 text-left list-none animate-change text-[#19d442] text-[19px] md:text-[30px]">
                        <li className="leading-[40px] m-0">Great.</li>
                        <li className="leading-[40px] m-0">World Class.</li>
                        <li className="leading-[40px] m-0">Excellent.</li>
                        <li className="leading-[40px] m-0">Amazing.</li>
                      </ul>
                    </div>
                  </div>
                {/* <p className="text-[30px]">Help you build something <span className="bg-[#61FB83] px-1">Great.</span></p> */}
              </div>
              <button
                  className="cursor-pointer group relative bg-gray-100 hover:bg-zinc-300 text-black font-semibold text-sm py-3 rounded-lg transition-all duration-200 ease-in-out shadow-lg hover:shadow-lg w-40 h-12"
                >
                  <div className="relative flex items-center justify-center gap-2">
                    <span className="relative inline-block overflow-hidden">
                      <span
                        className="block transition-transform duration-300 group-hover:-translate-y-full"
                      >
                        Get Started
                      </span>
                      <span
                        className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0"
                      >
                        Right Now
                      </span>
                    </span>

                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45"
                      viewBox="0 0 24 24"
                    >
                      <circle fill="currentColor" r="11" cy="12" cx="12"></circle>
                      <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        stroke="white"
                        d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5"
                      ></path>
                    </svg>
                  </div>
              </button>
            </div>
            <div className="w-full lg:w-[50%]">
              <Image className="mx-auto" src='/assets/img/hero-img.png' alt="hero img" height={700} width={440} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 lg:py-12 bg-[#FAFAFA]">
        <div className="container mx-auto px-4">
          <div className="mb-6 lg:mb-10">
            <HeadingText textalign="text-center" heading="WHAT WE DELIVER" />
          </div>
          <div className="flex flex-wrap gap-y-8">
            {
              whatwedeliverData.map((ele,i)=>{
                return(
                  <div key={i} className="w-full md:w-[50%] xl:w-[25%] px-1.5">
                      <WhatWeDeliver 
                        title={ele.title} 
                        desc={ele.desc} 
                        icon={ele.icon} 
                      />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      <section className="py-6 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 lg:mb-10">
            <HeadingText textalign="text-center" heading="EXPERTISE" />
          </div>
          <Splide 
            aria-label="My Favorite Images"
            options={{
              type:'loop',
              perPage: 4,
              rewind: true,
              gap: '1rem',
              breakpoints: {
                1000:{
                  perPage:3
                },
                640: {
                  perPage: 1,
                },
              }
            }}
          >
          {
              expertiseData.map((ele,i)=>{
                return(
                  <SplideSlide key={i}>
                      <SolutionCard
                        title={ele.title}
                        img={ele.img}
                        desc={ele.desc}
                        href={ele.href}
                      />
                   </SplideSlide>
                )
              })
            }
          </Splide>
        </div>
      </section>

      <section className="py-6 lg:py-12">
          <div className="mb-12">
            <HeadingText textalign="text-center" heading="TECHNOLOGIES USED" />
          </div>
            <TechnologiesUsed/>
      </section>

      <section className="py-6 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 lg:mb-10">
            <HeadingText textalign="text-center" heading="SOLUTIONS" />
          </div>
           <div className="flex flex-wrap gap-y-4">
            {
              expertiseData.map((ele,i)=>{
                return(
                  <div key={i} className="w-full md:w-[50%] lg:w-[25%] px-1.5">
                      <SolutionCard
                        title={ele.title}
                        img={ele.img}
                        desc={ele.desc}
                        href={ele.href}
                      />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>

      <section className="py-6 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="mb-6 lg:mb-10">
            <HeadingText textalign="text-center" heading="UPDATES" /> 
          </div>
          <div className="flex flex-wrap gap-y-4">
              <div className="w-full md:w-[50%] lg:w-[33.33%] px-1.5">
                <div>
                    <Image className="w-full" src='/assets/img/bg-gray.jpg' alt="" width={405} height={250} />
                </div>
                <div>
                  <h3 className="my-3 text-[22px] leading-tight">THIS IS  A DEMO BLOG TOPIC WHICH
                  <br/>I’M ABOUT TO WRITE</h3>
                  <p className="text-[#414141]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
                  <div>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[50%] lg:w-[33.33%] px-1.5">
                <div>
                    <Image className="w-full" src='/assets/img/bg-gray.jpg' alt="" width={405} height={250} />
                </div>
                <div>
                  <h3 className="my-3 text-[22px] leading-tight">THIS IS  A DEMO BLOG TOPIC WHICH
                  <br/>I’M ABOUT TO WRITE</h3>
                  <p className="text-[#414141]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
                  <div>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-[50%] lg:w-[33.33%] px-1.5">
                <div>
                    <Image className="w-full" src='/assets/img/bg-gray.jpg' alt="" width={405} height={250} />
                </div>
                <div>
                  <h3 className="my-3 text-[22px] leading-tight">THIS IS  A DEMO BLOG TOPIC WHICH
                  <br/>I’M ABOUT TO WRITE</h3>
                  <p className="text-[#414141]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
                  <div>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>

    </main>
  );
}
