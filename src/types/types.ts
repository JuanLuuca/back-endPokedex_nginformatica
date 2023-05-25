export interface TypeBody {
  email: string;
  password: string;
  token: string | number
}

export interface typeFavor {
  id: number,
  name: string,
  imagemPokemon: string,
  experiencia: number,
  peso: number,
}

export interface typeCapture {
  id: number,
  name: string,
  imagemPokemon: string,
  experiencia: number,
  peso: number,
  habitat: string,
  local_captura: string,
  alimentacao: string,
  fraquezas: string,
  ataques: string,
}