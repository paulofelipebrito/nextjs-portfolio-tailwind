import Head from 'next/head'
import Main from './../components/Main';
import About from './../components/About';
import Skills from './../components/Skills';
import Projects from '../components/Projects';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Paulo Felipe | Full Stack Developer</title>
        <meta name="description" content="I’m a full stack web developer specializing in building exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About /> 
      <Skills />
      <Projects />
    </div>
  )
}
