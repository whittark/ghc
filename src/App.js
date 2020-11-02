import React, { Component } from 'react';
// @ts-ignore
import './logo.svg';
import './App.css';
import Loader from './components/loader';
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about';
import Carousel from './components/carousel';
import Featured from './components/featured';
import AI from './components/ai'
import BigData from './components/bigdata';
import Culture from './components/culture';
import CyberSecurity from './components/cybersecurity';
import DevOps from './components/devops';
import IoT from './components/iot';
import ReactJS from './components/reactjs';
import Footer from './components/footer';


class App extends Component {
  render() {
    return (
        <div id="page">
          <div id="container-wrap">
          <Loader></Loader>
         	<Navbar></Navbar>
				<div id="Main">
          <Hero></Hero>
					<About></About>
					<Carousel></Carousel>
					<Featured></Featured>
          <AI></AI>
          <BigData></BigData>
          <Culture></Culture>
          <CyberSecurity></CyberSecurity>
          <DevOps></DevOps>
          <IoT></IoT>
          <ReactJS></ReactJS>
          <Footer></Footer>
          </div>
        </div>
      </div>

    )}
}

export default App;
