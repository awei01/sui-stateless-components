import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Story, Api, Example } from '../../.storybook/comps'
import Search, { searchDefinition, resultsDefinition, resultDefinition } from './index'
import Input from '../../elements/Input'
const { Prompt, Icon, Results } = Search
const { Result, Category, Message, Action } = Results

storiesOf('Search', module)
  .add('<Search />', () => {
    return (
      <Story title='<Search />'>
        <Api definition={searchDefinition}>
          import Search from 'sui-stateless-components/modules/Search'
        </Api>
        <Story.Segment title='(default)'>
          <Example>
            <Search>
              <Prompt placeholder='default' />
            </Search>
          </Example>
          <Example title='[className] gets passed'>
            <Search className='loading'>
              <Input icon>
                <Prompt placeholder='default' />
                <Icon />
              </Input>
            </Search>
          </Example>
        </Story.Segment>
        <Story.Segment title='category'>
          See example <a href='#' onClick={linkTo('Search', '<Search.Results.Category />')}>{'<Search.Results.Category />'}</a>
        </Story.Segment>
        <Story.Segment title='fluid'>
          <Example>
            <div style={{ height: '150px' }}>
              <Search fluid>
                <Prompt placeholder='default' />
                <Results visible>
                  <Result>result one</Result>
                  <Result>result two</Result>
                </Results>
              </Search>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='aligned'>
          <Example title='left'>
            <div style={{ height: '150px' }}>
              <Search aligned='left'>
                <Prompt placeholder='default' />
                <Results visible>
                  <Result>result one</Result>
                  <Result>result two</Result>
                </Results>
              </Search>
            </div>
          </Example>
          <Example title='right'>
            <div style={{ height: '150px' }}>
              <Search aligned='right'>
                <Prompt placeholder='default' />
                <Results visible>
                  <Result>result one</Result>
                  <Result>result two</Result>
                </Results>
              </Search>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Search.Prompt />', () => {
    return (
      <Story title='<Search.Prompt />'>
        <Story.Segment title='(default)'>
          <Example>
            <Search>
              <Prompt placeholder='default' />
            </Search>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Search.Results />', () => {
    return (
      <Story title='<Search.Results />'>
        <Api definition={resultsDefinition} />
        <Story.Segment title='(default)'>
          <Example>
            <div style={{ height: '150px' }}>
              <Search>
                <Prompt placeholder='default' />
                <Results visible>
                  <Result>result one</Result>
                  <Result>result two</Result>
                </Results>
              </Search>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='visible'>
          <Example>
            <div style={{ height: '150px' }}>
              <Search>
                <Prompt placeholder='default' />
                <Results visible>
                  <Result>result one</Result>
                  <Result>result two</Result>
                </Results>
              </Search>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Search.Results.Result />', () => {
    return (
      <Story title='<Search.Results.Result />'>
        <Api definition={resultDefinition} otherProps={{
          title: {
            description: 'Optional title of the result. If [children] is provided, this props is ignored'
          },
          description: {
            description: 'Optional description of the result. If [children] is provided, this props is ignored'
          },
          src: {
            description: 'Optional url for an image. If [children] is provided, this props is ignored'
          },
          price: {
            description: 'Optional price of the result. If [children] is provided, this props is ignored'
          }
        }}/>
        <Story.Segment title='(default)'>
          <Example>
            <div style={{ height: '150px' }}>
              <Search>
                <Prompt placeholder='default' />
                <Results visible>
                  <Result>result one</Result>
                  <Result>result two</Result>
                </Results>
              </Search>
            </div>
          </Example>
          <Example title='[className] gets passsed'>
            <div style={{ height: '150px' }}>
              <Search>
                <Prompt placeholder='default' />
                <Results visible>
                  <Result className='active'>result one</Result>
                  <Result>result two</Result>
                </Results>
              </Search>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='active'>
          <Example>
            <div style={{ height: '150px' }}>
              <Search>
                <Prompt placeholder='default' />
                <Results visible>
                  <Result active>result one</Result>
                  <Result>result two</Result>
                </Results>
              </Search>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='title'>
          <Example>
            <div style={{ height: '150px' }}>
              <Search>
                <Prompt placeholder='default' />
                <Results visible>
                  <Result title='title one' description='description'/>
                  <Result title='title two' description='description'/>
                </Results>
              </Search>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='description'>
          <Example>
            <div style={{ height: '150px' }}>
              <Search>
                <Prompt placeholder='default' />
                <Results visible>
                  <Result title='title' description='description one' />
                  <Result title='title' description='description two' />
                </Results>
              </Search>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='src'>
          <Example>
            <div style={{ height: '180px' }}>
              <Search>
                <Prompt placeholder='default' />
                <Results visible>
                  <Result title='title' description='description' src='images/lindsay.png'/>
                  <Result title='title' description='description' src='images/jenny.jpg'/>
                </Results>
              </Search>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='price'>
          <Example>
            <div style={{ height: '180px' }}>
              <Search>
                <Prompt placeholder='default' />
                <Results visible>
                  <Result title='title' description='description' src='images/lindsay.png' price='10.00'/>
                  <Result title='title' description='description' src='images/jenny.jpg' price='20.00'/>
                </Results>
              </Search>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Search.Results.Message />', () => {
    return (
      <Story title='<Search.Results.Message />'>
        <Api otherProps={{
          header: {
            description: 'Optional header. If [children] is provided, this prop is ignored'
          },
          description: {
            description: 'Optional description. If [children] is provided, this prop is ignored'
          }
        }} />
        <Story.Segment title='(default)'>
          <Example>
            <div style={{ height: '150px' }}>
              <Search>
                <Prompt placeholder='default' />
                <Results visible>
                  <Result>some result</Result>
                  <Result>some result</Result>
                  <Message>some message</Message>
                </Results>
              </Search>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='header'>
          <Example>
            <div style={{ height: '150px' }}>
              <Search>
                <Prompt placeholder='default' />
                <Results visible>
                  <Result>some result</Result>
                  <Message header='some header' description='description' />
                </Results>
              </Search>
            </div>
          </Example>
        </Story.Segment>
        <Story.Segment title='description'>
          <Example>
            <div style={{ height: '150px' }}>
              <Search>
                <Prompt placeholder='default' />
                <Results visible>
                  <Result>some result</Result>
                  <Message header='header' description='some description' />
                </Results>
              </Search>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Search.Results.Category />', () => {
    return (
      <Story title='<Search.Results.Category />'>
        <Api otherProps={{
          name: {
            description: 'Name of category',
            isRequired: true
          }
        }} />
        <Story.Segment title='(default)'>
          See example <a href='#name'>#name</a>
        </Story.Segment>
        <Story.Segment title='name'>
          <Example>
            <div style={{ height: '150px' }}>
              <Search category>
                <Prompt placeholder='default' />
                <Results visible>
                  <Category name='Foo'>
                    <Result>some result</Result>
                    <Result>some result</Result>
                  </Category>
                </Results>
              </Search>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })
  .add('<Search.Results.Action />', () => {
    return (
      <Story title='<Search.Results.Action />'>
        <Story.Segment title='(default)'>
          <Example>
            <div style={{ height: '150px' }}>
              <Search>
                <Prompt placeholder='default' />
                <Results visible>
                  <Result>some result</Result>
                  <Action href='http://www.google.com' target='_blank'>link somewhere</Action>
                </Results>
              </Search>
            </div>
          </Example>
        </Story.Segment>
      </Story>
    )
  })  /*
  .add('<Search> loading', () => {
    return (
      <Story examples='<Search loading><Prompt/></Search>'>
        <Search>
          <Input icon>
            <Icon glyph='search'/>
            <Prompt placeholder='not loading...'/>
          </Input>
        </Search>
        <br/>
        <Search loading>
          <Input icon>
            <Icon glyph='search'/>
            <Prompt placeholder='loading...'/>
          </Input>
        </Search>
      </Story>
    )
  })
  .add('<Search> fluid', () => {
    return (
      <Story examples='<Search fluid><Prompt/></Search>'>
        <Search fluid>
          <Prompt placeholder='fluid...'/>
          <Results active>
            <Result>result 1</Result>
            <Result>result 2</Result>
            <Result>result 3</Result>
          </Results>
        </Search>
      </Story>
    )
  })
  .add('<Search> aligned', () => {
    return (
      <Story examples='<Search aligned><Prompt/></Search>'>
        <Grid columns='two'>
          <Column>
            <Search aligned='left' style={{ textAlign: 'right' }}>
              <Prompt placeholder='left aligned...'/>
              <Results active style={{ textAlign: 'left' }}>
                <Result>result 1</Result>
                <Result>result 2</Result>
                <Result>result 3</Result>
              </Results>
            </Search>
          </Column>
          <Column>
            <Search aligned='right'>
              <Prompt placeholder='right aligned...'/>
              <Results active>
                <Result>result 1</Result>
                <Result>result 2</Result>
                <Result>result 3</Result>
              </Results>
            </Search>
          </Column>
        </Grid>
      </Story>
    )
  })
  .add('<Search> passes .className and other props', makePassesPropsStory(Search, { props: {
    className: 'fluid',
    onClick: action('Search was clicked'),
    children: [<Prompt placeholder='fluid clickable Search'/>, <Results active><Result>result 1</Result></Results>]
  }}))
  .add('<Result> default', () => {
    return (
      <Story examples='<Result>{ content }</Result>'
          notes='By default, <Result> renders an <a> tag. If <Result> has children, then it will render its children'>
        <Search>
          <Prompt placeholder='Search...'/>
          <Results active>
            <Result>result 1</Result>
            <Result>result 2</Result>
            <Result>result 3</Result>
          </Results>
        </Search>
      </Story>
    )
  })
  .add('<Result> title, price, description, image', () => {
    return (
      <Story examples='<Result title={ title } price={ price } description={ description } image={ image }></Result>'>
        <Search>
          <Prompt placeholder='Search...'/>
          <Results active>
            <Result title='title 1' description='description 1' price='$1.00' image='images/lindsay.png'/>
            <Result title='title 2' description='description 1' price='$1.00' image='images/lindsay.png'/>
            <Result title='title 3' description='description 1' price='$1.00' image='images/lindsay.png'/>
          </Results>
        </Search>
      </Story>
    )
  })
  .add('<Category>', () => {
    return (
      <Story examples='<Search category><Results><Category name={ name }><Result/></Category></Results><Search>'>
        <Search category>
          <Prompt placeholder='Search...'/>
          <Results active>
            <Category name='category 1'>
              <Result title='title 1'/>
              <Result title='title 2'/>
              <Result title='title 3'/>
            </Category>
            <Category name='category 2'>
              <Result title='title 1'/>
              <Result title='title 2'/>
              <Result title='title 3'/>
            </Category>
          </Results>
        </Search>
      </Story>
    )
  })
  .add('<Action>', () => {
    return (
      <Story examples='<Search><Results><Action href={ href }>{ content }</Action></Results><Search>'>
        <Search>
          <Prompt placeholder='Search...'/>
          <Results active>
            <Result title='title 1'/>
            <Result title='title 2'/>
            <Result title='title 3'/>
            <Action href='http://www.google.com' target='_blank'>action 3</Action>
          </Results>
        </Search>
      </Story>
    )
  })
*/
