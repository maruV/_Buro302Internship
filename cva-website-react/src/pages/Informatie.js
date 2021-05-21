import React from 'react';

const Informatie = () => {
    return (
        <div className="InfoPage">

            <div className="beeldmerk-container">
                <img src={require('../assets/images/beeldmerk.png')} />
            </div>

            <div className="leftContainer">

                <div className="leftHeader">
                    <h3>Wat is het doel van de CVA-keten <br /> Noordelijke Maasvallei?</h3>
                </div>

                <div className="leftTextBox">
                    <div className="leftText1">
                        <p>Het doel van ons als keten is het leveren van zorg conform de nieuwe gezondheidszorg tendensen:
                        het transparant leveren van doelmatige zorg van hoge kwaliteit, aangeboden in de eigen leefwereld
                        van de vragende cliënt.
                        <br />
                        De begeleiding van ons als professionals bestaat uit “thuisrevalidatie”. Hierbij vindt begeleiding
                        door professionals plaats in de thuisomgeving van de cliënt.
                        </p>
                    </div>

                    <div>
                        <p className="leftText2"><u>Thuisrevalidatie kan worden aangeboden als  vervolg van:</u></p>
                        <p className="leftText2">- Diagnostiek na het doormaken van een CVA (in ziekenhuis of door huisarts);</p>
                        <p className="leftText2">- Intramurale revalidatie na opname/revalidatie in ziekenhuis, revalidatiecentrum of verpleeghuis;</p>
                        <p className="leftText2">- of poliklinische revalidatie.</p>
                        <p className="leftText2">
                            Welke professionals deel uitmaken van het eerstelijns team verschilt per persoon en is afhankelijk
                            van ervaren beperkingen en de hulpvraag.
                        </p>
                    </div>
                </div>

                <div className="leftHeader">
                    <h3>Expertise eisen keten</h3>
                </div>

                <div className="leftTextBox">

                    <div className="leftTextContainer">
                        <div className="leftSerial">1.</div>
                        <div className="leftText">
                            Netwerkleden hebben aantoonbare expertise op het gebied van
                            CVA-thuisrevlidatie. Een  professional voldoet (binnen een jaar na
                            aanmelding) aan de expertise eisen die het netwerk stelt en heeft minimaal
                            1jaar klinische expertise in het behandelen/begeleiden van CVA-cliënten.
                        </div>
                    </div>

                    <div className="leftTextContainer">
                        <div className="leftSerial">2.</div>
                        <div className="leftText">
                            Netwerkleden ontwikkelen en onderhouden hun kennis en vaardigheden op het
                            gebied van CVA-thuisrevalidatie. Een professional behandelt minimaal
                            8 cliënten per jaar met een minimum van 80 uur.
                        </div>
                    </div>

                    <div className="leftTextContainer">
                        <div className="leftSerial">3.</div>
                        <div className="leftText">
                            Netwerkleden hebben affiniteit met het behandelen/begeleiden van
                            CVA-cliënten.
                        </div>
                    </div>

                    <div className="leftTextContainer">
                        <div className="leftSerial">4.</div>
                        <div className="leftText">
                            Netwerkleden werken volgens de principes van Evidence Based Practice en
                            hanteren recente richtlijnen geschreven voor en/of toepasbaar in de
                            CVA-zorg. Zowel vanuit eigen beroepsgroep als het kwaliteitsinstituut voor
                            de gezondheidszorg (CBO).
                        </div>
                    </div>

                    <div className="leftTextContainer">
                        <div className="leftSerial">5.</div>
                        <div className="leftText">
                            Netwerkleden werken samen met anderen. Een professional expliciteert eigen
                            deskundigheid en grenzen, identificeert andermans rollen en grenzen en
                            waardeert de diversiteit in rollen en expertise.
                        </div>
                    </div>

                    <div className="leftTextContainer">
                        <div className="leftSerial">6.</div>
                        <div className="leftText">
                            Netwerkleden leren van elkaar. Een professional neemt, minimaal 1x per jaar,
                            deel aan tweejaarlijkse inhoudelijke netwerkbijeenkomsten.
                        </div>
                    </div>

                </div>

                <div className="beeldmerkMOBILE-container">
                    <img src={require('../assets/images/beeldmerk.png')} />
                </div>

            </div>

            <div className="rightContainer">

                <div className="rightHeader">
                    <h3>ONZE VISIE</h3>
                </div>

                <div className="rightTextBox">
                    <div className="rightTextContainer">
                        <div className="rightSerial">A.</div>
                        <div className="rightText">
                            Eigen regie: de mogelijkheden van de cliënt voor eigen regie
                            in het begeleidingstraject moeten (herhaald) worden geïnventariseerd (waar nodig vergroot)
                            en benut.
                        </div>
                    </div>
                    <div className="rightTextContainer">
                        <div className="rightSerial">B.</div>
                        <div className="rightText">
                            Case-management: de cliënt moet een centraal aanspreekpunt hebben die,
                            ook langere tijd na het doormaken van een beroerte, bereikbaar is.
                        </div>
                    </div>
                    <div className="rightTextContainer">
                        <div className="rightSerial">C.</div>
                        <div className="rightText">
                            Aandacht voor het sociale netwerk: zowel als hulpbron in de begeleiding, maar ook voor het
                            beschermen van overbelasting (meer informatie is te vinden onder “Meer weten: sociaal netwerk).
                        </div>
                    </div>
                    <div className="rightTextContainer">
                        <div className="rightSerial">D.</div>
                        <div className="rightText">
                            Aandacht voor de niet-zichtbare gevolgen na een CVA: zoals verandering in stemming en geheugen
                            (meer informatie is te vinden onder “Meer weten: onzichtbare gevolgen).
                        </div>
                    </div>
                    <div className="rightTextContainer">
                        <div className="rightSerial">E.</div>
                        <div className="rightText">
                            Expertise: leden van de CVA-keten Noordelijke Maasvallei hebben expertise op het gebied van
                            CVA-(thuis)revalidatie om begeleiding van hoge kwaliteit te kunnen bieden (zie voor meer
                            informatie: “expertise eisen.
                        </div>
                    </div>
                    <div className="rightTextContainer">
                        <div className="rightSerial">F.</div>
                        <div className="rightText">
                            Samenwerking: optimale samenwerking van betrokken professionals, cliënt en netwerk o.a.
                            door het gezamenlijk opstellen van doelen, rapportages en het voeren van periodieke overleggen.
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default Informatie;
