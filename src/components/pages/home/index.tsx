import { useContext, useEffect } from "react";
import { AppContext } from "../../../context/contextApp";
import {
  getCountries,
  getLeagues,
  getSeason,
  getTeams,
} from "../../../service/solicitations";
import { ButtonLink } from "../../atoms/button";
import { Select } from "../../molecules/input/select";
import { Title } from "../../molecules/title";
import { BodyTemplate } from "../../organisms/body";
import { Container } from "./home.styles";

export const Home = () => {
  const {
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
    setTeamSelected,
  } = useContext(AppContext);

  const getCountriesList = () => {
    getCountries().then((countries) => {
      const formattedCountries = countries.response.map((country: any) => ({
        label: country.name,
        value: country.code,
      }));
      setListCountry(formattedCountries);
    });
  };

  const getTempList = () => {
    getSeason().then((seasons) => {
      const formattedSeasons = seasons.response.map((season: string) => ({
        label: season.toString(),
        value: season.toString(),
      }));

      setListSeason(formattedSeasons);
    });
  };

  const getLeaguesList = () => {
    getLeagues(countrySelected, seasonSelected).then((leagues) => {
      console.log({ leagues });
      const formattedLeagues = leagues.response.map((leagueInfo: any) => ({
        label: leagueInfo.league.name,
        value: leagueInfo.league.id.toString(),
      }));
      setListLeague(formattedLeagues);
    });
  };

  const getTeamsList = () => {
    getTeams(leagueSelected, seasonSelected).then((teams) => {
      const formattedTeams = teams.response[0].league.standings[0].map(
        (teamInfo: any) => ({
          label: teamInfo.team.name,
          value: teamInfo.team.id.toString(),
        })
      );
      setListTeam(formattedTeams);
    });
  };

  useEffect(() => {
    getCountriesList();
  }, []);

  useEffect(() => {
    if (countrySelected) getTempList();
  }, [countrySelected]);

  useEffect(() => {
    if (seasonSelected) getLeaguesList();
  }, [seasonSelected]);

  useEffect(() => {
    if (leagueSelected) getTeamsList();
  }, [leagueSelected]);

  return (
    <>
      <BodyTemplate>
        <Container>
          <Title>Selecione o País</Title>
          <Select
            disabled={false}
            values={listCountry}
            onChange={(value) => setCountrySelected(value)}
          />
        </Container>
        <Container>
          <Title>Selecione a Temporada</Title>
          <Select
            disabled={!!!countrySelected}
            values={listSeason}
            onChange={(value) => setSeasonSelected(value)}
          />
        </Container>
        <Container>
          <Title>Selecione a Liga</Title>
          <Select
            disabled={!!!seasonSelected}
            values={leagueList}
            onChange={(value) => setLeagueSelected(value)}
          />
        </Container>
        <Container>
          <Title>Selecione o Time</Title>
          <Select
            disabled={!!!leagueSelected}
            values={teamList}
            onChange={(value) => setTeamSelected(value)}
          />
        </Container>
        <ButtonLink to="/info">Continuar</ButtonLink>
      </BodyTemplate>
    </>
  );
};
