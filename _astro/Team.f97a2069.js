import{j as e}from"./jsx-runtime.109e40f8.js";import{m as l}from"./motion.8321705d.js";import"./index.f1bc5ebf.js";const a="/_astro/eric-headshot.6466b324.jpeg",s="/_astro/felix-headshot.545fb095.jpeg",o="/_astro/bryan-headshot.7c29cb6f.png",r=[{name:"Eric Seidel",title:"Founder of Shorebird",bio:"Founder of Flutter and former Director of Engineering for Flutter & Dart at Google.",headshot:a},{name:"Felix Angelov",title:"Founding Engineer",bio:"Former Head of Open Source at Very Good Ventures.",headshot:s},{name:"Bryan Oltman",title:"Founding Engineer",bio:"Former architecture lead for Google's internal-facing enterprise Flutter team.",headshot:o}],x=()=>e.jsxs("section",{className:"w-full flex justify-center pt-10 mb-16 lg:mb-32 relative",children:[e.jsx("div",{className:"absolute -top-16",id:"team"}),e.jsx("div",{className:"flex flex-col w-full lg:w-[1150px] justify-center",children:e.jsxs(l.div,{initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.4,delay:.3},children:[e.jsx("div",{className:"shorebird-block-subtitle text-center mb-6",children:"The Team"}),e.jsx("div",{className:"shorebird-block-big-title text-center mb-16 px-8 sm:px-24 md:px-48",children:"Established by leaders in the Flutter community"}),e.jsx("div",{className:"flex flex-col lg:flex-row gap-8 lg:gap-5 xl:gap-10 px-6 xl:px-0 items-center",children:r.map((t,i)=>e.jsxs(l.div,{className:"w-11/12 sm:w-4/5 md:w-[560px] lg:w-1/3 shorebird-border-gray-darker rounded-xl bg-shorebirdBg3 text-white flex flex-col px-6 py-4",initial:{opacity:0},whileInView:{opacity:1},viewport:{once:!0},transition:{duration:.4,delay:.5+i*.1},children:[e.jsxs("div",{className:"flex",children:[e.jsx("img",{className:"rounded-xl h-[45px] w-[45px]",src:t.headshot,alt:`${t.name} headshot`,width:"45",height:"45"}),e.jsxs("div",{className:"flex flex-col ml-4",children:[e.jsx("div",{className:"font-medium",children:t.name}),e.jsx("div",{children:t.title})]})]}),e.jsx("div",{className:"mt-4 mb-2 xl:mt-8 xl:mb-4",children:t.bio})]},`${t.name}-${i}`))})]})})]});export{x as Team};
