import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCoffee, faMobileScreenButton, faUserGroup } from '@fortawesome/free-solid-svg-icons'
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
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



export default function MainScreen() {

    const data = [
        {
            image: { walp },
            caption: "Caption",
            description: "Crie você mesmo seus jogos"
        },
        {
            image: { jogando },
            caption: "Caption",
            description: "Você pode aprender se divertindo"
        },
        {
            image: { crianca },
            caption: "Caption",
            description: "Linguagem de programação objetiva"
        }
    ]

    const navigate = useNavigate();
    function cadastrar() {
        navigate("/cadastro");
    }
    function login() {
        navigate("/login");
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
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
            <link rel="stylesheet" href="css/styles.css" />
            {/* Scripts (jQuery não pode ser o slim que vem do Boostrap) */}
            {/* Font Awesome */}
            {/* Progress Bar */}
            {/* Parallax */}
            <header>
                <div className="container" id="nav-container">
                    {/* add essa class */}
                    <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
                        <a className="navbar-brand" href="index.html">
                            <img id="logo" src={logoDeveloperKids} alt="Developer Kids" />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-links" aria-controls="navbar-links" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbar-links">
                            <div className="navbar-nav">
                                <a className="nav-item nav-link" id="home-menu" href="#">Home</a>
                                <a className="nav-item nav-link" id="about-menu" href="#about-area">Sobre nós</a>
                                <a className="nav-item nav-link" id="services-menu" href="#services-area">Serviços</a>
                                <a className="nav-item nav-link" id="team-menu" href="#team-area">Time</a>
                                <a className="nav-item nav-link" id="portfolio-menu" href="#portfolio-area">Projetos</a>
                                <a className="nav-item nav-link" id="contact-menu" href="#contact-area">Contato</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <main>
                <div className="container-fluid">
                    {/* slider */}

                    <div id="mainSlider" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={walp} className="d-block w-100" alt="Conteúdo interativo" />
                                {/* tirar classe d-none */}
                                <div className="carousel-caption d-md-block">
                                    <h2>Crie você mesmo seus jogos</h2>
                                    <p>Jogos que facilitam a aprendizagem e melhoram o raciocínio lógico</p>
                                    <a onClick={cadastrar} target="_blank" className="main-btn">Torne-se aluno</a>
                                    <a onClick={login} className="main-btn ml-4">Área do aluno</a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={jogando} className="d-block w-100" alt="Engenharia de software" />
                                <div className="carousel-caption d-md-block">
                                    <h2>Você pode aprender se divertindo</h2>
                                    <p>Melhore sua capacidade de solucionar problemas de uma forma descontraida.</p>
                                    <a onClick={cadastrar} target="_blank" className="main-btn">Torne-se aluno</a>
                                    <a onClick={login} className="main-btn ml-4">Área do aluno</a>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={crianca} className="d-block w-100" alt="Manutenção em software" />
                                <div className="carousel-caption d-md-block">
                                    <h2>Linguagem de programação objetiva</h2>
                                    <p>Conheça Python: A LP que tem uma redigibilidade como nenhuma outra.</p>
                                    <a onClick={cadastrar} target="_blank" className="main-btn">Torne-se aluno</a>
                                    <a onClick={login} className="main-btn ml-4">Área do aluno</a>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#mainSlider" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#mainSlider" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="sr-only">Next</span>
                        </a>
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
                                    <h3 className="about-title">Uma plataforma que pensa no futuro</h3>
                                    <p>Nossos projetos são adaptados ao público infanto-juvenil.</p>
                                    <p>Após muitas pesquisas realizadas pela DevPro, adotamos um modelo de conteúdos interativos para chamar a atencão do nosso púbico alvo.</p>
                                    <p>Todo nosso design é pensado de forma que cative de forma expontânea! Você pode aprender se divertindo.</p>
                                    <p>Quais os benefícios?</p>
                                    <ul id="about-list">
                                        <li><i className="fas fa-check" /><FontAwesomeIcon icon={faCheck} className="me-1" /> Estímulo do raciocínio lógico e da criatividade</li>
                                        <li><i className="fas fa-check" /><FontAwesomeIcon icon={faCheck} className="me-1" /> Ajuda na organização</li>
                                        <li><i className="fas fa-check" /><FontAwesomeIcon icon={faCheck} className="me-1" /> Melhora o desempenho em matemática, inglês e física</li>
                                        <li><i className="fas fa-check" /><FontAwesomeIcon icon={faCheck} className="me-1" /> Ajuda nas descobertas pessoais e profissionais</li>
                                        <li><i className="fas fa-check" /><FontAwesomeIcon icon={faCheck} className="me-1" /> Capacidade de solucionar problemas</li>
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
                                    <i className="fas fa-mobile-alt" /><FontAwesomeIcon icon={faMobileScreenButton} className="me-1" />
                                    <h4>Acessibilidade</h4>
                                    <p>Acesse nossa plataforma de qualquer dispositivo, seja ele smartPhone, tablet ou computador .</p>
                                </div>
                                <div className="col-md-4 service-box">
                                    <i className="fas fa-shopping-cart" /><FontAwesomeIcon icon={faUserGroup} />
                                    <h4>Mentoria</h4>
                                    <p>Proporcionamos um acompanhamento exclusivo para os usuários.</p>
                                </div>
                                <div className="col-md-4 service-box">
                                    <i className="fas fa-paint-brush" />
                                    <h4>Design Criativo</h4>
                                    <p>Nossos designers são altamente capacitados para atrair cada vez mais o público infanto-juvenil.</p>
                                </div>
                                <div className="col-md-4 service-box">
                                    <i className="fab fa-google" />
                                    <h4>Público aberto</h4>
                                    <p>Com nosso serviço gratuito, disponibilizamos variados conteúdos visando o futuro da sociedade.</p>
                                </div>
                                <div className="col-md-4 service-box">
                                    <i className="fas fa-hands-helping" />
                                    <h4>Suporte 24/7</h4>
                                    <p>Você sempre terá alguem da equipe disponível para suporte, em diferentes plataformas. (chat, email, skype).</p>
                                </div>
                                <div className="col-md-4 service-box">
                                    <i className="fas fa-user" />
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
                                            <h5 className="card-title text-nowrap">Daniel Caldeira</h5>
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
                                            <h5 className="card-title text-nowrap">Dinaide Barbosa</h5>
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
                    {/* área tecnológica */}
                    <div id="apply-area">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 apply-box" id="company-img" />
                                <div className="col-md-6 apply-box" id="pattern-img">
                                    <h4>Gosta da área tecnológica?</h4>
                                    <p>Clique no botão abaixo e confira os benefícios que disponibilizamos.</p>
                                    <p>Aqui você terá a chance de aprender com as melhores tecnologias e os profissionais mais capacitados.</p>
                                    <a href="#" className="main-btn" id="apply-btn">Saiba Mais</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Portfólio */}
                    <div id="portfolio-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <h3 className="main-title">Conheça alguns projetos</h3>
                                </div>
                                <div className="col-md-12" id="filter-btn-box">
                                    <button className="main-btn filter-btn active" id="geral-btn">Geral</button>
                                    <button className="main-btn filter-btn" id="jogos-btn">Jogos</button>
                                    <button className="main-btn filter-btn" id="cursos-btn">Cursos</button>
                                </div>
                                <div className="col-md-4 project-box jogos">
                                    <img src={jogo1} className="img-fluid" alt="Projeto 1" />
                                </div>
                                <div className="col-md-4 project-box jogos">
                                    <img src={jogo2} className="img-fluid" alt="Projeto 2" />
                                </div>
                                <div className="col-md-4 project-box jogos">
                                    <img src={jogo3} className="img-fluid" alt="Projeto 3" />
                                </div>
                                <div className="col-md-4 project-box cursos">
                                    <img src={curso1} className="img-fluid" alt="Projeto 4" />
                                </div>
                                <div className="col-md-4 project-box cursos">
                                    <img src={curso2} className="img-fluid" alt="Projeto 5" />
                                </div>
                                <div className="col-md-4 project-box cursos">
                                    <img src={curso3} className="img-fluid" alt="Projeto 6" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Newsletter */}
                    <div id="news-area">
                        <div className="container">
                            <div className="col-md-12">
                                <h3 className="main-title">Fique por dentro das novidades</h3>
                            </div>
                            <p>Assine nossa lista de e-mails, e receba novos conteúdos sempre que a plataforma for atualizada</p>
                            <form action>
                                <input type="text" className="form-control" id="email-input" name="email" placeholder="Seu melhor e-mail" />
                                <input type="submit" id="news-btn" defaultValue="Inscrever" />
                            </form>
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
                                <i className="fas fa-phone" />
                                <p><span className="contact-tile">Ligue para:</span> (48)99999-9999</p>
                                <p><span className="contact-tile">Horários:</span> 8:00 - 19:00</p>
                            </div>
                            <div className="col-md-4 contact-box">
                                <i className="fas fa-envelope" />
                                <p><span className="contact-tile">Envie um email:</span> contato@DeveloperKids.com.br</p>
                            </div>
                            <div className="col-md-4 contact-box">
                                <i className="fas fa-map-marker-alt" />
                                <p><span className="contact-tile">Venha tomar um café:</span> Rua Lorem Ipsum - 1314</p>
                            </div>
                            <div className="col-md-6" id="msg-box">
                                <p>Ou nos deixe uma mensagem:</p>
                            </div>
                            <div className="col-md-6" id="contact-form">
                                <form action>
                                    <input type="text" className="form-control" placeholder="E-mail" name="email" />
                                    <input type="text" className="form-control" placeholder="Assunto" name="subject" />
                                    <textarea className="form-control" rows={3} placeholder="Sua mensagem..." name="message" defaultValue={""} />
                                    <input type="submit" className="main-btn" />
                                </form>
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