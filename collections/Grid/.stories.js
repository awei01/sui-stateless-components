import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import { makeComponentsForKeyAndOptions, makePassesPropsStory, makeLipsum } from '../../.storybook/utils';
import { Story } from '../../.storybook/components';
import { COLORS } from '../../utils'
import { Grid, Row, Column } from './index'

const Content = (props) => {
  return (
    <div {...props} style={{ backgroundColor: '#ccc' }}/>
  )
}

storiesOf('Grid', module)
  .add('<Grid> columns', () => {
    return (
      <Story examples='<Grid columns=[ "one" | "two" | ... "sixteen" ]/><Column/></Grid>'>
        <Grid columns="two">
          <Column><Content>two wide</Content></Column>
          <Column><Content>two wide</Content></Column>
        </Grid>
        <Grid columns="four">
          <Column><Content>four wide</Content></Column>
          <Column><Content>four wide</Content></Column>
          <Column><Content>four wide</Content></Column>
          <Column><Content>four wide</Content></Column>
        </Grid>
      </Story>
    )
  })
  .add('<Grid> divided', () => {
    return (
      <Story examples='<Grid divided=[ true | "vertically" ]/><Row><Column/></Row></Grid>'>
        <Grid columns="four" divided>
          <Row>
            <Column>divided</Column><Column>divided</Column><Column>divided</Column><Column>divided</Column>
          </Row>
          <Row>
            <Column>divided</Column><Column>divided</Column><Column>divided</Column><Column>divided</Column>
          </Row>
        </Grid>
        <Grid columns="four" divided='vertically'>
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
  .add('<Grid> celled', () => {
    return (
      <Story examples='<Grid celled=[ true | "internally" ]/><Row><Column/></Row></Grid>'>
        <Grid columns="four" celled>
          <Row>
            <Column>celled</Column><Column>celled</Column><Column>celled</Column><Column>celled</Column>
          </Row>
          <Row>
            <Column>celled</Column><Column>celled</Column><Column>celled</Column><Column>celled</Column>
          </Row>
        </Grid>
        <Grid columns="four" celled='internally'>
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
  .add('<Grid> equal', () => {
    return (
      <Story examples='<Grid equal/><Column/></Grid>'>
        <Grid equal>
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
  .add('<Grid> stretched', () => {
    return (
      <Story examples='<Grid stretched/><Column/></Grid>'>
        <Grid equal stretched>
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
  .add('<Grid> padded', () => {
    return (
      <Story examples='<Grid padded/><Column/></Grid>'>
        <Grid columns="two" padded>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
        </Grid>
        <Grid columns="two" padded="vertically">
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
        </Grid>
        <Grid columns="two" padded="horizontally">
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
        </Grid>
      </Story>
    )
  })
  .add('<Grid> relaxed', () => {
    return (
      <Story examples='<Grid relaxed=[ true | "very" ]/><Column/></Grid>'>
        <Grid columns="two" relaxed>
          <Column><Content><h3>relaxed</h3>{ makeLipsum(100)}</Content></Column>
          <Column><Content><h3>relaxed</h3>{ makeLipsum(100)}</Content></Column>
        </Grid>
        <Grid columns="two" relaxed="very">
          <Column><Content><h3>very relaxed</h3>{ makeLipsum(100)}</Content></Column>
          <Column><Content><h3>very relaxed</h3>{ makeLipsum(100)}</Content></Column>
        </Grid>
        <Grid columns="two">
          <Column><Content><h3>not relaxed</h3>{ makeLipsum(100) }</Content></Column>
          <Column><Content><h3>not relaxed</h3>{ makeLipsum(100) }</Content></Column>
        </Grid>
      </Story>
    )
  })
  .add('<Grid> centered', () => {
    return (
      <Story examples={[
          '<Grid centered><Column/></Grid>',
          '<Grid centered><Row><Column/></Row></Grid>'
        ]}>
        <Grid columns="four" centered>
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Column><Content>{ makeLipsum(100)}</Content></Column>
        </Grid>
        <Grid columns="four" centered>
          <Row>
            <Column><Content><h3>inside row</h3>{ makeLipsum(100)}</Content></Column>
            <Column><Content><h3>inside row</h3>{ makeLipsum(100)}</Content></Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('<Grid> aligned', () => {
    return (
      <Story examples='<Grid aligned=[ "left" | "right" | "center" | "justified" ]><Column/></Grid>'>
        <Grid columns="two" aligned="left">
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Column><Content>{ makeLipsum(100)}</Content></Column>
        </Grid>
        <Grid columns="two" aligned="right">
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Column><Content>{ makeLipsum(100)}</Content></Column>
        </Grid>
        <Grid columns="two" aligned="center">
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Column><Content>{ makeLipsum(100)}</Content></Column>
        </Grid>
        <Grid columns="two" aligned="justified">
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Column><Content>{ makeLipsum(100)}</Content></Column>
        </Grid>
      </Story>
    )
  })
  .add('<Grid> valigned', () => {
    return (
      <Story examples='<Grid valigned=[ "top" | "middle" | "bottom" ]><Column/></Grid>'>
        <Grid columns="two" valigned="top">
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Column><Content>{ makeLipsum(200)}</Content></Column>
        </Grid>
        <Grid columns="two" valigned="middle">
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Column><Content>{ makeLipsum(200)}</Content></Column>
        </Grid>
        <Grid columns="two" valigned="bottom">
          <Column><Content>{ makeLipsum(100)}</Content></Column>
          <Column><Content>{ makeLipsum(200)}</Content></Column>
        </Grid>
      </Story>
    )
  })
  .add('<Grid> passes .className and other props', makePassesPropsStory(Grid, { props: {
    className: "centered",
    onClick: action('Grid was clicked'),
    children: <Column>centered and clickable</Column>
  }}))
  .add('<Row> columns', () => {
    return (
      <Story examples='<Grid><Row columns=[ "one" | "two" | ... "sixteen" ]/><Column/></Row></Grid>'>
        <Grid>
          <Row columns="two">
            <Column><Content>two wide</Content></Column>
            <Column><Content>two wide</Content></Column>
          </Row>
          <Row columns="four">
            <Column><Content>four wide</Content></Column>
            <Column><Content>four wide</Content></Column>
            <Column><Content>four wide</Content></Column>
            <Column><Content>four wide</Content></Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('<Row> equal', () => {
    return (
      <Story examples='<Grid><Row equal/><Column/></Row></Grid>'>
        <Grid>
          <Row equal>
            <Column><Content>three columns in row</Content></Column>
            <Column><Content>three columns in row</Content></Column>
            <Column><Content>three columns in row</Content></Column>
          </Row>
          <Row equal>
            <Column><Content>four columns in row</Content></Column>
            <Column><Content>four columns in row</Content></Column>
            <Column><Content>four columns in row</Content></Column>
            <Column><Content>four columns in row</Content></Column>
          </Row>
          <Row equal>
            <Column><Content>two columns in row</Content></Column>
            <Column><Content>two columns in row</Content></Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('<Row> stretched', () => {
    return (
      <Story examples='<Grid><Row stretched/><Column/></Row></Grid>'>
        <Grid>
          <Row equal stretched>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(200) }</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('<Row> centered', () => {
    return (
      <Story examples='<Grid><Row centered><Column/></Row></Grid>'>
        <Grid>
          <Row columns="four" centered>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
          </Row>
        </Grid>
        <Grid>
          <Row columns="four" centered>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('<Row> aligned', () => {
    return (
      <Story examples='<Grid><Row aligned=[ "left" | "right" | "center" | "justified" ]><Column/></Row></Grid>'>
        <Grid>
          <Row columns="two" aligned="left">
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
          </Row>
          <Row columns="two" aligned="right">
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
          </Row>
          <Row columns="two" aligned="center">
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
          </Row>
          <Row columns="two" aligned="justified">
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(100)}</Content></Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('<Row> valigned', () => {
    return (
      <Story examples='<Grid><Row valigned=[ "top" | "middle" | "bottom" ]><Column/></Row></Grid>'>
        <Grid>
          <Row columns="two" valigned="top">
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(200)}</Content></Column>
          </Row>
          <Row columns="two" valigned="middle">
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(200)}</Content></Column>
          </Row>
          <Row columns="two" valigned="bottom">
            <Column><Content>{ makeLipsum(100)}</Content></Column>
            <Column><Content>{ makeLipsum(200)}</Content></Column>
          </Row>
        </Grid>
      </Story>
    )
  })
  .add('<Row> color', () => {
    return (
      <Story examples='<Grid><Row color={ valid color }/><Column/></Row></Grid>'>
        <Grid>
          { makeComponentsForKeyAndOptions(Row, { key: 'color', options: COLORS, props: {
            wide: 'one',
            children: (value) => {
              return (<Column>{value}</Column>)
            }
          }})}
        </Grid>
      </Story>
    )
  })
  .add('<Row> passes .className and other props', () => {
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
  .add('<Column> wide', () => {
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
  .add('<Column> floated', () => {
    return (
      <Story examples='<Grid><Column floated=[ "left" | "right" ]/></Grid>'>
        <Grid>
          <Column floated="left" wide="three"><Content>left floated three wide</Content></Column>
          <Column floated="right" wide="three"><Content>right floated three wide</Content></Column>
        </Grid>
      </Story>
    )
  })
  .add('<Column> color', () => {
    return (
      <Story examples='<Grid><Column color={ valid color }/><Column/></Column></Grid>'>
        <Grid columns='three'>
          { makeComponentsForKeyAndOptions(Column, { key: 'color', options: COLORS })}
        </Grid>
      </Story>
    )
  })
  .add('<Column> aligned', () => {
    return (
      <Story examples='<Grid><Column aligned=[ "left" | "right" | "center" | "justified" ]/></Grid>'>
        <Grid columns="four">
          <Column aligned="left"><Content>{ makeLipsum(100)}</Content></Column>
          <Column aligned="right"><Content>{ makeLipsum(100)}</Content></Column>
          <Column aligned="center"><Content>{ makeLipsum(100)}</Content></Column>
          <Column aligned="justified"><Content>{ makeLipsum(100)}</Content></Column>
        </Grid>
      </Story>
    )
  })
  /*
  Not sure how to test this yet. Not sure if needed
  .add('<Column> valigned', () => {
    const _divStyle = { display: 'inline-flex', width: '50%' }
    return (
      <Story examples='<Grid><Column valigned=[ "top" | "middle" | "bottom" ]/></Grid>'>
        <Grid columns="one">
          <Column valigned="top">
            <div style={_divStyle}>{ makeLipsum(100)}</div>
            <div style={_divStyle}>{ makeLipsum(200)}</div>
          </Column>
          <Column valigned="middle">
            <div style={_divStyle}>{ makeLipsum(100)}</div>
            <div style={_divStyle}>{ makeLipsum(200)}</div>
          </Column>
          <Column valigned="bottom">
            <div style={_divStyle}>{ makeLipsum(100)}</div>
            <div style={_divStyle}>{ makeLipsum(200)}</div>
          </Column>
        </Grid>
      </Story>
    )
  })
  */
  .add('<Column> passes .className and other props', () => {
    return (
      <Story examples='<Grid><Column className="red" onClick={function}></Column></Grid>'>
        <Grid>
          <Column className='red' onClick={action('Column was clicked')}>I am red and clickable</Column>
        </Grid>
      </Story>
    )
  })
