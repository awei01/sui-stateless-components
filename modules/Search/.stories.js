import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { Story } from '../../.storybook/components'
import { makePassesPropsStory } from '../../.storybook/utils'
import { Search, Prompt, Results, Result, Action, Category } from './index'
import { Input } from '../../elements/Input'
import { Icon } from '../../elements/Icon'
import { Grid, Column } from '../../collections/Grid'

storiesOf('Search', module)
  .add('<Search> default', () => {
    return (
      <Story examples='<Search><Prompt/><Results/></Search>'>
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
