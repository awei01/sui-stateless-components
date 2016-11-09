import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Story, Api, Example, makeLipsum } from '../../.storybook/components'
import Card, { cardDefinition, contentDefinition, Cards, cardsDefinition } from './index'
const { Image, Content } = Card
const { Header, Meta, Description } = Content

const _path = 'sui-stateless-components/views/Card'

storiesOf('Card', module)
  .add('<Card />', () => {
    return (
      <Story title='<Card />'>
        <Api definition={cardDefinition} otherProps={{
          href: {
            description: 'When present (even if {null}), the component will render as an <a /> tag'
          }
        }}>
          import Card from '{_path}'
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <Card>
              <Image src='public/images/lindsay.png' />
              <Content>
                Some content
              </Content>
            </Card>
          </Example>
          <Example title='[className] gets passed'>
            <Card className='red'>
              <Image src='public/images/lindsay.png' />
              <Content>
                Some content
              </Content>
            </Card>
          </Example>
        </Story.Segment>
        <Story.Segment title='href'>
          <Example>
            <Card href='http://www.google.com' target='_blank'>
              <Image src='public/images/lindsay.png' />
              <Content>
                card with href
              </Content>
            </Card>
          </Example>
        </Story.Segment>
        <Story.Segment title='fluid'>
          <Example>
            <Card fluid>
              <Image src='public/images/lindsay.png' />
              <Content>
                fluid card
              </Content>
            </Card>
          </Example>
        </Story.Segment>
        <Story.Segment title='centered'>
          <Example>
            <Card centered>
              <Image src='public/images/lindsay.png' />
              <Content>
                centered card
              </Content>
            </Card>
          </Example>
        </Story.Segment>
        <Story.Segment title='raised'>
          <Example>
            <Card raised>
              <Image src='public/images/lindsay.png' />
              <Content>
                raised card
              </Content>
            </Card>
          </Example>
        </Story.Segment>
        <Story.Segment title='color'>
          <Example.Iterator component={Card} propKey='color' definition={cardDefinition} props={{
            children: (value) => {
              return (<Content>{value} card</Content>)
            }
          }}/>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Card.Image />', () => {
    return (
      <Story title='<Card.Image />'>
        <Api otherProps={{
          src: {
            description: 'When passed, the [children] prop will be ignored'
          }
        }} />
        <Story.Segment title='(default)'>
          <Example>
            <Card>
              <Image>
                <img src='public/images/lindsay.png' />
              </Image>
              <Content>
                Some content
              </Content>
            </Card>
          </Example>
        </Story.Segment>
        <Story.Segment title='src'>
          <p>When present, this component will ignore any child content</p>
          <Example>
            <Card>
              <Image src='public/images/lindsay.png'>
                You will not see this content
              </Image>
              <Content>
                Some content
              </Content>
            </Card>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Card.Content />', () => {
    return (
      <Story title='<Card.Content />'>
        <Api definition={contentDefinition} />
        <Story.Segment title='(default)'>
          <Example>
            <Card>
              <Image>
                <img src='public/images/lindsay.png' />
              </Image>
              <Content>
                Some content
              </Content>
            </Card>
          </Example>
        </Story.Segment>
        <Story.Segment title='extra'>
          <Example>
            <Card>
              <Image src='public/images/lindsay.png'>
                You will not see this content
              </Image>
              <Content>
                Some content
              </Content>
              <Content extra>
                Some extra content
              </Content>
            </Card>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Card.Content.Header />', () => {
    return (
      <Story title='<Card.Content.Header />'>
        <Api otherProps={{
          href: {
            description: 'When present (even if {null}), the component will render as an <a /> tag'
          }
        }} />
        <Story.Segment title='(default)'>
          <Example>
            <Card>
              <Content>
                <Header>some header</Header>
                Some content
              </Content>
            </Card>
          </Example>
        </Story.Segment>
        <Story.Segment title='href'>
          <Example>
            <Card>
              <Content>
                <Header href='http://www.google.com' target='_blank'>header with href</Header>
                Some content
              </Content>
            </Card>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Card.Content.Meta />', () => {
    return (
      <Story title='<Card.Content.Meta />'>
        <Story.Segment title='(default)'>
          <Example>
            <Card>
              <Content>
                <Header>some header</Header>
                <Meta>some meta content</Meta>
                Some content
              </Content>
            </Card>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Card.Content.Description />', () => {
    return (
      <Story title='<Card.Content.Description />'>
        <Story.Segment title='(default)'>
          <Example>
            <Card>
              <Content>
                <Header>some header</Header>
                <Description>some description content</Description>
                Some content
              </Content>
            </Card>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Cards />', () => {
    return (
      <Story title='<Cards />'>
        <Api definition={cardsDefinition}>
          {'import { Cards } from \'' + _path + '\''}
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <Cards>
              <Card>
                <Image src='public/images/lindsay.png' />
                <Content>
                  Some content
                </Content>
              </Card>
              <Card>
                <Image src='public/images/jenny.jpg' />
                <Content>
                  Some content
                </Content>
              </Card>
            </Cards>
          </Example>
          <Example title='[className] gets passed'>
            <Cards className='red'>
              <Card>
                <Image src='public/images/lindsay.png' />
                <Content>
                  Some content
                </Content>
              </Card>
              <Card>
                <Image src='public/images/jenny.jpg' />
                <Content>
                  Some content
                </Content>
              </Card>
            </Cards>
          </Example>
        </Story.Segment>
        <Story.Segment title='raised'>
          <Example>
            <Cards raised>
              <Card>
                <Image src='public/images/lindsay.png' />
                <Content>
                  Some content
                </Content>
              </Card>
              <Card>
                <Image src='public/images/jenny.jpg' />
                <Content>
                  Some content
                </Content>
              </Card>
            </Cards>
          </Example>
        </Story.Segment>
        <Story.Segment title='centered'>
          <Example>
            <Cards centered>
              <Card>
                <Image src='public/images/lindsay.png' />
                <Content>
                  Some content
                </Content>
              </Card>
              <Card>
                <Image src='public/images/jenny.jpg' />
                <Content>
                  Some content
                </Content>
              </Card>
            </Cards>
          </Example>
        </Story.Segment>
        <Story.Segment title='link'>
          <Example>
            <Cards link>
              <Card>
                <Image src='public/images/lindsay.png' />
                <Content>
                  Some content
                </Content>
              </Card>
              <Card>
                <Image src='public/images/jenny.jpg' />
                <Content>
                  Some content
                </Content>
              </Card>
            </Cards>
          </Example>
        </Story.Segment>
        <Story.Segment title='color'>
          <Example>
            <Cards color='red'>
              <Card>
                <Image src='public/images/lindsay.png' />
                <Content>
                  Some content
                </Content>
              </Card>
              <Card>
                <Image src='public/images/jenny.jpg' />
                <Content>
                  Some content
                </Content>
              </Card>
            </Cards>
          </Example>
        </Story.Segment>
        <Story.Segment title='count'>
          <Example>
            <Cards count='four'>
              <Card>
                <Image src='public/images/lindsay.png' />
                <Content>
                  Some content
                </Content>
              </Card>
              <Card>
                <Image src='public/images/lindsay.png' />
                <Content>
                  Some content
                </Content>
              </Card>
              <Card>
                <Image src='public/images/lindsay.png' />
                <Content>
                  Some content
                </Content>
              </Card>
              <Card>
                <Image src='public/images/lindsay.png' />
                <Content>
                  Some content
                </Content>
              </Card>
            </Cards>
          </Example>
        </Story.Segment>
        <Story.Segment title='responsive'>
          <Example title='stackable'>
            <Cards count='four' responsive='stackable'>
              <Card>
                <Image src='public/images/lindsay.png' />
                <Content>
                  Some content
                </Content>
              </Card>
              <Card>
                <Image src='public/images/lindsay.png' />
                <Content>
                  Some content
                </Content>
              </Card>
              <Card>
                <Image src='public/images/lindsay.png' />
                <Content>
                  Some content
                </Content>
              </Card>
              <Card>
                <Image src='public/images/lindsay.png' />
                <Content>
                  Some content
                </Content>
              </Card>
            </Cards>
          </Example>
          <Example title='doubling'>
            <Cards count='four' responsive='doubling'>
              <Card>
                <Image src='public/images/lindsay.png' />
                <Content>
                  Some content
                </Content>
              </Card>
              <Card>
                <Image src='public/images/lindsay.png' />
                <Content>
                  Some content
                </Content>
              </Card>
              <Card>
                <Image src='public/images/lindsay.png' />
                <Content>
                  Some content
                </Content>
              </Card>
              <Card>
                <Image src='public/images/lindsay.png' />
                <Content>
                  Some content
                </Content>
              </Card>
            </Cards>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
