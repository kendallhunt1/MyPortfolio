import React from 'react';
import './MyWork.css'

const MyWork = () => {
    return (
        <section className="myWork">
        <div className="workSort">
            <h1 className="myWorkHeadline">The Collection of my Work</h1>
        </div>
        <div className="workHolder">
            <div className="workBox tipCalculator">
                <a href="https://github.com/kendallhunt1/tipCalculator">TaylorMade 2020 Irons</a>
            </div>
            <div className="workBox portfolio">
                <a href="">Nasa API</a>
            </div>
            <div className="workBox openSourceProject">
                <a href="">Supreme Detailing</a>
            </div>
            <div className="workBox lolCatClock">
                <a href="https://github.com/kendallhunt1/LOL-Cat-Clock">LOL Cat Clock</a>
            </div>
            <div className="workBox animatedMenuToggle">
                <a href="https://github.com/kendallhunt1/animatedNavToggleMenu">Golf Passion Project</a>
            </div>
            <div className="workBox financialGoalHelper">
                <a href="">Financial Goal Helper</a>
            </div>
        </div>
        <div className="seperatorLine"></div>
    </section>
    )
}

export default MyWork;