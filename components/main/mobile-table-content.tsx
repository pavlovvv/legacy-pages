import UncompletedContent from "./uncompleted-content";
import CompletedContent from "./completed-content";

export default function MobileTableContent({
  el,
  i,
  dataType,
  missionType,
}: {
  el: number;
  i: number;
  dataType: any;
  missionType: any;
}) {
  return (
    <>
      {dataType[i] && !missionType.find((arrEl) => arrEl === el) && (
        <UncompletedContent coinNumber={5} data={dataType[i]} />
      )}

      {dataType[i] && missionType.find((arrEl) => arrEl === el) && (
        <CompletedContent data={dataType[i]} />
      )}
    </>
  );
}
