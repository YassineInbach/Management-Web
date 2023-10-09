import React, { useEffect, useState } from "react";
import CardData from "./CardData";

function Cards({ cards }) {
    const [step, setStep] = useState(0);
    useEffect(() => {
        console.log(step);
        console.log(CardData.length);
        console.log(CardData.length - 2);
    }, [step]);

    function handleNextStep() {
        if (step < CardData.length - 2) {
            setStep(step + 2);
        }
    }
    function handlePrevStep() {
        var lastArray = CardData[CardData.length - 1];
        if (lastArray) {
            setStep(step - 1);
        } else {
            setStep(0);
        }
    }
    return (
        <>
            <div className="center">
                <div className="wrapper" style={{ overflow: "hidden" }}>
                    <div className="cards">
                        {cards.map((card, index) => (
                            <div
                                className="card"
                                key={index.id}
                                style={{ transform: `translateX(-${step * 460}px)` }}
                            >
                                <div className="img">
                                    <img src={card.img} alt="" />
                                </div>
                                <div className="content-card">
                                    <h3>{card.name}</h3>
                                    <h6>{card.para}</h6>
                                    <p>{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="map">
                    <button
                        onClick={() => {
                            handleNextStep();
                        }}
                        style={{ background: "var(--black)" }}
                    ></button>
                    <button
                        onClick={() => {
                            handleNextStep();
                        }}
                    ></button>
                    <button onClick={handlePrevStep}></button>
                </div>
            </div>
        </>
    );
}

export default Cards;
