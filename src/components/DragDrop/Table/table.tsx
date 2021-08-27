import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Container, Head, Body, HRow, TH } from './table.style';
import { leads} from '../../../fakeBackend/fakeBackend';
import { DndRows } from '../Rows/rows';

export function DndTable(){
  
  return (
    <Container>
      <Head>
        <HRow>
          <TH>Cliente em Potencial</TH>
          <TH>Dados Confirmados</TH>
          <TH>Reunião Agendada</TH>
        </HRow>
      </Head>
      <Body>
        <DndProvider backend={HTML5Backend}>
          {leads.map((lead)=>{
            return (
              <DndRows
                key={lead.id}
                id={lead.id}
                name={lead.name} //lead.name
                status={lead.status}
              />
            )
          })}
        </DndProvider>
      </Body>
    </Container>
  );
}