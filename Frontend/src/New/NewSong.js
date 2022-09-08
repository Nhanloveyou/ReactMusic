import React from 'react'
import Song from '../Gochart/Song'
import './New.css'
export default class NewSong extends React.Component{
    constructor(props){
        super(props);
        this.state={
        }
    }
    render(){
        return(
            <div className='newsong-full'>
                {[...Array(20)].map((i) =>
                        <Song key={i}></Song>   
                )}
            </div>
        );
    }
}