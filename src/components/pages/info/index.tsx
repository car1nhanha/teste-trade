import { Chart, registerables } from "chart.js";
import { useContext, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { AppContext } from "../../../context/contextApp";
import { getFormation, getPlayers } from "../../../service/solicitations";
import { Title } from "../../molecules/title";
import { BodyTemplate } from "../../organisms/body";
import { Table } from "../../organisms/table";
import {
  Container,
  ContainerNames,
  ImagePlayer,
  PlayerCard,
  SimpleText,
} from "./info.styles";
Chart.register(...registerables);

interface Dataset {
  label: string;
  data: number[];
  borderWidth: number;
  key: string;
}

interface GraphData {
  labels: string[];
  datasets: Dataset[];
}

interface playerProps {
  id: string;
  name: string;
  photo: string;
}

interface extractPlayerDataProps {
  response: {
    player: playerProps;
  }[];
}

interface endpointsProps {
  played: string;
  wins: string;
  draws: string;
  loses: string;
}

function extractPlayerData({ response }: extractPlayerDataProps) {
  return response.map((item) => ({
    id: item.player.id,
    name: item.player.name,
    photo: item.player.photo,
  }));
}

function updateGraphData(formation: any) {
  const Data = {
    labels: [] as string[],
    datasets: [
      {
        label: "# of Goals",
        data: [] as number[],
        borderWidth: 1,
        key: "1",
      },
    ],
  };

  for (let key in formation.response.goals.for.minute) {
    Data.labels.push(key);
    Data.datasets[0].data.push(formation.response.goals.for.minute[key].total);
  }
  console.log({ graphData: Data });

  return Data;
}

export const Info = () => {
  const { teamSelected, seasonSelected, leagueSelected } =
    useContext(AppContext);

  const [players, setPlayers] = useState<playerProps[]>([]);
  const [formation, setFormation] = useState<string>("4-3-3");
  const [endpoint, setEndpoint] = useState<endpointsProps[]>([]);
  const [graphData, setGraphData] = useState<GraphData>();

  const columns = [
    { key: "played", header: "Jogos" },
    { key: "wins", header: "Vitórias" },
    { key: "draws", header: "Derrotas" },
    { key: "loses", header: "Empates" },
  ];

  const getPlayersList = () => {
    getPlayers(teamSelected, seasonSelected).then((players) => {
      setPlayers(extractPlayerData(players));
    });
  };

  const getFormationString = () => {
    getFormation(leagueSelected, seasonSelected, teamSelected).then(
      (formation) => {
        const mostUsedFormation = formation.response.lineups.reduce(
          (prev: any, current: any) => {
            return prev.played > current.played ? prev : current;
          }
        );

        setFormation(mostUsedFormation.formation);

        const result: endpointsProps = {
          played: formation.response.fixtures.played.total.toString(),
          wins: formation.response.fixtures.wins.total.toString(),
          draws: formation.response.fixtures.draws.total.toString(),
          loses: formation.response.fixtures.loses.total.toString(),
        };

        console.log({ result });
        setEndpoint([result]);
        setGraphData(updateGraphData(formation));
      }
    );
  };

  useEffect(() => {
    getPlayersList();
    getFormationString();
  }, []);

  return (
    <>
      <BodyTemplate>
        <Container>
          <Title>Jogadores</Title>
          <ContainerNames>
            {players?.map((jogador) => (
              <PlayerCard key={jogador.id}>
                <ImagePlayer src={jogador.photo} />
                {jogador.name}
              </PlayerCard>
            ))}
          </ContainerNames>
        </Container>
        {/*  */}
        <Container>
          <Title>Formação mais usada</Title>
          <SimpleText>{formation}</SimpleText>
        </Container>
        {/*  */}
        <Container>
          <Title>Tabela</Title>
          {endpoint.length > 0 && <Table columns={columns} data={endpoint} />}
        </Container>
        {/*  */}
        <Container>
          <Title>Gráfico</Title>
          {graphData && graphData.datasets.length > 0 && (
            <Bar data={graphData} height={50} />
          )}
        </Container>
      </BodyTemplate>
    </>
  );
};
