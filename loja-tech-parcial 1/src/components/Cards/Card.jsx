import React from "react";
import "./card.css";
import teclado from "../../assets/teclado.jpg"; 
import mouse from "../../assets/mouse.jpg"; 
import cadeira from "../../assets/cadeira.jpg"; 
export default function Card() {
  // Objeto com dados do produto
  const produtos = [ 
    
    {
    nome: "Teclado Mecânico",
    descricao: "Switches lineares, keycaps PBT e RGB per-key.",
    preco: 399.90,
    imagem: teclado
  },
  
  {
    nome: "Mouse Mecânico",
    descricao: "Mouse legal.",
    preco: 205.00,
    imagem: mouse
  },

  {
    nome: "Cadeira Mecânico",
    descricao: "Cadeira  boa de apoiar.",
    preco: 19000.90,
    imagem: cadeira
  }
]
   

return (
  <>
    {produtos.map((produto, index) => (
      <article className="card" key={index}>
        <img
          className="card__img"
          src={produto.imagem}
          alt={produto.nome}
        />

        <div className="card__body">
          <h3 className="card__title">{produto.nome}</h3>
          <p className="card__desc">{produto.descricao}</p>
        </div>

        <div className="card__footer">
          <span className="card__price">
            R$ {produto.preco.toFixed(2).replace(".", ",")}
          </span>
          <button
            className="card__btn"
            onClick={() => alert(`Ver mais: ${produto.nome}`)}
          >
            Ver mais
          </button>
        </div>
      </article>
    ))}
  </>
)};