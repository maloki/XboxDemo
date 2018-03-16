import React, { Component } from "react";
import ReactDOM from "react-dom";
import styled from 'styled-components'

const Wrapper = styled.div`

  .about{
    position: fixed;
    z-index: 11;
    top: 10px;
    left: 50%;
    width:200px;
    height:200px;
    background-color: #ccc;

  }
`
let mainRotate = 1
let scrollPosition = 0
let lastScrollPosition = 0
let scrollUp = false
const topPerimeter = 700
const bottomPerimeter = 3000
class WelcomeUnit extends Component {
  state = {
    zoom:0,
    opacity: 0,
  }
  constructor(props){
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount(){
    let module = document.getElementById("module-1")
    window.addEventListener('scroll', this.handleScroll);
  }
  handleScroll(){
    scrollPosition = window.pageYOffset
    console.log(scrollPosition)
    if(scrollPosition > lastScrollPosition)
      scrollUp = false
    else
      scrollUp = true
    lastScrollPosition = window.pageYOffset
    // main calculation
    let zoom = 1
    let opacity = 1
    if(scrollPosition >= topPerimeter){
      console.log("per")
    //  zoom = 2 - ((window.pageYOffset - topPerimeter) / 1000)
      opacity = 1
    }
    this.setState({...this.state, zoom: zoom, opacity: opacity})
  }
  render() {
      return (
        <Wrapper>
          <div id="module-2" className="about" style={{zoom: this.state.zoom, opacity: this.state.opacity}}>

          </div>
        </Wrapper>
     )
   }
}

export default WelcomeUnit
