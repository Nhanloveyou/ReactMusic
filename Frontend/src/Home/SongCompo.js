import React from 'react'
import {Link} from 'react-router-dom'
import './SongCompo.css'

export default class SongCompo extends React.Component{
    render(){
        return(
            <div className='songcompo-full'>
                <div className='hover'>
                    <img className='songcompo-img' src={this.props.imgSong}></img>
                </div>
                <div className='songcompo-info'>
                    <p>{this.props.nameSong}</p>
                    <a href=''>{this.props.casi}</a>
                </div>
            </div>
        )
    }
}