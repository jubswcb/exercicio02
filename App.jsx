import React from 'react';
import { Disponiveis, Emprestados, Reservados } from './ComponentesBiblioteca';
import './Biblioteca.css';

export default function App() {
  const livrosDisponiveis = [
    { titulo: 'Percy Jackson e o Ladrão de Raios', autor: 'Rick Riordan' },
    { titulo: 'Coisas Óbvias Sobre o Amor', autor: 'Elayne Baeta' },
    { titulo: 'Jogos Vorazes', autor: 'Suzanne Collins' },

  ];

  const livrosEmprestados = [
    { titulo: 'Não é como nos filmes', emprestadoPara: 'Larissa Bragança' },
    { titulo: 'Harry Potter e a Pedra Filosofal', emprestadoPara: 'Erick Oliveira' },
    { titulo: 'Star Wars: A Vingança dos Sith (Episódio III)', emprestadoPara: 'Marcos Vinícius' },
  ];

  const livrosReservados = [
    { titulo: 'Quarto de Despejo', dataReserva: '25/11/2026' },
    { titulo: 'Capitães de Areia', dataReserva: '28/11/2026' },
    { titulo: 'Orgulho e Preconceito', dataReserva: '10/12/2026' },
    { titulo: 'Maze Runner: correr ou morrer', dataReserva: '17/12/2026' }
  ];

  return (
    <main className="biblioteca-container">
      <h1>Gestão da Biblioteca</h1>
      <div className="colunas-grid">
        <Disponiveis livros={livrosDisponiveis} />
        <Emprestados livros={livrosEmprestados} />
        <Reservados livros={livrosReservados} />
      </div>
    </main>
  );
}
