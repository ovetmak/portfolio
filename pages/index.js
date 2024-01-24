import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { useState } from 'react'

import {
  BsMoonFill,
  BsFillSunFill,
  BsGithub,
  BsLinkedin,
  BsWhatsapp,
  BsTelegram,
  BsMailbox2,
  BsTranslate,
} from 'react-icons/bs'
import { MdMail } from 'react-icons/md'

import portrait from '../public/portrait.jpeg'

import web1 from '../public/web1.png'
import web2 from '../public/web2.png'
import web3 from '../public/web3.png'

export default function Home() {
  const englishText = {
    lang: true,
    h2: 'Oleksii Makovetskyi',
    h3: 'Front End Developer',
    ptop: "Hi, there! I'm looking forward to join your team. Down below you can find my projects, contact details and technology stack.",
    h3body: 'Portfolio',
    pBodyOne: 'In these projects, I tried to implement all the ',
    pBodySpan: ' knowledge',
    pBodyTwo:
      'I gained during my studies. When choosing projects, I tried to create something that could be useful and was close to real online businesses I met on the Internet.',
    h3Tech: 'Technologies I use',
    pTech:
      'While working on these projects, I tried to use the most recent and modern technologies to master these approaches and to be able implement these skills in real cases in the future.',
    pCardOne:
      'Create user interfaces with ability to efficiently render and update components.',
    pCardTwo:
      'Building simple web applications and APIs and combining them with databases.',
    pCardThree:
      'Following and managing release versions, enabling authentication, location and media APIs, deploying projects online while keeping projects secure.',
  }
  const spanishText = {
    lang: false,
    h2: 'Oleksii Makovetskyi',
    h3: 'Desarrollador front-end',
    ptop: '¡Hola! Tengo muchas ganas de unirme a su equipo. Abajo puedes encontrar mis proyectos, datos de contacto y tecnologías con las que trabajé.',
    h3body: 'Portfolio',
    pBodyOne: 'En estos proyectos, traté de implementar todo el',
    pBodySpan: 'conocimiento',
    pBodyTwo:
      'que obtuve durante mis estudios. Al elegir proyectos, traté de crear algo que pudiera ser útil y que estuviera cerca de los negocios en línea reales que conocí en Internet.',
    h3Tech: 'Tecnologías que uso',
    pTech:
      'Mientras trabajaba en estos proyectos, traté de utilizar las tecnologías más recientes y modernas para dominar estos enfoques y poder implementar estas habilidades en casos reales en el futuro.',
    pCardOne:
      'Cree interfaces de usuario con la capacidad de renderizar y actualizar componentes de manera eficiente.',
    pCardTwo:
      'Crear aplicaciones web y API simples y combinarlas con bases de datos.',
    pCardThree:
      'Seguimiento y administración de versiones de lanzamiento, habilitación de autenticación, ubicación y API de medios, implementación de proyectos en línea mientras se mantienen seguros los proyectos.',
  }

  const [darkMode, setDarkMode] = useState(false)
  const [text, setText] = useState(englishText)

  // const toggle = darkMode ? BsMoonFill : BsFillSunFill

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>ovetmak's portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 md:px-20 md:pt-2 2xl:px-40 dark:bg-gray-900">
        <section className="pb-5 2xl:min-h-screen ">
          <nav className="pt-10 flex justify-between items-center 2xl:py-10 2xl:mb-12">
            <h1 className="text-3xl font-varela dark:text-gray-300">ovetmak</h1>
            <ul className="flex items-center">
              <li>
                <BsFillSunFill
                  onClick={() => setDarkMode(!darkMode)}
                  className={
                    darkMode
                      ? 'cursor-pointer text-lg text-gray-300 md:text-2xl'
                      : 'hidden'
                  }
                />
              </li>
              <li>
                <BsMoonFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-lg md:text-2xl dark:hidden"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-b from-green-800 to-teal-500 text-white px-6 py-2 rounded-md ml-4 md:px-8 text-lg dark:text-gray-300"
                  href={text.lang ? './CV.pdf' : './CV-esp.pdf'}
                  target="_blank"
                >
                  CV
                </a>
              </li>
              <li>
                <button
                  className=" ml-4 rounded-md text-lg dark:text-gray-300"
                  onClick={
                    text.lang
                      ? () => setText(spanishText)
                      : () => setText(englishText)
                  }
                >
                  <BsTranslate className="hidden sm:inline mr-2" />
                  {text.lang ? 'ESP' : 'ENG'}
                </button>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-4xl text-transparent bg-clip-text bg-gradient-to-b from-green-800 to-teal-500 py-2 font-medium md:text-5xl">
              {text.h2}
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-gray-300">
              {text.h3}
            </h3>
            <p className="text-base py-2 leading-7 text-gray-800 md:text-lg max-w-lg mx-auto dark:text-gray-400">
              {text.ptop}
            </p>
          </div>
          <div className="text-2xl flex justify-evenly content-center text-gray-800 md:text-3xl max-w-md mx-auto dark:text-gray-400">
            <Link className="cursor-pointer" href="https://github.com/ovetmak/">
              <BsGithub />
            </Link>
            <Link
              className="cursor-pointer"
              href="https://www.linkedin.com/in/ovetmak/"
            >
              <BsLinkedin />
            </Link>
            <Link className="cursor-pointer" href="mailto:ovetmak@gmail.com">
              <MdMail />
            </Link>
            <Link className="cursor-pointer" href="https://wa.me/34651381159">
              <BsWhatsapp />
            </Link>
            <Link className="cursor-pointer" href="https://t.me/ovetmak">
              <BsTelegram />
            </Link>
          </div>
          <div className="relative w-80 h-80 mx-auto mt-12 md:w-96 md:h-96">
            <Image
              src={portrait}
              fill="fill"
              style={{
                objectFit: 'cover',
                objectPosition: 'top',
                borderRadius: '50%',
              }}
            />
          </div>
        </section>

        <section className="py-5">
          <div>
            <h3 className="text-3xl py-1 text-transparent bg-clip-text bg-gradient-to-b from-green-800 to-teal-500">
              Portfolio
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              {text.pBodyOne}
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-green-800 to-teal-500">
                {' ' + text.pBodySpan}
              </span>
              {' ' + text.pBodyTwo}
            </p>
          </div>
          <div className="flex flex-col gap-10 py-5 lg:flex-row lg:flex-wrap">
            <div className="basis-full flex-1 cursor-pointer">
              <a href="https://favplaces-vercel.vercel.app" target="_blank">
                <Image
                  className="rounded-lg shadow-md object-cover"
                  width={'100%'}
                  height={'100%'}
                  src={web1}
                />
              </a>
            </div>
            <div className="basis-1/4 flex-1 cursor-pointer">
              <a href="https://word-cards-eight.vercel.app/" target="_blank">
                <Image
                  className="rounded-lg shadow-md object-cover"
                  width={'100%'}
                  height={'100%'}
                  src={web2}
                />
              </a>
            </div>
            <div className="basis-1/4 flex-1 cursor-pointer">
              <a href="https://github.com/ovetmak/portfolio" target="_blank">
                <Image
                  className="rounded-lg shadow-md object-cover"
                  width={'100%'}
                  height={'100%'}
                  src={web3}
                />
              </a>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1 text-transparent bg-clip-text bg-gradient-to-b from-green-800 to-teal-500">
              {text.h3Tech}
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-300">
              {text.pTech}
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-400 flex-1 group">
              <div className="flex justify-evenly mb-8">
                <img
                  src="https://cdn.simpleicons.org/react/[COLOR]"
                  className="w-20 p-2 bg-white shadow-md rounded-md z-40 transition-transform translate-x-16 -translate-y-5 rotate-12 group-hover:transform-none"
                ></img>
                <img
                  src="https://cdn.simpleicons.org/nextdotjs/[COLOR]"
                  className="w-20 p-2 bg-yellow-500 opacity-20 shadow-md rounded-md z-10 transition-transform -translate-x-2 translate-y-12 -rotate-6 group-hover:transform-none "
                ></img>
                <img
                  src="https://cdn.simpleicons.org/bootstrap/[COLOR]"
                  className="w-20 p-2 bg-white shadow-md rounded-md z-20 transition-transform translate-x-1 -translate-y-4 -rotate-6 group-hover:transform-none"
                ></img>
                <img
                  src="https://cdn.simpleicons.org/tailwindcss/[COLOR]"
                  className="w-20 p-2 bg-white shadow-md rounded-md z-30 transition-transform -translate-x-16 translate-y-12 rotate-6 group-hover:transform-none"
                ></img>
              </div>
              <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-b from-green-800 to-teal-500 font-medium pt-8 pb-2">
                Front End
              </h3>
              <p className="py-2 font-medium">{text.pCardOne}</p>
              <p className="text-gray-800 py-1">React</p>
              <p className="text-gray-800 py-1">Next.js (coming soon)</p>
              <p className="text-gray-800 py-1">Bootstrap</p>
              <p className="text-gray-800 py-1">Tailwind</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-400 flex-1 group">
              <div className="flex justify-evenly mb-8">
                <img
                  src="https://cdn.simpleicons.org/nodedotjs/[COLOR]"
                  className="w-20 p-2 bg-white shadow-md rounded-md z-40 transition-transform translate-x-16 -translate-y-5 rotate-12 group-hover:transform-none"
                ></img>
                <img
                  src="https://cdn.simpleicons.org/express/[COLOR]"
                  className="w-20 p-2 bg-white shadow-md rounded-md z-10 transition-transform -translate-x-2 translate-y-12 -rotate-6 group-hover:transform-none"
                ></img>
                <img
                  src="https://cdn.simpleicons.org/mongodb/[COLOR]"
                  className="w-20 p-2 bg-white shadow-md rounded-md z-20 transition-transform translate-x-1 -translate-y-4 -rotate-6 group-hover:transform-none"
                ></img>
                <img
                  src="https://cdn.simpleicons.org/mysql/[COLOR]"
                  className="w-20 p-2 bg-white shadow-md rounded-md z-30 transition-transform -translate-x-16 translate-y-12 rotate-6 group-hover:transform-none"
                ></img>
              </div>
              <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-b from-green-800 to-teal-500 font-medium pt-8 pb-2">
                Back End
              </h3>
              <p className="py-2 font-medium">{text.pCardTwo}</p>
              <p className="text-gray-800 py-1">Node.js</p>
              <p className="text-gray-800 py-1">Express</p>
              <p className="text-gray-800 py-1">MongoDB</p>
              <p className="text-gray-800 py-1">MySQL</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-400 flex-1 group">
              <div className="flex justify-evenly mb-8">
                <img
                  src="https://cdn.simpleicons.org/vercel/[COLOR]"
                  className="w-20 p-2 bg-white shadow-md rounded-md z-40 transition-transform translate-x-16 -translate-y-5 rotate-12 group-hover:transform-none"
                ></img>
                <img
                  src="https://cdn.simpleicons.org/netlify/[COLOR]"
                  className="w-20 p-2 bg-white shadow-md rounded-md z-10 transition-transform -translate-x-2 translate-y-12 -rotate-6 group-hover:transform-none"
                ></img>
                <img
                  src="https://cdn.simpleicons.org/git/[COLOR]"
                  className="w-20 p-2 bg-white shadow-md rounded-md z-20 transition-transform translate-x-1 -translate-y-4 -rotate-6 group-hover:transform-none"
                ></img>
                <img
                  src="https://cdn.simpleicons.org/github/[COLOR]"
                  className="w-20 p-2 bg-white shadow-md rounded-md z-30 transition-transform -translate-x-16 translate-y-12 rotate-6 group-hover:transform-none"
                ></img>
              </div>
              <h3 className="text-xl text-transparent bg-clip-text bg-gradient-to-b from-green-800 to-teal-500 font-medium pt-8 pb-2">
                Deployment & APIs
              </h3>
              <p className="py-2 font-medium">{text.pCardThree}</p>
              <p className="text-gray-800 py-1">Vercel/Netlify</p>
              <p className="text-gray-800 py-1">Git/GitHub</p>
              <p className="text-gray-800 py-1">MapBox/Cloudinary</p>
              <p className="text-gray-800 py-1">Passport/Helmet</p>
            </div>
          </div>
        </section>

        <footer className="py-5 mb-5 flex items-center">
          <h3 className=" text-xl font-varela dark:text-gray-300">ovetmak</h3>
          <p className="text-sm ml-auto dark:text-gray-300">
            Copyright © {new Date().getFullYear()} ovetmak
          </p>
        </footer>
      </main>
    </div>
  )
}
