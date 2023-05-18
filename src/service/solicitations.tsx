import { fetchData } from "./axios";

export const getCountries = async () => {
  try {
    const countries = await fetchData("countries");
    return countries;
  } catch (e) {
    return null;
  }
};

export const getSeason = async () => {
  try {
    const season = await fetchData(`leagues/seasons`);
    return season;
  } catch (e) {
    return null;
  }
};

export const getLeagues = async (country: string, season: string) => {
  try {
    const leagues = await fetchData(
      `leagues`,
      `?code=${country}&season=${season}`
    );
    return leagues;
  } catch (e) {
    return null;
  }
};

export const getTeams = async (
  league: string,
  season: string
  // country: string
) => {
  try {
    const teams = await fetchData(
      `standings`,
      `?league=${league}&season=${season}`
    );
    return teams;
  } catch (e) {
    return null;
  }
};

export const getPlayers = async (team: string, season: string) => {
  try {
    const players = await fetchData(
      `players`,
      `?team=${team}&season=${season}`
    );
    return players;
  } catch (e) {
    return null;
  }
};

export const getFormation = async (
  league: string,
  season: string,
  team: string
) => {
  try {
    const formation = await fetchData(
      `teams/statistics`,
      `?season=${season}&team=${team}&league=${league}`
    );
    return formation;
  } catch (e) {
    return null;
  }
};
