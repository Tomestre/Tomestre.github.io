import './App.css';
import cerebro from './assets/cerebro.png'
import { AiOutlineWhatsApp, AiOutlineMobile, AiOutlineGithub, AiOutlineMenu } from "react-icons/ai";
import {SiJavascript, SiReact, SiFigma, SiHtml5, SiAdobephotoshop, SiAdobeillustrator, SiCss3} from "react-icons/si"
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from 'react';



function App() {

  //Projetos do GitHub
  const itensProjeto = [
    {
    titulo: 'App Clima',
    subtitulo:'HTML | CSS | JS',
    img: <img src={require('./assets/projetos/appClima.gif')} className='imgProjeto'/>,
    detalhes:'Usa API para buscar o clima em qualquer lugar do mundo',
    },
    {
      titulo: 'App Filme',
      subtitulo:'React-Native',
      img: <img src={require('./assets/projetos/appFilmes.gif')} className='imgProjeto'/>,
      detalhes:'descrição do projeto',
    },
      {
        titulo: 'Biscoito da Sorte',
        subtitulo:'React-Native',
        img: <img src={require('./assets/projetos/biscoito.gif')} className='imgProjeto'/>,
        detalhes:'descrição do projeto',
        }
        ,
      {
        titulo: 'Finanças',
        subtitulo:'React-Native | Firebase',
        img: <img src={require('./assets/projetos/appFinanças.gif')} className='imgProjeto'/>,
        detalhes:'descrição do projeto',
        }
        ,
      {
        titulo: 'Conversor de Moedas',
        subtitulo:'React-Native',
        img: <img src={require('./assets/projetos/conversordemoeda.gif')} className='imgProjeto'/>,
        detalhes:'descrição do projeto',
        }
        ,
      {
        titulo: 'Cronometro',
        subtitulo:'React-Native',
        img: <img src={require('./assets/projetos/cronometro.gif')} className='imgProjeto'/>,
        detalhes:'descrição do projeto',
        }
        ,
      { titulo:'ToDo List',
        subtitulo: 'HTML | CSS | JS',
        img: <img src={require('./assets/projetos/todo.gif')} className='imgProjeto'/>,
        detalhes:'descrição do projeto',
        }
       
  ]

// Conhecimentos
const coderSkill = [
  {
  titulo:'JavaScript',
  icone:<SiJavascript/>
  },
  {
  titulo:'React',
  icone:<SiReact/>
  },
  {
  titulo:'React Native',
  icone:<SiReact/>
  },

]

const designerSkill = [
  {
    titulo:'Figma',
    icone:<SiFigma/>
  },
  {
    titulo:'HTML',
    icone:<SiHtml5/>
  },
  {
    titulo:'CSS',
    icone:<SiCss3/>
  },
  {
    titulo:'PhotoShop',
    icone:<SiAdobephotoshop/>
  },
  {
    titulo:'Ilustrator',
    icone:<SiAdobeillustrator/>
  }
]
  

  
//Navigation
  const [navAtive, setNavAtive] = useState(false)

  function showMenu (){
    if(navAtive){
    setNavAtive(false)}
    else{

    setNavAtive(true)
    }
  }

//buttons
const coder = '<Coder>'
const [openCoder, setOpenCoder] = useState(false)
const [openDesigner, setOpenDesigner] = useState(false)

function coderButton (){
  if(openCoder){
    setOpenCoder(false)
  }else{
    setOpenCoder(true)
  }
}


function designerButton (){
  if(openDesigner){
    setOpenDesigner(false)
  }else{
    setOpenDesigner(true)
  }
}


  return (
    

    <header className='app'>
      
      <nav className='menu'>

        <div className='conteinerNav'>
          <AiOutlineMenu className='nav' onClick={()=> showMenu()}/>

          <h2 className='assinatura'>Gabriel Tomé</h2>
      

          <ul className={navAtive ? 'navAtive' : 'smoothScroll'}>
            <li><Link to='sessao1' offset={-55} spy={true}
    smooth={true}  duration={500}>O que eu faço?</Link></li>
            <li><Link to='sessao2' offset={-55} spy={true}
    smooth={true}  duration={500}>Projetos</Link></li>
            <li><Link to='sessao3' spy={true}
    smooth={true}  duration={500} offset={-55}>Quem sou eu?</Link></li>
            <li><Link to='sessao4' spy={true}
    smooth={true}  duration={500}>Fale comigo</Link></li>
          </ul>

        </div>
      </nav>

      <div className='sessao1'>
        
        <h1>O que eu faço?</h1>

        <div className='animation1'>
          <img src={cerebro} className='cerebro'/>
        
          <div className='buttons'>
            <button className='coder' onClick={()=> coderButton()}><p>{coder}</p></button>
            <button className='designer' onClick={()=> designerButton()}><p>Designer</p></button>
          </div>
        </div>

        <div className={openCoder ? 'openCoder' : 'closeCoder'}>

          
          {coderSkill.map( skill => {
            return(
              <div className='coderSkill'>
            
                
                <h4>{skill.titulo}</h4>
                {skill.icone} 

              </div>    )
          })}
          

        </div>

        <div className={openDesigner ? 'openDesigner' : 'closeDesigner'}>

          
          {designerSkill.map( skill => {
            return(
              <div className='designerSkill'>
            
                {skill.icone}
                <h4>{skill.titulo}</h4> 

              </div>    )
          })}
          

        </div>

      </div>

      <div className='sessao2'>
        <h1>Projetos</h1>
        <div className='containerProjetos'>
          {itensProjeto.map(projeto => {
            return(
          
          <div className='projeto'>
            
            {projeto.img}
            <h3>{projeto.titulo}</h3>
            <h4>{projeto.subtitulo}</h4>
            
          </div>)
})}
        </div>

      </div>

      <div className='sessao3'>
        <h1>Quem sou eu?</h1>
        <p>Meu nome é Gabriel Tomé sou um desenvolvedor junior, buscando minha primeira oportunidade para trabalhar na área.<br></br><br></br>

Fui professor de reforço por 8 anos, e por isso, além de ter facilidade em aprender, eu conheço tecnicas de estudo muito eficientes.<br></br><br></br>

Isso me permitiu aprender sozinho,todas as linguagens que domino.<br></br><br></br>

Acredito que o trabalho duro é recompensado e que a excelência é um habito.</p>

        <div>
          <img/>
        </div>
      </div>

      

      <div className='sessao4'>
        <h1>Fale Comigo</h1>
        <a href='https://github.com/Tomestre'><AiOutlineGithub/> Tomestre </a>
        <p><AiOutlineMobile/> (61) 99371-7359</p>

        <button className='whatsApp' onClick={()=> window.open('https://wa.me/5561993717359')} >
           
          <p><AiOutlineWhatsApp/>  WhatsApp</p>
        </button>
      </div>

    </header>


     
    

   
  )

}

export default App;
