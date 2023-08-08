import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.bundle.min.js.map';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faPhone, faMobileScreenButton, faEnvelope, faLocationDot, faHandPointer, faChildren, faPaintbrush, faUsers, faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'
import logoDeveloperKids from "./img/logo-developer-kids.ico"
import profile1 from "./img/profile1.jpeg"
import profile2 from "./img/profile2.jpeg"
import profile3 from "./img/IMG_20221228_172938_022.webp"
import profile4 from "./img/profile4.jpeg"
import profile5 from "./img/profile5.png"
import walp from "./img/Walp.png"
import jogando from "./img/jogando_scratch.png"
import crianca from "./img/criança_com_os_pais.png"
import plataforma from "./img/sobre-plataforma.jpg"
import jogo1 from "./img/jogo1.png"
import jogo2 from "./img/jogo3.png"
import jogo3 from "./img/jogo2.jpeg"
import curso1 from "./img/curso1.png"
import curso2 from "./img/curso2.png"
import curso3 from "./img/curso3.png"
import { Formik, Form, Field } from "formik";
import Axios from "axios";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function MainScreen() {
  const FormRef1 = useRef();
  const FormRef2 = useRef();
  const navigate = useNavigate();
  function cadastrar() {
    navigate("/cadastro");
  }
  function login() {
    navigate("/login");
  }

  const [visibleType, setVisibleType] = useState('todos');

  const handleFilterClick = (type) => {
    setVisibleType(type);
  };

  async function handleClickFeedback(values, { resetForm }) {
    const { email, subject, message } = FormRef2.current;

    const dados = {
      email: email.value,
      subject: subject.value,
      message: message.value,
    };

    await Axios.post("https://api-rest-azure.vercel.app/feedback", dados);
    alert("Feedback enviado com sucesso!");
    resetForm();
  }

  async function handleClickAtualizacao(values, { resetForm }) {
    const { email } = FormRef1.current;

    const dados = {
      email: email.value,
    };

    await Axios.post("https://api-rest-azure.vercel.app/novidades", dados);
    alert("E-mail cadastrado com sucesso!");
    resetForm();
  }

  return (

    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="img/logo-developer-kids.ico" type="image/x-icon" />
      <title>Developer Kids</title>
      {/* Fonte */}
      <style dangerouslySetInnerHTML={{ __html: "\n    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\n  " }} />
      <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap" rel="stylesheet" />
      {/* Estilos */}
      <header>
        <Container id="nav-container">
          <Navbar expand="lg" fixed="top" variant="dark">
            <Navbar.Brand href="index.html">
              <img id="logo" src={logoDeveloperKids} alt="Developer Kids" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-links" />
            <Navbar.Collapse id="navbar-links" className="justify-content-end">
              <Nav className="ml-auto">
                <Nav.Link href="#carousel-slide-area" id="home-menu">Home</Nav.Link>
                <Nav.Link href="#about-area" id="about-menu">Sobre nós</Nav.Link>
                <Nav.Link href="#services-area" id="services-menu">Serviços</Nav.Link>
                <Nav.Link href="#team-area" id="team-menu">Time</Nav.Link>
                <Nav.Link href="#portfolio-area" id="portfolio-menu">Projetos</Nav.Link>
                <Nav.Link href="#contact-area" id="contact-menu">Contato</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
      <main>
        <div id="carousel-slide-area" className="carousel">
          {/* slider */}
          <div>
            <Carousel interval={4000} fade={true} pause={false} className="carousel-inner">
              <Carousel.Item className="carousel-item" >
                <img src={walp} className="d-block w-100" alt="Primeiro slide" />
                <Carousel.Caption className="carousel-caption">
                  <h2>Crie você mesmo seus jogos</h2>
                  <p>Jogos que facilitam a aprendizagem e melhoram o raciocínio lógico</p>
                  <a onClick={cadastrar} target="_blank" className="main-btn">Torne-se aluno</a>
                  <a onClick={login} className="main-btn ml-4">Área do aluno</a>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={jogando} className="d-block w-100" alt="Segundo slide" />
                <Carousel.Caption>
                  <h2>Você pode aprender se divertindo</h2>
                  <p>Melhore sua capacidade de solucionar problemas de uma forma descontraida.</p>
                  <a onClick={cadastrar} target="_blank" className="main-btn">Torne-se aluno</a>
                  <a onClick={login} className="main-btn ml-4">Área do aluno</a>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={crianca} className="d-block w-100" alt="terceiro slide" />
                <Carousel.Caption>
                  <h2>Linguagem de programação objetiva</h2>
                  <p>Conheça Python: A LP que tem uma redigibilidade como nenhuma outra.</p>
                  <a onClick={cadastrar} target="_blank" className="main-btn">Torne-se aluno</a>
                  <a onClick={login} className="main-btn ml-4">Área do aluno</a>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>

          {/* Sobre a empresa */}

          <div id="about-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 className="main-title">Sobre a Developer Kids</h3>
                </div>
                <div className="col-md-6">
                  <img className="img-fluid" src={plataforma} alt="Developer Kids" />
                </div>
                <div className="col-md-6">
                  <h3 className="about-title">Desenvolvendo mentes, criando o futuro</h3>
                  <p>Nossos projetos são adaptados ao público infanto-juvenil.</p>
                  <p>Após muitas pesquisas realizadas pela Developer Kids, adotamos um modelo de conteúdos interativos para chamar a atencão do nosso púbico alvo.</p>
                  <p>Todo nosso design é pensado de forma que cative de forma expontânea! Você pode aprender se divertindo.</p>
                  <p>Quais os benefícios?</p>
                  <ul id="about-list">
                    <li><FontAwesomeIcon icon={faCheck} className="me-1" /> Estímulo do raciocínio lógico e da criatividade</li>
                    <li><FontAwesomeIcon icon={faCheck} className="me-1" /> Ajuda na organização</li>
                    <li><FontAwesomeIcon icon={faCheck} className="me-1" /> Melhora o desempenho em matemática, inglês e física</li>
                    <li><FontAwesomeIcon icon={faCheck} className="me-1" /> Ajuda nas descobertas pessoais e profissionais</li>
                    <li><FontAwesomeIcon icon={faCheck} className="me-1" /> Capacidade de solucionar problemas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Serviços da empresa */}
          <div id="services-area">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3 className="main-title">O que garantimos?</h3>
                </div>
                <div className="col-md-4 service-box">
                  <i /><FontAwesomeIcon icon={faMobileScreenButton} className="me-1" />
                  <h4>Acessibilidade</h4>
                  <p>Acesse nossa plataforma de qualquer dispositivo, seja ele smartPhone, tablet ou computador .</p>
                </div>
                <div className="col-md-4 service-box">
                  <i /><FontAwesomeIcon icon={faChildren} />
                  <h4>Mentoria</h4>
                  <p>Proporcionamos um acompanhamento exclusivo para os usuários.</p>
                </div>
                <div className="col-md-4 service-box">
                  <i /><FontAwesomeIcon icon={faPaintbrush} />
                  <h4>Design Criativo</h4>
                  <p>Nossos designers são altamente capacitados para atrair cada vez mais o público infanto-juvenil.</p>
                </div>
                <div className="col-md-4 service-box">
                  <i /><FontAwesomeIcon icon={faUsers} />
                  <h4>Público aberto</h4>
                  <p>Com nosso serviço gratuito, disponibilizamos variados conteúdos visando o futuro da sociedade.</p>
                </div>
                <div className="col-md-4 service-box">
                  <i /><FontAwesomeIcon icon={faHandshakeAngle} />
                  <h4>Suporte 24/7</h4>
                  <p>Você sempre terá alguem da equipe disponível para suporte, em diferentes plataformas. (email,  ).</p>
                </div>
                <div className="col-md-4 service-box">
                  <i /><FontAwesomeIcon icon={faHandPointer} />
                  <h4>Interatividade</h4>
                  <p>Garantimos um conteúdo de fácil acesso e entendimento simples para gerar uma aprendizagem participativa.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Time */}
          <div id="team-area">
            <div className="container">
              <div className="row d-flex justify-content-center w-100">
                <div className="col-12">
                  <h3 className="main-title">Nosso time</h3>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={profile1} className="card-img-top avatar" alt="Imagem de Perfil 1" />
                    <div className="card-body">
                      <h5 className="card-title">Daniela Castro</h5>
                      <p className="card-text">Front-end Developer</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={profile2} className="card-img-top avatar" alt="Imagem de Perfil 2" />
                    <div className="card-body">
                      <h5 className="card-title">Daniel Caldeira</h5>
                      <p className="card-text">Front-end Developer</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={profile3} className="card-img-top avatar" alt="Imagem de Perfil 3" />
                    <div className="card-body">
                      <h5 className="card-title">Débora Moura</h5>
                      <p className="card-text">Front-end Developer</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={profile4} className="card-img-top avatar" alt="Imagem de Perfil 4" />
                    <div className="card-body">
                      <h5 className="card-title">Dinaide Barbosa</h5>
                      <p className="card-text">Front-end Developer</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img src={profile5} className="card-img-top avatar" alt="Imagem de Perfil 4" />
                    <div className="card-body">
                      <h5 className="card-title">Éverson Vieira</h5>
                      <p className="card-text">Front-end Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Portfólio */}
          <div className="col-12">
            <h3 className="main-title">Alguns projetos</h3>
          </div>
          <div id="portfolio-area">
            <div className="col-md-12" id="filter-btn-box">
              <button
                className={`main-btn filter-btn ${visibleType === 'todos' ? 'active' : ''}`}
                onClick={() => handleFilterClick('todos')}
              >
                Geral
              </button>
              <button
                className={`main-btn filter-btn ${visibleType === 'jogos' ? 'active' : ''}`}
                onClick={() => handleFilterClick('jogos')}
              >
                Jogos
              </button>
              <button
                className={`main-btn filter-btn ${visibleType === 'cursos' ? 'active' : ''}`}
                onClick={() => handleFilterClick('cursos')}
              >
                Cursos
              </button>
            </div>
            <div id="portfolio-area" className="row portif-cont">
              <div className="col-md-4 project-box jogos" style={{ display: (visibleType === 'jogos' || visibleType === 'todos') ? 'block' : 'none' }}>
                <img src={jogo1} className="img-fluid low-img" alt="Projeto 1" />
              </div>
              <div className="col-md-4 project-box jogos" style={{ display: (visibleType === 'jogos' || visibleType === 'todos') ? 'block' : 'none' }}>
                <img src={jogo2} className="img-fluid low-img" alt="Projeto 2" />
              </div>
              <div className="col-md-4 project-box jogos" style={{ display: (visibleType === 'jogos' || visibleType === 'todos') ? 'block' : 'none' }}>
                <img src={jogo3} className="img-fluid low-img" alt="Projeto 3" />
              </div>
              <div className="col-md-4 project-box cursos" style={{ display: (visibleType === 'cursos' || visibleType === 'todos') ? 'block' : 'none' }}>
                <img src={curso1} className="img-fluid low-img" alt="Projeto 4" />
              </div>
              <div className="col-md-4 project-box cursos" style={{ display: (visibleType === 'cursos' || visibleType === 'todos') ? 'block' : 'none' }}>
                <img src={curso2} className="img-fluid low-img" alt="Projeto 5" />
              </div>
              <div className="col-md-4 project-box cursos" style={{ display: (visibleType === 'cursos' || visibleType === 'todos') ? 'block' : 'none' }}>
                <img src={curso3} className="img-fluid low-img" alt="Projeto 6" />
              </div>
            </div>

          </div>
          {/* Newsletter */}
          <div id="news-area">
            <div className="container">
              <div className="col-md-12">
                <h3 className="main-title">Fique por dentro das atualizações</h3>
              </div>
              <p>Assine nossa lista de e-mails, e receba novos conteúdos sempre que a plataforma for atualizada</p>
              <Formik initialValues={{ email: "" }}
                onSubmit={handleClickAtualizacao}
              >
                <Form action ref={FormRef1}>
                  <Field type="text" className="form-control" id="email-input" name="email" placeholder="Seu e-mail" />
                  <input type="submit" id="news-btn" defaultValue="Inscrever" />
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </main>
      {/* Rodapé */}
      <footer>
        <div id="contact-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="main-title">Entre em contato conosco</h3>
              </div>
              <div className="col-md-4 contact-box">
                <i /><FontAwesomeIcon icon={faPhone} className="me-2" />
                <p><span className="contact-tile">Ligue para:</span> (48)99999-9999</p>
                <p><span className="contact-tile">Horários:</span> 8:00 - 19:00</p>
              </div>
              <div className="col-md-4 contact-box"><FontAwesomeIcon icon={faEnvelope} />
                <i className="fas fa-envelope" />
                <p><span className="contact-tile">Envie um email:</span> contato@DeveloperKids.com.br</p>
              </div>
              <div className="col-md-4 contact-box">
                <i className="fas fa-map-marker-alt" /><FontAwesomeIcon icon={faLocationDot} />
                <p><span className="contact-tile">Venha tomar um café:</span> Rua Lorem Ipsum - 1314</p>
              </div>
              <div className="col-md-6" id="msg-box">
                <p>Nos deixe um feedback</p>
                <p>Sua opnião é de grande importância</p>
              </div>
              <div className="col-md-6" id="contact-form">
                <Formik
                  initialValues={{ email: "", subject: "", message: "" }}
                  onSubmit={handleClickFeedback}
                >
                  <Form action ref={FormRef2}>
                    <Field type="text" className="form-control" placeholder="E-mail" name="email" />
                    <Field type="text" className="form-control" placeholder="Assunto" name="subject" />
                    <Field className="form-control" rows={3} placeholder="Sua mensagem..." name="message" defaultValue={""} />
                    <input type="submit" className="main-btn" />
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
        <div id="copy-area">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>Desenvolvido pela <a href="https://www.DeveloperKids.com.br" target="_blank">DeveloperKids</a> © 2023</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Scripts do projeto */}
    </div>

  );
}