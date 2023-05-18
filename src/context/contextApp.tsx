import { ReactNode, createContext, useState } from "react";

interface ListProps {
  label: string;
  value: string;
}

interface AppContextProps {
  listCountry: ListProps[];
  setListCountry: (list: ListProps[]) => void;
  countrySelected: string;
  setCountrySelected: (country: string) => void;

  listSeason: ListProps[];
  setListSeason: (list: ListProps[]) => void;
  seasonSelected: string;
  setSeasonSelected: (season: string) => void;

  leagueList: ListProps[];
  setListLeague: (list: ListProps[]) => void;
  leagueSelected: string;
  setLeagueSelected: (league: string) => void;

  teamList: ListProps[];
  setListTeam: (list: ListProps[]) => void;
  teamSelected: string;
  setTeamSelected: (team: string) => void;

  key: string;
  setKey: (key: string) => void;
}

interface AppProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

export const AppProvider = ({ children }: AppProviderProps) => {
  const [listCountry, setListCountry] = useState<ListProps[]>([]);
  const [countrySelected, setCountrySelected] = useState("");

  const [listSeason, setListSeason] = useState<ListProps[]>([]);
  const [seasonSelected, setSeasonSelected] = useState("");

  const [leagueList, setListLeague] = useState<ListProps[]>([]);
  const [leagueSelected, setLeagueSelected] = useState("");

  const [teamList, setListTeam] = useState<ListProps[]>([]);
  const [teamSelected, setTeamSelected] = useState("");

  const [key, setKey] = useState("");

  const value: AppContextProps = {
    listCountry,
    setListCountry,
    countrySelected,
    setCountrySelected,
    listSeason,
    setListSeason,
    seasonSelected,
    setSeasonSelected,
    leagueList,
    setListLeague,
    leagueSelected,
    setLeagueSelected,
    teamList,
    setListTeam,
    teamSelected,
    setTeamSelected,
    key,
    setKey,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
