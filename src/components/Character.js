// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Character = () => {

    const [singleCharacter, setSingleCharacter] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people`)
            .then(res => {
                setSingleCharacter(res.data)
                console.log(res.data)
            })
    })

    return (    
        {singleCharacter}
    )
        

};