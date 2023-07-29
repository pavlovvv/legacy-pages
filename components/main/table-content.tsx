import { tableData } from "../../data/table-data";
import UncompletedContent from "./uncompleted-content";
import CompletedContent from "./completed-content";
import { useAppSelector } from "../../typescript/types/redux-hooks";

export default function TableContent({ el, i }: { el: number, i:number }) {
  const missions = useAppSelector((state) => state.user.missions);

  return (
    <>
      {tableData.easy[i] && !missions.easy.find((arrEl) => arrEl === el) && (
        <UncompletedContent coinNumber={5} data={tableData.easy[i]} />
      )}

      {tableData.easy[i] && missions.easy.find((arrEl) => arrEl === el) && (
        <CompletedContent data={tableData.easy[i]} />
      )}

      {tableData.medium[i] &&
        !missions.medium.find((arrEl) => arrEl === el) && (
          <UncompletedContent coinNumber={30} data={tableData.medium[i]} />
        )}

      {tableData.medium[i] &&
        missions.medium.find((arrEl) => arrEl === el) && (
          <CompletedContent data={tableData.medium[i]} />
        )}

      {tableData.hard[i] && !missions.hard.find((arrEl) => arrEl === el) && (
        <UncompletedContent coinNumber={100} data={tableData.hard[i]} />
      )}

      {tableData.hard[i] && missions.hard.find((arrEl) => arrEl === el) && (
        <CompletedContent data={tableData.hard[i]} />
      )}
    </>
  );
}
