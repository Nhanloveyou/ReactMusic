import React from 'react'
import Song from './Song'
import './Gochart.css'

import axios from 'axios';
const getSongData = () => axios.get('http://localhost:5000/top5')
                              .then((res) => res.data )

export default class Top100_Gochart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:null
        }
    }
    componentWillMount() {
        if(this.state.data === null ){
          getSongData().then((response) => {
            this.setState({
              data:response
            });
          })
        }
      }

      printData = () => {
        if (this.state.data !== null){
          return this.state.data.map((value) => 
          (
              <Song
              key={value._id}
                  sttSong = {value.Name}
                  nameSong = {value.Genre}
                  imgSong = {'http://localhost:5000/upload/song/'+ value.Poster}
              />
            )
            
          )
        }
      }
    render(){
        return(
            <div className='top100-gochart'>
                {[...Array(20)].map((i) =>
                        {this.printData()}  
                )}
            </div>
        );
    }
}