/*  ===========================================================================
//  DEPENDENCIES
//  =======================================================================  */
//  Import React Hooks
// import { useState, useEffect } from 'react';

//  Import Components
import Header from './Header';
import Score from './Score';
import Play from './Play';
import Trivia from './Trivia';
import Reveal from './Reveal';

export default function Jeopardy() {
    return (
        <>
            <Header />
            <Score />
            <Play />
            <Trivia />
            <Reveal />
        </>
    )
}