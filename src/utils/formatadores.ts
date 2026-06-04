export function formatarPokemon(id: number, nome: string, tipos: string[], altura: number, peso: number): string{
   return `#${id} - ${nome} | Tipos: ${tipos.join(", ")} | Altura: ${altura} | Peso: ${peso}`;
}

export function mensagemOk(texto: string): string{
    return `[OK] ${texto}`;
}

export function mensagemErro(texto: string): string{
    return `[ERRO] ${texto}`;
}

export function mensagemAviso(texto: string): string{
    return `[AVISO] ${texto}`;
}