import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/comps'
import Table, { tableDefinition, thDefinition, trDefinition, tdDefinition } from './index'

const { Thead, Th, Tr, Td } = Table

storiesOf('Table', module)
  .add('<Table />', () => {
    return (
      <Story title='<Table />'>
        <Api definition={tableDefinition}>
          import Table from 'sui-stateless-components/collections/Table'
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <Table>
              <thead>
                <Tr>
                  <Th>header one</Th><Th>header two</Th><Th>header three</Th>
                </Tr>
              </thead>
              <tbody>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
          <Example title='[className] gets passed'>
            <Table className='celled'>
              <thead>
                <Tr>
                  <Th>header one</Th><Th>header two</Th><Th>header three</Th>
                </Tr>
              </thead>
              <tbody>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='definition'>
          <Example>
            <Table definition>
              <thead>
                <Tr>
                  <Th>header one</Th><Th>header two</Th><Th>header three</Th>
                </Tr>
              </thead>
              <tbody>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='structured'>
          <Example>
            <Table structured>
              <tbody>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='singleLine'>
          <Example>
            <Table singleLine>
              <tbody>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='fixed'>
          <Example>
            <Table fixed>
              <tbody>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='selectable'>
          <Example>
            <Table selectable>
              <tbody>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='striped'>
          <Example>
            <Table striped>
              <tbody>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='celled'>
          <Example>
            <Table celled>
              <tbody>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='basic'>
          <Example>
            <Table basic>
              <tbody>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='count'>
          <Example>
            <Table count='three' celled>
              <tbody>
                <Tr>
                  <Td>{makeLipsum(10)}</Td>
                  <Td>{makeLipsum(20)}</Td>
                  <Td>{makeLipsum(30)}</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='collapsing'>
          <Example>
            <Table collapsing>
              <tbody>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='color'>
          <Example.Iterator component={Table} propKey='color' definition={tableDefinition} props={{
            children: (value) => {
              return (
                <tbody>
                  <Tr>
                    <Td>{value}</Td>
                  </Tr>
                </tbody>
              )
            }
          }} />
        </Story.Segment>
        <Story.Segment title='inverted'>
          <Example>
            <Table inverted>
              <tbody>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='sortable'>
          <Example>
            <Table sortable>
              <thead>
                <Tr>
                  <Th sorted>sorted header</Th>
                  <Th sorted='ascending'>ascending sorted header</Th>
                  <Th sorted='descending'>descending sorted header</Th>
                </Tr>
              </thead>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='padded'>
          <Example>
            <Table padded>
              <tbody>
                <Tr>
                  <td>padded</td>
                  <td>padded</td>
                  <td>padded</td>
                </Tr>
              </tbody>
            </Table>
            <Table padded='very'>
              <tbody>
                <Tr>
                  <td>very padded</td>
                  <td>very padded</td>
                  <td>very padded</td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='compact'>
          <Example>
            <Table compact>
              <tbody>
                <Tr>
                  <td>compact</td>
                  <td>compact</td>
                  <td>compact</td>
                </Tr>
              </tbody>
            </Table>
            <Table compact='very'>
              <tbody>
                <Tr>
                  <td>very compact</td>
                  <td>very compact</td>
                  <td>very compact</td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='size'>
          <Example>
            <Table size='small'>
              <tbody>
                <Tr>
                  <td>small</td>
                  <td>small</td>
                  <td>small</td>
                </Tr>
              </tbody>
            </Table>
            <Table size='large'>
              <tbody>
                <Tr>
                  <td>large</td>
                  <td>large</td>
                  <td>large</td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Table.Th />', () => {
    return (
      <Story title='<Table.Th />'>
        <Api definition={thDefinition} />
        <Story.Segment title='(default)'>
          <Example>
            <Table>
              <thead>
                <Tr>
                  <Th>header one</Th><Th>header two</Th><Th>header three</Th>
                </Tr>
              </thead>
              <tbody>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
          <Example title='[className] gets passed'>
            <Table>
              <thead>
                <Tr>
                  <Th className='one wide'>header one</Th><Th>header two</Th><Th>header three</Th>
                </Tr>
              </thead>
              <tbody>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='valigned'>
          <Example>
            <Table>
              <thead>
                <Tr>
                  <Th valigned='top'>top valigned</Th>
                  <Th valigned='middle'>middle valigned</Th>
                  <Th valigned='bottom'>bottom valigned</Th>
                  <Th>line 1<br/>line 2<br/>line 3<br/></Th>
                </Tr>
              </thead>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='aligned'>
          <Example>
            <Table className='celled'>
              <thead>
                <Tr>
                  <Th aligned='left'>left aligned</Th>
                  <Th aligned='center'>center aligned</Th>
                  <Th aligned='right'>right aligned</Th>
                </Tr>
              </thead>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='collapsing'>
          <Example>
            <Table className='celled'>
              <thead>
                <Tr>
                  <Th collapsing>collapsing cell</Th>
                  <Th>header cell</Th>
                  <Th>header cell</Th>
                </Tr>
              </thead>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='wide'>
          <Example>
            <Table className='celled'>
              <thead>
                <Tr>
                  <Th wide='one'>one wide</Th>
                  <Th wide='fifteen'>fifteen wide</Th>
                </Tr>
              </thead>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='sorted'>
          <p>This prop requires that the {'<Table />'} has [sortable] prop</p>
          <Example>
            <Table sortable>
              <thead>
                <Tr>
                  <Th sorted>sorted header</Th>
                  <Th sorted='ascending'>ascending sorted header</Th>
                  <Th sorted='descending'>descending sorted header</Th>
                </Tr>
              </thead>
            </Table>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Table.Tr />', () => {
    return (
      <Story title='<Table.Tr />'>
        <Api definition={trDefinition} />
        <Story.Segment title='(default)'>
          <Example>
            <Table>
              <thead>
                <Tr>
                  <Th>header one</Th><Th>header two</Th><Th>header three</Th>
                </Tr>
              </thead>
              <tbody>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
          <Example title='[className] gets passed'>
            <Table>
              <thead>
                <Tr>
                  <Th>header one</Th><Th>header two</Th><Th>header three</Th>
                </Tr>
              </thead>
              <tbody>
                <Tr className='error'>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='state'>
          <Example>
            <Table>
              <tbody>
                <Tr state='positive'>
                  <Td>positive row</Td><Td>positive row</Td><Td>positive row</Td>
                </Tr>
                <Tr state='negative'>
                  <Td>negative row</Td><Td>negative row</Td><Td>negative row</Td>
                </Tr>
                <Tr state='error'>
                  <Td>error row</Td><Td>error row</Td><Td>error row</Td>
                </Tr>
                <Tr state='warning'>
                  <Td>warning row</Td><Td>warning row</Td><Td>warning row</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='active'>
          <Example>
            <Table>
              <tbody>
                <Tr active>
                  <Td>active row</Td><Td>active row</Td><Td>active row</Td>
                </Tr>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='disabled'>
          <Example>
            <Table>
              <tbody>
                <Tr disabled>
                  <Td>disabled row</Td><Td>disabled row</Td><Td>disabled row</Td>
                </Tr>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='valigned'>
          <Example>
            <Table>
              <tbody>
                <Tr valigned='top'>
                  <Td>top valigned</Td>
                  <Td>line 1<br/>line 2<br/>line 3<br/></Td>
                </Tr>
                <Tr valigned='middle'>
                  <Td>middle valigned</Td>
                  <Td>line 1<br/>line 2<br/>line 3<br/></Td>
                </Tr>
                <Tr valigned='bottom'>
                  <Td>bottom valigned</Td>
                  <Td>line 1<br/>line 2<br/>line 3<br/></Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='aligned'>
          <Example>
            <Table className='celled'>
              <tbody>
                <Tr aligned='left'>
                  <Td>left aligned</Td>
                  <Td>left aligned</Td>
                </Tr>
                <Tr aligned='center'>
                  <Td>center aligned</Td>
                  <Td>center aligned</Td>
                </Tr>
                <Tr aligned='right'>
                  <Td>right aligned</Td>
                  <Td>right aligned</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Table.Td />', () => {
    return (
      <Story title='<Table.Td />'>
        <Api definition={tdDefinition} />
        <Story.Segment title='(default)'>
          <Example>
            <Table>
              <thead>
                <Tr>
                  <Th>header one</Th><Th>header two</Th><Th>header three</Th>
                </Tr>
              </thead>
              <tbody>
                <Tr>
                  <Td>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
          <Example title='[className] gets passed'>
            <Table>
              <thead>
                <Tr>
                  <Th>header one</Th><Th>header two</Th><Th>header three</Th>
                </Tr>
              </thead>
              <tbody>
                <Tr>
                  <Td className='error'>cell one</Td><Td>cell two</Td><Td>cell three</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='state'>
          <Example>
            <Table>
              <tbody>
                <Tr>
                  <Td state='positive'>positive cell</Td>
                  <Td state='negative'>negative cell</Td>
                  <Td state='error'>error cell</Td>
                  <Td state='warning'>warning cell</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='active'>
          <Example>
            <Table>
              <tbody>
                <Tr>
                  <Td active>active cell</Td>
                  <Td>cell</Td>
                  <Td>cell</Td>
                  <Td>cell</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='disabled'>
          <Example>
            <Table>
              <tbody>
                <Tr>
                  <Td disabled>disabled cell</Td>
                  <Td>cell</Td>
                  <Td>cell</Td>
                  <Td>cell</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='selectable'>
          <Example>
            <Table>
              <tbody>
                <Tr>
                  <Td selectable>selectable cell</Td>
                  <Td>cell</Td>
                  <Td>cell</Td>
                  <Td>cell</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='valigned'>
          <Example>
            <Table>
              <tbody>
                <Tr>
                  <Td valigned='top'>top valigned</Td>
                  <Td valigned='middle'>middle valigned</Td>
                  <Td valigned='bottom'>bottom valigned</Td>
                  <Td>line 1<br/>line 2<br/>line 3<br/></Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='aligned'>
          <Example>
            <Table className='celled'>
              <tbody>
                <Tr>
                  <Td aligned='left'>left aligned</Td>
                  <Td aligned='center'>center aligned</Td>
                  <Td aligned='right'>right aligned</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='collapsing'>
          <Example>
            <Table className='celled'>
              <tbody>
                <Tr>
                  <Td collapsing>collapsing cell</Td>
                  <Td>header cell</Td>
                  <Td>header cell</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
        <Story.Segment title='wide'>
          <Example>
            <Table className='celled'>
              <tbody>
                <Tr>
                  <Td wide='one'>one wide</Td>
                  <Td wide='fifteen'>fifteen wide</Td>
                </Tr>
              </tbody>
            </Table>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
