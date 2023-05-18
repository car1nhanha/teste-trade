import { TableComponent } from "./table.styles";

type ColumnType = {
  key: string;
  header: string;
};

type DataType = {
  [key: string]: any;
};

type TableProps = {
  columns: ColumnType[];
  data: DataType[];
};

export const Table = ({ columns, data }: TableProps) => {
  return (
    <TableComponent className="u-full-width">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {columns.map((col) => (
              <td key={col.key}>{row[col.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </TableComponent>
  );
};
