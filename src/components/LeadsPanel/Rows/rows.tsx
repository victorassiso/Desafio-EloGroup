import { Column, Container, Client } from "./rows.style";
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
import { loadColumns } from "../../../services/api";
interface Lead {
  id: string,
  name: string
}

const columns = loadColumns();

export function Rows(lead: Lead){
  const name = JSON.parse(lead.name)

  function handleOnDragEnd(result: DropResult){
    const { destination, source, draggableId } = result

    if (
      !destination ||
      destination.droppableId === source.droppableId
    )
      return;

  }
  
  return (
      <Container>
        <DragDropContext onDragEnd={handleOnDragEnd}>
            
                <Droppable key={'1'} droppableId='1'>
                          {(provided) => (
                                    <Column {...provided.droppableProps} ref={provided.innerRef}>
                                              <Draggable key={lead.id} draggableId={lead.id} index={1}>
                                                      {(provided) => (
                                                              <Client {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                                        {lead.name}
                                                              </Client>
                                                      )}
                                                      
                                              </Draggable>
                                              {provided.placeholder}
                                    </Column>
                                    
                          )}
                </Droppable>
                
            
        </DragDropContext>
      </Container>
    
  );
}