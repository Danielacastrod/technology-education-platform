import React from "react";

export default function Nav() {
  const { c_emailresp_cont } = useParams();
  const navigate = useNavigate();

  const encodedEncryptedEmail = encodeURIComponent(c_emailresp_cont);

  function Home() {
    navigate(`/home/${encodedEncryptedEmail}`);
  }

  function Sair() {
    navigate("/");
  }

  return (
    <nav>
      <button className="logoInicio--app" onClick={Home}></button>
      <div className="boxCabecalho--app">
        <button className="botaoPerfil--app"></button>
        <button className="botaoSair--app" onClick={Sair}>
          Sair
        </button>
      </div>
    </nav>
  );
}
