import React from 'react'
import portfolio from '../assets/portfolio/portfolio.png'
import imc from '../assets/portfolio/imc.png'
import zeburguer from '../assets/portfolio/zeburguer.png'
import letsgo from '../assets/portfolio/letsgo.png'
import nlw from '../assets/portfolio/nlw.png'
import installNode from '../assets/portfolio/installNode.jpg'

const Portfolio = () => {
  const projetos = [
    {
      id: 1,
      src: portfolio,
      gitLink: 'https://github.com/JoaozinMr/Meu-Portfolio',
      siteLink: 'https://joaogabrieldev.netlify.app/'
    },
    {
      id: 2,
      src: letsgo,
      gitLink: 'https://github.com/JoaozinMr/Mini-Ecommerce',
      siteLink: 'https://letssgoo.netlify.app/'
    },
    {
      id: 3,
      src: zeburguer,
      gitLink: 'https://github.com/JoaozinMr/MeuPrimeiroSite',
      siteLink: 'https://zeburguer.netlify.app/'
    },
    {
      id: 4,
      src: nlw,
      gitLink: 'https://github.com/JoaozinMr/Nlw',
      siteLink: '/'
    },
    {
      id: 5,
      src: imc,
      gitLink: 'https://github.com/JoaozinMr/IMC',
      siteLink: 'https://imcjsteste.netlify.app/'
    },
    {
      id: 6,
      src: installNode,
      gitLink: 'https://github.com/JoaozinMr',
      siteLink: '/'
    }
  ]

  return (
    <div
      name="projetos"
      className="bg-gradient-to-b from-gray-800 to-[#101726] w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-[#0048AD]">
            Projetos
          </p>
          <p className="py-6">Confira um pouco do meu trabalho</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projetos.map(({ id, src, gitLink, siteLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md " />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={siteLink} target="_blanck">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={gitLink} target="_blanck">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
