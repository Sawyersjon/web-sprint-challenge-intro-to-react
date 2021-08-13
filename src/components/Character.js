// Write your Character component here
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'


const StyledCharacter = styled.div
`border: 1px solid black;
background-color:rgba(192,192,192,0.5);
text-align: center;
justify-content: center;
border-radius: 3%;
width: 400px;
font-size: 1.6rem;

`

export default function Character(props) {
    const {characterList} = props
    
    const character = characterList.map((char) => {
        const name = char.name;
        const gender = char.gender;
        const height = char.height;
        const mass = char.mass;
        const birth = char.birth_year;
        const eye = char.eye_color;
        const hair = char.hair_color;
        const skin = char.skin_color;

        return(
            <StyledCharacter key={char.id}>
                <h1>{name}</h1>
                    <ul>
                        <p>Gender: {gender}</p>
                        <p>Height: {height}</p>
                        <p>Mass: {mass} </p>
                        <p>BirthYear: {birth}</p>
                        <p>Eye Color: {eye}</p>
                        <p>Hair Color: {hair}</p>
                        <p>Skin Color: {skin}</p>
                    </ul>
            </StyledCharacter>
            )

    });
    return character
}