import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="principal">
      <div className="background1">
        <h2>
          SafeCar
        </h2>
        <span>
          (13) 991518147
        </span>
        <span className="contato">
          contato@safecar.com
        </span>
      </div>
        <h2 className="menu1">
          Menu
        </h2>
        <div className="ancorasl">
          <a href="#">Home</a>
          <a href="#">Serviços</a>
        </div>
        <div className="ancorasl1">
          <a href="#">Preços</a>
          <a href="#">Contato</a>
        </div>
        <h2 className="menu1">
          Social
        </h2>
        <div className="ancorasl">
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
        </div>
        <div className="ancorasl1">
          <a href="#">Facebook</a>
          <a href="#">Linkedin</a>
        </div>
    </div>
  </footer>
  )
}

export { Footer }