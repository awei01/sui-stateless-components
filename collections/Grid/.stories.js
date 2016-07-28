import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { makeComponentsUsingOptions, makePassesPropsStory, makeLipsum } from '../../.storybook/utils';
import { Story } from '../../.storybook/components';
import { COLORS } from '../../utils'
import { Grid, Row, Column } from './index'

const Content = (props) => {
  return (
    <div {...props} style={{ backgroundColor: '#ccc' }}/>
  )
}

storiesOf('Grid', module)
  .add('Grid column', () => {
    return (
      <Story examples='<Grid column=[ "one" | "two" | ... "sixteen" ]/><Column/></Grid>'>
        <Grid column="two">
          <Column><Content>two wide</Content></Column>
          <Column><Content>two wide</Content></Column>
        </Grid>
        <Grid column="four">
          <Column><Content>four wide</Content></Column>
          <Column><Content>four wide</Content></Column>
          <Column><Content>four wide</Content></Column>
          <Column><Content>four wide</Content></Column>
        </Grid>
      </Story>
    )
  })
  .add('Grid divided', () => {
    return (
      <Story examples='<Grid divided=[ true | "vertically" ]/><Row><Column/></Row></Grid>'>
        <Grid column="four" divided>
          <Row>
            <Column>divided</Column><Column>divided</Column><Column>divided</Column><Column>divided</Column>
          </Row>
          <Row>
            <Column>divided</Column><Column>divided</Column><Column>divided</Column><Column>divided</Column>
          </Row>
        </Grid>
        <Grid column="four" divided='vertically'>
          <Row>
            <Column>vertically divided</Column><Column>vertically divided</Column><Column>vertically divided</Column><Column>vertically divided</Column>
          </Row>
          <Row>
            <Column>vertically divided</Column><Column>vertically divided</Column><Column>vertically divided</Column><Column>vertically divided</Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('Grid celled', () => {
    return (
      <Story examples='<Grid celled=[ true | "internally" ]/><Row><Column/></Row></Grid>'>
        <Grid column="four" celled>
          <Row>
            <Column>celled</Column><Column>celled</Column><Column>celled</Column><Column>celled</Column>
          </Row>
          <Row>
            <Column>celled</Column><Column>celled</Column><Column>celled</Column><Column>celled</Column>
          </Row>
        </Grid>
        <Grid column="four" celled='internally'>
          <Row>
            <Column>internally celled</Column><Column>internally celled</Column><Column>internally celled</Column><Column>internally celled</Column>
          </Row>
          <Row>
            <Column>internally celled</Column><Column>internally celled</Column><Column>internally celled</Column><Column>internally celled</Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('Grid equalWidth', () => {
    return (
      <Story examples='<Grid equalWidth/><Column/></Grid>'>
        <Grid equalWidth>
          <Column><Content>three columns</Content></Column>
          <Column><Content>three columns</Content></Column>
          <Column><Content>three columns</Content></Column>
          <Row>
            <Column><Content>four columns in row</Content></Column>
            <Column><Content>four columns in row</Content></Column>
            <Column><Content>four columns in row</Content></Column>
            <Column><Content>four columns in row</Content></Column>
          </Row>
          <Row>
            <Column><Content>two columns in row</Content></Column>
            <Column><Content>two columns in row</Content></Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('Grid stretched', () => {
    return (
      <Story examples='<Grid stretched/><Column/></Grid>'>
        <Grid equalWidth stretched>
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Column><Content>{ makeLipsum(200) }</Content></Column>
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Row>
            <Column><Content><h3>Inside Row</h3>{ makeLipsum(100)}</Content></Column>
            <Column><Content><h3>Inside Row</h3>{ makeLipsum(200) }</Content></Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('Grid padded', () => {
    return (
      <Story examples='<Grid padded/><Column/></Grid>'>
        <Grid column="two" padded>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
        </Grid>
        <Grid column="two" padded="vertically">
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
        </Grid>
        <Grid column="two" padded="horizontally">
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
        </Grid>
      </Story>
    )
  })
  .add('Grid relaxed', () => {
    return (
      <Story examples='<Grid relaxed=[ true | "very" ]/><Column/></Grid>'>
        <Grid column="two" relaxed>
          <Column><Content><h3>relaxed</h3>{ makeLipsum(100)}</Content></Column>
          <Column><Content><h3>relaxed</h3>{ makeLipsum(100)}</Content></Column>
        </Grid>
        <Grid column="two" relaxed="very">
          <Column><Content><h3>very relaxed</h3>{ makeLipsum(100)}</Content></Column>
          <Column><Content><h3>very relaxed</h3>{ makeLipsum(100)}</Content></Column>
        </Grid>
        <Grid column="two">
          <Column><Content><h3>not relaxed</h3>{ makeLipsum(100) }</Content></Column>
          <Column><Content><h3>not relaxed</h3>{ makeLipsum(100) }</Content></Column>
        </Grid>
      </Story>
    )
  })
  .add('Grid centered', () => {
    return (
      <Story examples={[
          '<Grid centered><Column/></Grid>',
          '<Grid centered><Row><Column/></Row></Grid>'
        ]}>
        <Grid column="four" centered>
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Column><Content>{ makeLipsum(100)}</Content></Column>
        </Grid>
        <Grid column="four" centered>
          <Row>
            <Column><Content><h3>inside row</h3>{ makeLipsum(100)}</Content></Column>
            <Column><Content><h3>inside row</h3>{ makeLipsum(100)}</Content></Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('Grid align', () => {
    return (
      <Story examples='<Grid align=[ "left" | "right" | "center" | "justified" ]><Column/></Grid>'>
        <Grid column="two" align="left">
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Column><Content>{ makeLipsum(100)}</Content></Column>
        </Grid>
        <Grid column="two" align="right">
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Column><Content>{ makeLipsum(100)}</Content></Column>
        </Grid>
        <Grid column="two" align="center">
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Column><Content>{ makeLipsum(100)}</Content></Column>
        </Grid>
        <Grid column="two" align="justified">
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Column><Content>{ makeLipsum(100)}</Content></Column>
        </Grid>
      </Story>
    )
  })
  .add('Grid valign', () => {
    return (
      <Story examples='<Grid valign=[ "top" | "middle" | "bottom" ]><Column/></Grid>'>
        <Grid column="two" valign="top">
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Column><Content>{ makeLipsum(200)}</Content></Column>
        </Grid>
        <Grid column="two" valign="middle">
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Column><Content>{ makeLipsum(200)}</Content></Column>
        </Grid>
        <Grid column="two" valign="bottom">
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Column><Content>{ makeLipsum(200)}</Content></Column>
        </Grid>
      </Story>
    )
  })
  .add('Grid passes .className and other props', makePassesPropsStory(Grid, {
    className: "centered",
    onClick: action('Grid was clicked'),
    children: <Column>centered and clickable</Column>
  }))
  .add('Row column', () => {
    return (
      <Story examples='<Grid><Row column=[ "one" | "two" | ... "sixteen" ]/><Column/></Row></Grid>'>
        <Grid>
          <Row column="two">
            <Column><Content>two wide</Content></Column>
            <Column><Content>two wide</Content></Column>
          </Row>
          <Row column="four">
            <Column><Content>four wide</Content></Column>
            <Column><Content>four wide</Content></Column>
            <Column><Content>four wide</Content></Column>
            <Column><Content>four wide</Content></Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('Row equalWidth', () => {
    return (
      <Story examples='<Grid><Row equalWidth/><Column/></Row></Grid>'>
        <Grid>
          <Row equalWidth>
            <Column><Content>three columns in row</Content></Column>
            <Column><Content>three columns in row</Content></Column>
            <Column><Content>three columns in row</Content></Column>
          </Row>
          <Row equalWidth>
            <Column><Content>four columns in row</Content></Column>
            <Column><Content>four columns in row</Content></Column>
            <Column><Content>four columns in row</Content></Column>
            <Column><Content>four columns in row</Content></Column>
          </Row>
          <Row equalWidth>
            <Column><Content>two columns in row</Content></Column>
            <Column><Content>two columns in row</Content></Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('Row stretched', () => {
    return (
      <Story examples='<Grid><Row stretched/><Column/></Row></Grid>'>
        <Grid>
          <Row equalWidth stretched>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(200) }</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('Row centered', () => {
    return (
      <Story examples='<Grid><Row centered><Column/></Row></Grid>'>
        <Grid>
          <Row column="four" centered>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
          </Row>
        </Grid>
        <Grid>
          <Row column="four" centered>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('Row align', () => {
    return (
      <Story examples='<Grid><Row align=[ "left" | "right" | "center" | "justified" ]><Column/></Row></Grid>'>
        <Grid>
          <Row column="two" align="left">
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
          </Row>
          <Row column="two" align="right">
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
          </Row>
          <Row column="two" align="center">
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
          </Row>
          <Row column="two" align="justified">
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('Row valign', () => {
    return (
      <Story examples='<Grid><Row valign=[ "top" | "middle" | "bottom" ]><Column/></Row></Grid>'>
        <Grid>
          <Row column="two" valign="top">
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(200)}</Content></Column>
          </Row>
          <Row column="two" valign="middle">
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(200)}</Content></Column>
          </Row>
          <Row column="two" valign="bottom">
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(200)}</Content></Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('Row color', () => {
    return (
      <Story examples='<Grid><Row color={ valid color }/><Column/></Row></Grid>'>
        <Grid>
          { makeComponentsUsingOptions(Row, { key: 'color', options: COLORS, props: {
            wide: 'one',
            children: (value) => {
              return (<Column>{value}</Column>)
            }
          }})}
        </Grid>
      </Story>
    )
  })
  .add('Row passes .className and other props', () => {
    return (
      <Story examples='<Grid><Row className="red" onClick={function}><Column/></Row></Grid>'>
        <Grid>
          <Row className='red' onClick={action('Row was clicked')}>
            <Column>I am red and clickable</Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('Column wide', () => {
    return (
      <Story examples='<Grid><Column wide=[ "one" | "two" | ... "sixteen" ]/></Grid>'>
        <Grid>
          <Column wide="two"><Content>two wide</Content></Column><Column wide="two"><Content>two wide</Content></Column><Column wide="two"><Content>two wide</Content></Column><Column wide="two"><Content>two wide</Content></Column>
          <Column wide="two"><Content>two wide</Content></Column><Column wide="two"><Content>two wide</Content></Column><Column wide="two"><Content>two wide</Content></Column><Column wide="two"><Content>two wide</Content></Column>

          <Column wide="four"><Content>four wide</Content></Column><Column wide="four"><Content>four wide</Content></Column><Column wide="four"><Content>four wide</Content></Column><Column wide="four"><Content>four wide</Content></Column>

          <Column wide="eight"><Content>eight wide</Content></Column><Column wide="eight"><Content>eight wide</Content></Column>

          <Column wide="sixteen"><Content>sixteen wide</Content></Column>
        </Grid>
      </Story>
    )
  })
  .add('Column float', () => {
    return (
      <Story examples='<Grid><Column float=[ "left" | "right" ]/></Grid>'>
        <Grid>
          <Column float="left" wide="three"><Content>left floated three wide</Content></Column>
          <Column float="right" wide="three"><Content>right floated three wide</Content></Column>
        </Grid>
      </Story>
    )
  })
  .add('Column color', () => {
    return (
      <Story examples='<Grid><Column color={ valid color }/><Column/></Column></Grid>'>
        <Grid column='three'>
          { makeComponentsUsingOptions(Column, { key: 'color', options: COLORS })}
        </Grid>
      </Story>
    )
  })
  .add('Column align', () => {
    return (
      <Story examples='<Grid><Column align=[ "left" | "right" | "center" | "justified" ]/></Grid>'>
        <Grid column="four">
          <Column align="left"><Content>{ makeLipsum(100)}</Content></Column>
          <Column align="right"><Content>{ makeLipsum(100)}</Content></Column>
          <Column align="center"><Content>{ makeLipsum(100)}</Content></Column>
          <Column align="justified"><Content>{ makeLipsum(100)}</Content></Column>
        </Grid>
      </Story>
    )
  })
  /*
  Not sure how to test this yet. Not sure if needed
  .add('Column valign', () => {
    const _divStyle = { display: 'inline-flex', width: '50%' }
    return (
      <Story examples='<Grid><Column valign=[ "top" | "middle" | "bottom" ]/></Grid>'>
        <Grid column="one">
          <Column valign="top">
            <div style={_divStyle}>{ makeLipsum(100)}</div>
            <div style={_divStyle}>{ makeLipsum(200)}</div>
          </Column>
          <Column valign="middle">
            <div style={_divStyle}>{ makeLipsum(100)}</div>
            <div style={_divStyle}>{ makeLipsum(200)}</div>
          </Column>
          <Column valign="bottom">
            <div style={_divStyle}>{ makeLipsum(100)}</div>
            <div style={_divStyle}>{ makeLipsum(200)}</div>
          </Column>
        </Grid>
      </Story>
    )
  })
  */
  .add('Column passes .className and other props', () => {
    return (
      <Story examples='<Grid><Column className="red" onClick={function}></Column></Grid>'>
        <Grid>
          <Column className='red' onClick={action('Column was clicked')}>I am red and clickable</Column>
        </Grid>
      </Story>
    )
  })
