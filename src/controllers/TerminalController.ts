import { buscarPokemon } from "../services/PokeApiService";
import { CatalogoPokemon } from "../services/BoxService";
import { mensagemOk, mensagemErro } from "../utils/formatadores";

export class TerminalController {
  private catalogo: CatalogoPokemon;

  constructor() {
    this.catalogo = new CatalogoPokemon();
  }

  async executar(): Promise<void> {
    console.log("=== Pokédex TypeScript Lite ===\n");

    const pokemon1 = await buscarPokemon("pikachu");
    if (pokemon1 !== null) {
      this.catalogo.adicionar(pokemon1);
    }

    const pokemon2 = await buscarPokemon("charmander");
    if (pokemon2 !== null) {
      this.catalogo.adicionar(pokemon2);
    }

    const pokemon3 = await buscarPokemon("bulbasaur");
    if (pokemon3 !== null) {
      this.catalogo.adicionar(pokemon3);
    }

    console.log("\n--- Tentando adicionar pikachu duplicado ---");
    const pokemonDuplicado = await buscarPokemon("pikachu");
    if (pokemonDuplicado !== null) {
      this.catalogo.adicionar(pokemonDuplicado);
    }

    console.log("\n--- Tentando buscar pokemon inexistente ---");
    await buscarPokemon("pokemon-inexistente");

    console.log("\n--- Listando catálogo ---");
    this.catalogo.listar();

    console.log("\n--- Removendo pikachu (ID 25) ---");
    this.catalogo.remover(25);

    console.log("\n--- Catálogo após remoção ---");
    this.catalogo.listar();

    console.log("\n--- Verificando se todos têm nome ---");
    const todosTemNome = this.catalogo.todosTemNome();
    console.log(mensagemOk(`Todos têm nome: ${todosTemNome}`));
  }
}