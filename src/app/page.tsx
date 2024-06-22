import React from 'react';
import CardSection from "@/components/CardSection";
import Header from "@/components/Header";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header titulo="Squirtle" />
      <CardSection titulo="Informações do Squirtle">
        <p>Squirtle é um Pokémon do tipo Água introduzido na Primeira Geração. Ele evolui para Wartortle a partir do nível 16.</p>
      </CardSection>
      <CardSection titulo="Habilidades do Squirtle">
        <ul>
          <li>Torrent</li>
          <li>Rain Dish (Hidden Ability)</li>
        </ul>
      </CardSection>
      <CardSection titulo="Evoluções do Squirtle">
        <Link href="/evolucoes?evolucao=Wartortle">
          <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" alt="Wartortle" />
        </Link>
      </CardSection>
    </main>
  );
}
