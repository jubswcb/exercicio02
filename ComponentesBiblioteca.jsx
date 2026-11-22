import React from 'react';

export function Disponiveis({ livros }) {
  return (
    <section className="coluna">
      <h2>Disponíveis ({livros.length})</h2>
      <ul>
        {livros.map((livro, index) => (
          <li key={index} className="card">
            <strong>{livro.titulo}</strong>
            <span>Autor: {livro.autor}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Emprestados({ livros }) {
  return (
    <section className="coluna">
      <h2>Emprestados ({livros.length})</h2>
      <ul>
        {livros.map((livro, index) => (
          <li key={index} className="card">
            <strong>{livro.titulo}</strong>
            <span>Emprestado para: {livro.emprestadoPara}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Reservados({ livros }) {
  return (
    <section className="coluna">
      <h2>Reservados ({livros.length})</h2>
      <ul>
        {livros.map((livro, index) => (
          <li key={index} className="card">
            <strong>{livro.titulo}</strong>
            <span>Data da reserva: {livro.dataReserva}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
