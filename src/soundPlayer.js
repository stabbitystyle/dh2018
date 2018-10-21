import React, { Component } from 'react';
import mp3_file from './song.mp3';




const AudioPlayer = function(props) {
    return (
    <button><audio src={mp3_file} controls autoPlay/></button>
    );
}
export default AudioPlayer;