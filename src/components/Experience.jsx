import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import node from '../assets/node.png'
import tailwind from '../assets/tailwind.png'
import csharp from '../assets/csharpp.svg'
import github from '../assets/github.png'
import sql from '../assets/mySql.png'

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: javascript,
      title: 'JS',
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: reactImage,
      title: 'React JS',
      style: 'shadow-cyan-600'
    },
    {
      id: 5,
      src: node,
      title: 'Node JS',
      style: 'shadow-green-500'
    },
    {
      id: 6,
      src: tailwind,
      title: 'TailWind',
      style: 'shadow-sky-400'
    },
    {
      id: 7,
      src: csharp,
      title: 'C Sharp',
      style: 'shadow-purple-500'
    },
    {
      id: 8,
      src: github,
      title: 'GitHub',
      style: 'shadow-white'
    },
    {
      id: 9,
      src: sql,
      title: 'MySQL',
      style: 'shadow-gray-400'
    }
  ]

  return (
    <div
      name="experiência"
      className="bg-gradient-to-b from-[#101726] to-gray-800 w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-[#0048AD] p-2 inline">
            Experiência
          </p>
          <p className="py-6">Essas são as que tecnologias que já trabalhei</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Experience
