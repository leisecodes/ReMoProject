import React from 'react';
import goalImg from "../../images/goal.jpg";
import voteimg from "../../images/voteimg.jpg";
import starimg from "../../images/starimg.png";
import challengeGoal from "../../images/challengegoal.png";
import "./homepg.css";


// Component to display various goals
function Goals (props) {
    return (
        <div className='container-fluid'>

            {/* Title for the Goals section */}
            <div class="row text-center p-3">
                <h1 className="goals-title">Goals</h1>
            </div>
           
        
        {/* Individual goal cards */}
        <div class="row">

            {/* Voting Goal */}
            <div class="col-md-6 mb-4">
                <div class="col-md goal-card-1 goal-card-margin-left">
                    <div class="row text-center p-3">
                        <h2 class="goal-label-1">Voting Goal</h2>
                    </div>

                    {/* Image for Goal */}
                    <div class="row align-items-center p-4">
                        <center>
                            <div class="col">
                                <img src={voteimg} alt='goal' width="100px" height="100px"/>
                            </div>
                        </center>
                    </div>

                    {/* Displaying completion status for Goal */}
                    <div class="row text-center p-3">
                        {props.user.readCount >= props.user.goals.voteGoal ? <h2> Goal Achieved! </h2> : <h2> <span className="read-count">{props.user.readCount}</span> of <span className="goal-label-1">3</span> Completed</h2>}
                    </div>
                </div>
            </div>

             {/* Personal Goal */}
            <div class="col-md-6 mb-4">
                <div class="col-md goal-card-2 goal-card-margin-right">
                    <div class="row text-center p-3">
                        <h2 class="goal-label-2">Personal Goal</h2>
                    </div>

                    {/* Image for Goal */}
                    <div class="row align-items-center p-4">
                        <center>
                            <div class="col">
                                <img src={goalImg} alt='goal' width="100px" height="100px"/>
                            </div>
                        </center>
                    </div>

                    {/* Displaying completion status for Goal */}
                    <div class="row text-center p-3">
                    {(props.user.readCount >= props.user.goals.personalGoal) ? <h2> Goal Achieved! </h2> : <h2> <span className="read-count">{props.user.readCount}</span> of <span className="goal-label-2">{props.user.goals.personalGoal}</span> Completed</h2>}
                    </div>
                </div>
            </div>

            {/* Star Reader */}
            <div class="col-md-6 mb-4">
                <div class="col-md goal-card-3 goal-card-margin-left">
                    <div class="row text-center p-3">
                        <h2 class="goal-label-3">Star Reader</h2>
                    </div>

                    {/* Image for Goal */}
                    <div class="row align-items-center p-4">
                        <center>
                            <div class="col">
                                <img src={starimg} alt='goal' width="100px" height="100px"/>
                            </div>
                        </center>
                    </div>

                    {/* Displaying completion status for Goal */}
                    <div class="row text-center p-3">
                    {(props.user.readCount >= props.user.goals.starGoal) ? <h2> Goal Achieved! </h2> : <h2><span className="read-count">{props.user.readCount}</span> of <span className="goal-label-3">{props.user.goals.starGoal}</span> Completed</h2>}
                    </div>
                </div>
            </div>

            {/* Challenge Goal */}
            <div class="col-md-6 mb-4">
                <div class="col-md goal-card-4 goal-card-margin-right">
                    <div class="row text-center p-3">
                        <h2 class="goal-label-4">Challenge Goal</h2>
                    </div>

                    {/* Image for Goal */}
                    <div class="row align-items-center p-4">
                        <center>
                            <div class="col">
                                <img src={challengeGoal} alt='goal' width="100px" height="100px"/>
                            </div>
                        </center>
                    </div>

                    {/* Displaying completion status for Goal */}
                    <div class="row text-center p-3">
                    {(props.user.readCount >= props.user.goals.challengeGoal) ? <h2> Goal Achieved! </h2> : <h2> <span className="read-count">{props.user.readCount}</span> of <span className="goal-label-4">{props.user.goals.challengeGoal}</span> Completed</h2>}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Goals;