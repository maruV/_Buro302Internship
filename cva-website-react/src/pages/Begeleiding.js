import React from 'react';
import {Link} from "react-router-dom";
import pdf from '../assets/files/begeleiding.pdf';

const Begeleiding = () => {
    return (
        <div className="BegeleidingHome">

            <div className="textBox">

                <div className="headingContainer">
                    <p> Begeleiding bij een CVA</p>
                </div>

                <div className="textContainer">
                    <p>
                        Een CVA, ook wel beroerte genoemd, is een ingrijpende gebeurtenis voor de persoon zelf en diens
                        naasten.
                        Jaarlijks krijgen ruim 41.000 een CVA. Het kan hierbij gaan om een herseninfarct of een
                        hersenbloeding.
                        <br/>
                        In de regio Noordelijke Maasvallei werkt de CVA-zorgketen Noordelijk Maasvallei samen met
                        ziekenhuizen,
                        verpleeghuizen, revalidatiecentra en de thuiszorg om mensen na een CVA zo goed mogelijk te
                        begeleiden.
                        Samen zorgen zij ervoor dat mensen die een CVA hebben meegemaakt de juiste begeleiding, door de
                        juiste hulpverlener,
                        op het juiste moment en op de juiste plaats kunnen ontvangen.
                    </p>
                </div>

                <div className="textContainer">
                    <p>
                        Na het CVA volgt een opname in het ziekenhuis of komt de huisarts aan huis.
                        Eventueel komt er een vervolg in een verpleeghuis, revalidatiecentrum en/of in de polikliniek.
                        Wanneer iemand vervolgens terug naar huis gaat, start de CVA nazorg.
                        Binnen de CVA-zorgketen Noordelijke Maasvallei hechten we veel waarde aan nazorg omdat er,
                        eenmaal thuis, nieuwe uitdagingen kunnen ontstaan.
                        <br/>
                        Inhoud nazorg: Binnen de nazorg begeleiding heeft de cliënt 1 contactpersoon.
                    </p>
                </div>

                <div className="textContainer">
                    <p>
                        Standaard staan vierhuisbezoeken gepland met de contactpersoon uit de CVA-keten. Maar ook op
                        andere momenten is contact mogelijk.
                        Naast de contactpersoon, kunnen ook andere zorg- of welzijnsprofessionals thuis betrokken
                        worden.
                        Binnen de nazorg vindt periodiek multidisciplinair overleg plaats voor een goede samenwerking.
                        De cliënt bepaalt, samen met de betrokken professionals, welke informatie hier besproken wordt.
                    </p>
                </div>

            </div>


            <div className="image-wrapper">
                <div className="begImageContainer">
                    <img src={require('../assets/images/begeleiding.png')} className="begImage"/>
                </div>
            </div>

            <div className="DownloadButtonContainer">
                <a className="DownloadButton" href={pdf}>
                    Download pdf
                </a>
            </div>

        </div>
    )
}

export default Begeleiding;