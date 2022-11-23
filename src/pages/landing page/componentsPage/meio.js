import React from 'react'
import roubo from '../src/img/roubo.png'
import carroCapotado from '../src/img/carro-capotado.png'
import chamas from '../src/img/carro-em-chamas.png'
import colisao from '../src/img/colisao-de-carro.png'
import caminhaoMoto from '../src/img/carromotocaminhao.svg'

const Meio = () => {
  return (
    <>
    <div className="meio1">
    <div className="txt1">
      <h3>
        Melhores oportunidades para não ter dor de cabeça no futuro
      </h3>
      <span>
        O risco de bater seu carro ou ser roubado é muito alto, não fique desprotegido. Faça agora uma cotação e contrate nossos serviços.
      </span>
      {/* <div className="gear">
        <img src="./src/img/gear.svg" alt="gear" />
      </div> */}
    </div>
    <div className="principais">
      <h3>
        Principais Benefícios
      </h3>
      <div className="benes">
        <div className="furto">
          <img src={roubo} alt="Roubo e Furto" />
          <h4 className="h4benes">
            Furto / Roubo
          </h4>
          <div className="risco">
          </div>
          <span>
            Seja ressarcido em até 100% do valor de tabela FIPE caso seu veículo seja roubado ou furtado.
          </span>
        </div>
        <div className="perda">
          <img src={carroCapotado} alt="PerdaTotal" />
          <h4 className="h4benes">
            Perda total
          </h4>
          <div className="risco">
          </div>
          <span>
            Se o estrago configurar Perda Total, nós iremos indenizá-lo por este prejuízo.
          </span>
        </div>
      </div>
        <div className="principais2">
          <div className={"incendio"}>
            <img src={chamas}alt="incêndio" />
            <h4 className="h4benes">
              Incêndio
            </h4>
            <div className="risco2">
            </div>
            <span>
              Com a gente o seu veículo fica protegido em casos de incêndio com indenização total ou parcial.
            </span>
          </div>
          <div className="incendio">
            <img src={colisao} alt="proteçãoTerceiros" />
            <h4 className="h4benes">
              Proteção para terceiros
            </h4>
            <div className="risco2m">
            </div>
            <span>
              Caso você se envolva em um acidente com outro veículo, os consertos são por nossa conta.
            </span>
          </div>
          <div id="Protecao">
        </div>
      </div>
    </div>
  </div>
  <div className="meio2">
    <div className="principal">
      <div className="background">
       <img src={caminhaoMoto} alt="imagemVeículos" />
      </div>
      <div className="txt">
        <h3>
          Proteja seu veículo sem sair de casa
        </h3>
        <span>
          Escolha um plano, inclua opcionais e faça o pagamento on-line.
        </span>
        <a href="#">fazer uma cotação</a>
      </div>
    </div>
  </div>
    </>
  )
}

export { Meio }