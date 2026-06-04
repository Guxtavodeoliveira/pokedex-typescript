import { PokemonResumo, PokemonApiResponse } from "../models/Pokemon";
import { APIerror } from "../models/CustomErrors";
import { mensagemErro } from "../utils/formatadores";

export async function buscarPokemon(nomeOuId: string): Promise<PokemonResumo | null> {
  const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`;

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      throw new APIError(`Pokémon não encontrado: ${nomeOuId}`);
    }
