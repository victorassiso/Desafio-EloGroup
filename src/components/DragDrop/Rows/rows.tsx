import { LeadProps, columns } from "../../../fakeBackend/fakeBackend";
import { DndColumns } from '../Columns/columns'
import { Row } from "./rows.style";

export function DndRows(props: LeadProps){
  return (
    <Row>
      {columns.map((column)=>{
        return (
            <DndColumns
              key={column.id}
              lead={props}
              column={column}
            />
            )
          })}
    </Row>
  );
}