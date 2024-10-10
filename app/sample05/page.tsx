import Image from "next/image"
import { tv } from 'tailwind-variants';

const tvContaner = tv({
  variants:{
    style:{
      cont1: '',
    },
  },
});

export default function Sample05(){
  return(
    <div className="bg-white text-gray-800 min-h-screen p-8 flex justify-center items-start">
      <div className="w-[210mm] min-h-[297mm] bg-white shadow-lg p-16 box-border">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Main title</h1>
          <h2 className="text-xl text-gray-600">Full Stack Developer</h2>
        </header>

        <section className="mb-8 gap-4">
          <div className="flex flex-wrap items-center mr-4">
            <span>【Name】john Dev PhD.</span>
          </div>
          <div className="flex flex-wrap items-center mr-4">
            <span>【Mail】john.doe@email.com</span>
          </div>
          <div className="flex items-center mr-4">
            <span>【Tal】(123) 456-7890</span>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">Summary</h3>
          <p className="text-justify">
            Experienced Full Stack Developer with a strong background in building scalable web applications. 
            Proficient in both front-end and back-end technologies, with a passion for creating efficient, 
            user-friendly solutions. Skilled in React, Node.js, and database management.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">Experience</h3>
          <div className="mb-4">
            <h4 className="text-lg font-semibold">Senior Full Stack Developer</h4>
            <p className="text-gray-600">TechCorp Inc. | 2018 - Present</p>
            <ul className="list-disc list-inside mt-2">
              <li>Led the development of a high-traffic e-commerce platform</li>
              <li>Implemented RESTful APIs using Node.js and Express</li>
              <li>Optimized database queries, improving application performance by 40%</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Full Stack Developer</h4>
            <p className="text-gray-600">WebSolutions LLC | 2015 - 2018</p>
            <ul className="list-disc list-inside mt-2">
              <li>Developed and maintained multiple client websites</li>
              <li>Collaborated with design team to implement responsive UI/UX</li>
              <li>Integrated third-party APIs for enhanced functionality</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">Skills</h3>
          <ul className="list-disc list-inside columns-2">
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>SQL</li>
            <li>RESTful APIs</li>
            <li>Git</li>
            <li>AWS</li>
            <li>Docker</li>
          </ul>
        </section>

        <section>
          <h3 className="text-2xl font-semibold mb-4 border-b border-gray-300 pb-2">Education</h3>
          <div>
            <h4 className="text-lg font-semibold">Bachelor of Science in Computer Science</h4>
            <p className="text-gray-600">University of Technology | Graduated 2015</p>
          </div>
        </section>
      </div>
    </div>
  )
}