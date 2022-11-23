import React from 'react'
import userIcon from '../src/img/userIcon.png'
import carroEsquerda from '../src/img/carro-esquerda.png'
import carroDireita from '../src/img/carro-direita.png'


const Header = () => {
  return (
    <main className="corpo">
    <header className="cabeca">
      <h1>SafeCar</h1>
      <nav className="navi">
        <ul className="ancoras">
          <li className="ancora"><a href="#Protecao"><p>Proteção Veicular</p></a></li>
          <li className="ancora"><a href="#Beneficios"><p>Benefícios</p></a></li>
          <li className="ancora"><a href="#Assistencia"><p>Assistência 24 horas</p></a></li>
          <li className="ancora"><a href="/view_users"><p>Listas Usuários</p></a></li>
        </ul>
      </nav>
      <div className="info1">
        <img src={userIcon} alt="iconUser" />
          <h2>Suas<br />informações</h2>
          <label for="">Nome</label>
          <input type="text" name="nome" id="name" />
          <label for="">Email</label>
          <input type="text" name="email" id="email" />
          <label for="">WhatsApp</label>
          <input type="text" name="tel" id="tel" />
          <a href="https://wa.me/5513991518147">Proximo Passo</a>
      </div>
    </header>
    <div className="bsimu">
      <a href="https://wa.me/5513991518147" className="cotacao">Simular cotação</a>
      </div>
      <div className="imageCar">
        <img className="img1" src={carroDireita} alt="carro1" />
        <img className="img2" src={carroEsquerda} alt="carro" />
        {/* <img className="quadrado" src="./src/img/Rectangle 6.svg" alt="quadrado" />
        <img className="triangulo" src="./src/img/Polygon 1.svg" alt="triângulo" />
        <img className="bola" src="./src/img/Subtract.svg" alt="bola" />
        <img className="linha" src="./src/img/Line.svg" alt="linha" /> */}
      </div>
    </main>
  )
}

export { Header }