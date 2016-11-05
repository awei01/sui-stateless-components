import React from 'react'
import { storiesOf, action, linkTo } from '@kadira/storybook'
import { Story, Api, Example } from '../../.storybook/components'
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
        <Story.Segment title='size'>
          <Example.Iterator component={Search} propKey='size' definition={searchDefinition} props={{
            children: (value) => {
              return (<Prompt placeholder={value} />)
            }
          }} />
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
          href: {
            description: 'Optional href for the <Result />. If passed, component renders as an <a />'
          },
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
        <Story.Segment title='href'>
          <Example>
            <div style={{ height: '150px' }}>
              <Search>
                <Prompt placeholder='default' />
                <Results visible>
                  <Result href='http://www.google.com' target='_blank'>linked result</Result>
                  <Result title='title' description='another link' href='http://www.google.com' target='_blank' />
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
  })
