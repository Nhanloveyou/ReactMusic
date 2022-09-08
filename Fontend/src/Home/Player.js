import React from "react";
import Playlist from 'react-mp3-player';
import './Home.css'

export default function SimpleSlider() {
  const tracks = [{ 
      img: require('../Img/hienho.jpeg'), 
      name:'Huỳnh Ngọc Quân', 
      desc: 'Hoa Nở Không Màu', 
      src:require('../Music/KOREA_Ballad_2AM_Cant_Say_I_Love_You.mp3')},
      { img: 'https://icon-library.net/images/music-icon-transparent/music-icon-transparent-11.jpg', 
      name:'Lê Minh Phước', 
      desc: 'Anh nhà ở đâu thế', 
      src:require('../Music/USUK_Ballad_Adele_When_We_Were_Young.mp3')}];
const playlistOverideStylingOpts = {
  offset : {
    left : -20
  },
  breakpoint : {
    maxWidth : 11000
    }
};
  return (
    
    <Playlist tracks={tracks} opts={playlistOverideStylingOpts}/>
  )
}