import { LeadProps, columns } from "../../../fakeBackend/fakeBackend";
import { DragDropColumns } from '../Columns/columns'
import { Row } from "./rows.style";

export function DndRows(props: LeadProps){
  return (
    <Row>
      {columns.map((column)=>{
        return (
            <DragDropColumns
              key={column.id}
              lead={props}
              column={column}
            />
            )
          })}
    </Row>
  );
}