import { ColumnProps } from "../../../fakeBackend/fakeBackend"
import { Column } from './columns.style'

export function DndColumns(props: ColumnProps){
  console.log(props.lead.status, " == ", props.column.name);
  if (props.lead.status  == props.column.name)
    return (
      <Column>
        <p>{props.lead.name}</p>
      </Column>
    )
  else
    return (
      <Column>
        <p></p>
      </Column>)
    
}