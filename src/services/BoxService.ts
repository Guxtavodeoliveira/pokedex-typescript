import { PokemonResumo } from "../models/Pokemon";
import { formatarPokemon, mensagemOk, mensagemAviso } from "../utils/formatadores";

export class CatalogoPokemon {
  private pokemons: PokemonResumo[] = [];

  adicionar(pokemon: PokemonResumo): void {
    const jaExiste = this.pokemons.some((item) => item.id === pokemon.id);

    if (jaExiste) {
      console.log(mensagemAviso(`${pokemon.nome} já está no catálogo.`));
      return;
    }

    this.pokemons.push(pokemon);
    console.log(mensagemOk(`${pokemon.nome} adicionado ao catálogo.`));
  }

  listar(): void {
    if (this.pokemons.length === 0) {
      console.log(mensagemAviso("Catálogo vazio."));
      return;
    }

    console.log("\nCatálogo atual:");
    this.pokemons.forEach((pokemon) => {
      console.log(formatarPokemon(
        pokemon.id,
        pokemon.nome,
        pokemon.tipos,
        pokemon.altura,
        pokemon.peso
      ));
    });
  }

  remover(id: number): void {
    const existe = this.pokemons.some((pokemon) => pokemon.id === id);

    if (!existe) {
      console.log(mensagemAviso("Nenhum Pokémon encontrado com esse ID."));
      return;
    }

    this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
    console.log(mensagemOk("Pokémon removido do catálogo."));
  }

  buscarPorId(id: number): PokemonResumo | undefined {
    return this.pokemons.find((pokemon) => pokemon.id === id);
  }

  todosTemNome(): boolean {
    return this.pokemons.every((pokemon) => pokemon.nome !== "");
  }
}