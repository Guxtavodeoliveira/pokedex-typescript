import { PokemonResumo, PokemonApiResponse } from "../models/Pokemon";
import { APIError } from "../models/CustomErrors";
import { mensagemErro } from "../utils/formatadores";

export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
  const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`;

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new APIError(`Pokémon não encontrado: ${nomeOuId}`);
    }

    const dados = await resposta.json() as PokemonApiResponse;

    const tipos = dados.types.map((item) => item.type.name);

    return {
      id: dados.id,
      nome: dados.name,
      tipos: tipos,
      altura: dados.height,
      peso: dados.weight,
    };

  } catch (erro) {
    if (erro instanceof APIError) {
      console.log(mensagemErro(erro.message));
    } else {
      console.log(mensagemErro("Não foi possível buscar o Pokémon."));
    }
    return null;
  }
}