import javascriptskill from './svgs/javascriptskill.svg';
import reactskill from './svgs/reactjsskill.svg';
import css3skill from './svgs/css3skill.svg';
import './MySkills.css'
import React, {useState} from "react";
import classNames from 'classnames';
import mockResume from './svgs/mockresume.svg';

const arr = [
    [javascriptskill,
    reactskill,
    css3skill]
]

function MySkills() {

    const [booOne, setBooOne] = useState(true);
    const [booTwo, setBooTwo] = useState(false);
    const [booThree, setBooThree] = useState(false);
    const wrapperClassesOne = classNames({'show': booOne === true}, {'hide': booOne === false});
    const wrapperClassesTwo = classNames({'show': booTwo === true}, {'hide': booTwo === false});
    const wrapperClassesThree = classNames({'show': booThree === true}, {'hide': booThree === false});

    const changeBooOne = () => {
        setBooOne(true);
        setBooTwo(false);
        setBooThree(false);
    }
    const changeBooTwo = () => {
        setBooTwo(true);
        setBooOne(false);
        setBooThree(false);
    }
    const changeBooThree = () => {
        setBooOne(false);
        setBooTwo(false);
        setBooThree(true);
    }

  return (
    <div className="mySkills">
        <div className="mySkillsWrapper">
            <div className="skillsHeader"><h1>My Skills</h1></div>
            <div className="skillWrapper">
                <div className={wrapperClassesOne}>
                    <img src={arr[0][0]} alt="Skill" />
                    <img src={arr[0][1]} alt="Skill" />
                    <img src={arr[0][2]} alt="Skill" />
                </div>
                <div className={wrapperClassesTwo}>
                    <img src={arr[0][1]} alt="Skill" />
                    <img src={arr[0][0]} alt="Skill" />
                    <img src={arr[0][2]} alt="Skill" />
                </div>
                <div className={wrapperClassesThree}>
                    <img src={arr[0][2]} alt="Skill" />
                    <img src={arr[0][1]} alt="Skill" />
                    <img src={arr[0][0]} alt="Skill" />
                </div>
            </div>
            <div className="lines">
                <div onClick={changeBooOne}></div>
                <div onClick={changeBooTwo}></div>
                <div onClick={changeBooThree}></div>
            </div>
        </div>
        <div className="resumeWrapper">
            <div className="resumeImg"><img src={mockResume} alt="Kendall Hunt Resume" /></div>
            <div className="resumeButtons">
                <button className="viewResume">View Resume</button>
                <button className="printResume">Print Resume</button>
                <button className="downloadResume">Download Resume</button>
            </div>
        </div>

    </div>
  );
}

export default MySkills;