import { tableData } from "../../data/table-data";
import UncompletedContent from "./uncompleted-content";
import CompletedContent from "./completed-content";

export default function TableContent({ el }: {el: number}) {
  return (
    <>
      {tableData.easy[el] &&
        !tableData.completedEasy.find((arrEl) => arrEl === el) && (
          <UncompletedContent coinNumber={5} data={tableData.easy[el]} />
        )}

      {tableData.medium[el] &&
        !tableData.completedMedium.find((arrEl) => arrEl === el) && (
          <UncompletedContent coinNumber={30} data={tableData.medium[el]} />
        )}

      {tableData.hard[el] &&
        !tableData.completedHard.find((arrEl) => arrEl === el) && (
          <UncompletedContent coinNumber={100} data={tableData.hard[el]} />
        )}

      {tableData.easy[el] &&
        tableData.completedEasy.find((arrEl) => arrEl === el) && (
          <CompletedContent data={tableData.easy[el]} />
        )}

      {tableData.medium[el] &&
        tableData.completedMedium.find((arrEl) => arrEl === el) && (
          <CompletedContent data={tableData.medium[el]} />
        )}

      {tableData.hard[el] &&
        tableData.completedHard.find((arrEl) => arrEl === el) && (
          <CompletedContent data={tableData.hard[el]} />
        )}
    </>
  );
}
