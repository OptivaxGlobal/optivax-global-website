import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

import backgroundImage from "../assets/Animated-background/BACKGROUND IMAGE.webp";


// WEBSITE DESIGN
import wd1 from "@/assets/website-design-showcase/Caulk-a-doodle Website.png";
import wd2 from "@/assets/website-design-showcase/Local Detectives Website Design V2.png";
import wd3 from "@/assets/website-design-showcase/Web Design Marvel.png";


// WEB DEVELOPMENT
import dev1 from "@/assets/web-development-showcase/american-business-formations.png";
import dev2 from "@/assets/web-development-showcase/gogetship.png";
import dev3 from "@/assets/web-development-showcase/leather-lift-off.png";
import dev4 from "@/assets/web-development-showcase/ebook.png";
import dev5 from "@/assets/web-development-showcase/key.png";
import dev6 from "@/assets/web-development-showcase/shineshub.png";


// LOGO
import logo1 from "@/assets/logo-showcase/jh8-shoez.webp";
import logo2 from "@/assets/logo-showcase/burgera.webp";
import logo3 from "@/assets/logo-showcase/clean.webp";
import logo4 from "@/assets/logo-showcase/classic-cars.webp";
import logo5 from "@/assets/logo-showcase/tarika.webp";
import logo6 from "@/assets/logo-showcase/nativa.webp";


// EBOOK
import ebook1 from "@/assets/ebook-cover-showcase/ebook-cover-44.webp";
import ebook2 from "@/assets/ebook-cover-showcase/ebook-cover-45.webp";
import ebook3 from "@/assets/ebook-cover-showcase/ebook-cover-46.webp";
import ebook4 from "@/assets/ebook-cover-showcase/ebook-cover-47.webp";
import ebook5 from "@/assets/ebook-cover-showcase/ebook-cover-48.webp";
import ebook6 from "@/assets/ebook-cover-showcase/ebook-cover-49.webp";


// UI UX
import ui1 from "@/assets/app-uiux-showcase/app-uiux-1.webp";
import ui2 from "@/assets/app-uiux-showcase/app-uiux-2.webp";
import ui3 from "@/assets/app-uiux-showcase/app-uiux-3.webp";
import ui4 from "@/assets/app-uiux-showcase/app-uiux-4.webp";


// DIGITAL MARKETING
import dm1 from "@/assets/digital-marketing-showcase/digital-marketing-1.webp";
import dm2 from "@/assets/digital-marketing-showcase/digital-marketing-2.webp";
import dm3 from "@/assets/digital-marketing-showcase/digital-marketing-3.webp";
import dm4 from "@/assets/digital-marketing-showcase/digital-marketing-4.webp";



const PortfolioBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

    <motion.div
      className="absolute inset-0"
      animate={{
        scale:[1.05,1.15,1.05],
        x:["0%","2%","0%"],
        y:["0%","-2%","0%"]
      }}
      transition={{
        duration:12,
        repeat:Infinity,
        ease:"easeInOut"
      }}
    >

      <img
        src={backgroundImage}
        alt=""
        className="w-full h-full object-cover"
      />

    </motion.div>


    <div className="absolute inset-0 bg-[#020B16]/85" />

  </div>
);



const portfolioSections = [

{
title:"Website Design",
subtitle:
"Premium WordPress and landing page design for small businesses, startups, and brand websites, with modern UI and conversion-focused experiences.",
tag:"Web Design",
images:[wd1,wd2,wd3],
contain:false,
link:"/web-design",
},


{
title:"Web Development",
subtitle:
"Custom-coded websites, React applications, dashboards, and e-commerce platforms developed with modern technologies for businesses that need more than a template.",
tag:"Development",
images:[dev1,dev2,dev3,dev4,dev5,dev6],
projectLinks:[
"https://americanbusinessformations.com/",
"https://gogetship.com/",
"https://leatherliftoff.com/",
"https://ebookwriterusa.com/",
"http://keyvelocity.optivaxglobal.com/",
"https://shineshub.com/",
],
projectTitles:[
"American Business Formations",
"GoGetShip",
"Leather Lift Off",
"Ebook Writer USA",
"Key Velocity",
"ShinesHub Website",
],
projectCategories:[
"Business Formation Platform",
"E-commerce Website",
"Shopify E-commerce Store",
"Publishing Platform",
"Web Application",
"Business Website Development",
],
contain:false,
link:"/web-development",
},


{
title:"Logo & Branding",
subtitle:
"Strategic brand identities designed to look premium, memorable, and trustworthy.",
tag:"Brand Identity",
images:[
logo2,
logo3,
logo4,
logo5,
logo1,
logo6
],
contain:false,
link:"/logo-design",
},


{
title:"eBook Cover Design",
subtitle:
"Professional book covers crafted for authors, publishing platforms, and digital readers.",
tag:"Publishing Design",
images:[
ebook1,
ebook2,
ebook3,
ebook4,
ebook5,
ebook6
],
contain:true,
link:"/ebook-cover-design",
},


{
title:"UI/UX Design",
subtitle:
"User-focused interfaces designed for mobile apps and digital products.",
tag:"App Experience",
images:[
ui1,
ui2,
ui3,
ui4
],
contain:false,
link:"/ui-ux-design",
},


{
title:"Digital Marketing",
subtitle:
"Creative marketing visuals designed to improve online presence and brand communication.",
tag:"Marketing",
images:[
dm1,
dm2,
dm3,
dm4
],
contain:false,
link:"/digital-marketing",
},

];



const Portfolio = () => {

const navigate = useNavigate();


return (

<section
id="portfolio"
className="
relative
pt-24
pb-16
overflow-hidden
bg-[#020B16]
"
>


<PortfolioBackground />


<div className="container mx-auto px-6 relative z-10">


<div className="text-center max-w-5xl mx-auto mb-20">


<span
className="
inline-flex
items-center
gap-2
px-5
py-2
rounded-full
bg-accent-purple/10
border
border-accent-purple/30
text-[#ddd5ff]
uppercase
tracking-[0.25em]
text-xs
font-medium
mb-7
"
>

<Sparkles className="w-4 h-4 text-accent-purple"/>

Featured Portfolio

</span>


<h2
className="
text-4xl
md:text-6xl
lg:text-[5rem]
font-extrabold
text-white
leading-tight
"
>

Creative Solutions That

<span className="block text-accent-purple">
Build Digital Trust
</span>

</h2>


<p
className="
text-gray-300
text-lg
mt-6
max-w-3xl
mx-auto
"
>

Explore our website design, web development,
branding, UI/UX and creative projects created
for modern businesses.

</p>


</div>
<div className="space-y-24">

{portfolioSections.map((section)=>(

<div key={section.title}>

  <div className="flex justify-between items-end gap-5 flex-wrap mb-10">

    <div>
      <span className="text-accent-purple uppercase tracking-[0.25em] text-xs font-semibold">
        {section.tag}
      </span>

      <h3 className="text-3xl md:text-5xl font-black text-white mt-3">
        {section.title}
      </h3>

      <p className="text-gray-400 mt-3 max-w-2xl">
        {section.subtitle}
      </p>
    </div>

    <button
      onClick={()=>navigate(section.link)}
      className="
      flex
      items-center
      gap-2
      px-6
      py-3
      rounded-full
      bg-white/5
      border
      border-white/10
      text-white
      font-semibold
      hover:bg-[#1BBCEF]
      hover:text-black
      transition
      "
    >
      View Portfolio
      <ArrowUpRight size={18}/>
    </button>

  </div>


  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">

    {section.images.slice(0, section.title === "Web Development" ? 6 : 3).map((img,index)=>(

      <div
        key={index}
        className="group relative h-full"
      >

        <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-r from-[#1BBCEF]/35 via-white/5 to-[#004495]/35 opacity-0 blur-sm transition duration-500 group-hover:opacity-100"></div>

        <article className="relative h-full flex flex-col overflow-hidden rounded-[32px] bg-[#0B1625]/92 border border-white/10 p-5 md:p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl hover:border-[#1BBCEF]/45 hover:-translate-y-2 hover:shadow-[0_26px_90px_rgba(27,188,239,0.13)] transition-all duration-500">

          <a
            href={section.projectLinks?.[index] || img}
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full overflow-hidden rounded-3xl border border-white/10 bg-[#07121F] aspect-[16/9]"
          >

            <img
              src={img}
              alt={`${section.title} project ${index + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-contain mx-auto transition duration-700 ease-out group-hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#07121F]/45 via-transparent to-transparent opacity-70"></div>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(27,188,239,0.10),transparent_32%)] opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition duration-700 group-hover:translate-x-[120%]"></div>

          </a>


          <div className="pt-6 mt-auto border-t border-white/10 flex justify-between items-center gap-4">

            <div className="min-w-0">
              <h4 className="text-white font-bold">
                {section.projectTitles?.[index] || section.title}
              </h4>

              {section.projectCategories?.[index] && (
                <p className="text-[#1BBCEF] text-xs uppercase tracking-widest font-semibold mt-1.5">
                  {section.projectCategories[index]}
                </p>
              )}

              <p className="text-gray-400 text-sm mt-1">
                Optivax Global Showcase
              </p>
            </div>


            <button
              onClick={()=>navigate(section.link)}
              className="
              shrink-0
              inline-flex
              items-center
              gap-2
              text-[#1BBCEF]
              font-semibold
              text-sm
              hover:text-white
              transition
              group/view
              "
            >
              View More

              <ArrowUpRight
                size={18}
                className="
                group-hover/view:translate-x-1
                group-hover/view:-translate-y-0.5
                transition-transform
                "
              />
            </button>

          </div>

        </article>

      </div>

    ))}

  </div>

</div>

))}

</div>


<div className="text-center mt-20">

  <button
    onClick={()=>navigate("/contact")}
    className="
    inline-flex
    items-center
    gap-2
    px-10
    py-5
    rounded-full
    bg-gradient-to-r
    from-[#1BBCEF]
    to-[#004495]
    hover:from-[#004495]
    hover:to-[#1BBCEF]
    text-white
    font-bold
    shadow-xl
    shadow-[#1BBCEF]/20
    hover:-translate-y-1
    transition-all
    duration-300
    "
  >
    Let's Build Your Brand

    <ArrowRight
      size={20}
      className="transition-transform group-hover:translate-x-1"
    />
  </button>

</div>

</div>

</section>

);

};

export default Portfolio;