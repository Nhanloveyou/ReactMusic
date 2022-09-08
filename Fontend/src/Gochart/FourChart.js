import React from 'react'
import './Gochart.css'

import imgVN from '../Img/vpop.png'
import imgCN from '../Img/Cpop.png'
import imgKR from '../Img/kpop.png'
import imgUSUK from '../Img/usuk.png'

export default class FourChart extends React.Component{
    render(){
        return(
            <div className='fourchart-full'>
                <div className='fourchart-80'>
                    <div className='fourchart-1'>
                        <a href=''><img src={imgVN}></img></a>
                    </div>
                    <div className='fourchart-1'>
                        <a href=''><img src={imgKR}></img></a>
                    </div>
                    <div className='fourchart-1'>
                        <a href=''><img src={imgCN}></img></a>
                    </div>
                    <div className='fourchart-1'>
                        <a href=''><img src={imgUSUK}></img></a>
                    </div>
                </div>
            </div>
        )
    }
}