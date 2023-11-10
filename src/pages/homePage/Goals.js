import React from 'react';
import goalImg from "../../images/goal.jpg";
import voteimg from "../../images/voteimg.jpg";
import starimg from "../../images/starimg.png";
import challengeGoal from "../../images/challengegoal.png";
import user from "../profilePage/profile.json";
function Goals (props) {
    return (
        <div>
            <div class="row text-center p-3">
                <h1>Goals</h1>
            </div>
            <div class="row text-center p-3">
                <h2>Here are your goals:</h2>
            </div>
        <div class="row">
            <div class="col-6">
                <div class="container-md border">
                    <div class="row text-center p-3">
                        <h2>Voting Goal</h2>
                    </div>
                    <div class="row align-items-center p-4">
                        <center>
                            <div class="col">
                                <img src={voteimg} alt='goal' width="100px" height="100px"/>
                            </div>
                        </center>
                    </div>
                    <div class="row text-center p-3">
                        {user.readCount >= user.goals.voteGoal ? <h2> Goal Achieved! </h2> : <h2> {user.readCount} of 3 Completed</h2>}
                    </div>
                </div>
            </div>

            <div class="col-6">
                <div class="container-md border">
                    <div class="row text-center p-3">
                        <h2>Personal Goal</h2>
                    </div>
                    <div class="row align-items-center p-4">
                        <center>
                            <div class="col">
                                <img src={goalImg} alt='goal' width="100px" height="100px"/>
                            </div>
                        </center>
                    </div>
                    <div class="row text-center p-3">
                    {(user.readCount >= user.goals.personalGoal) ? <h2> Goal Achieved! </h2> : <h2>{user.readCount} of {user.goals.personalGoal} Completed</h2>}
                    </div>
                </div>
            </div>

            <div class="col-6">
                <div class="container-md border">
                    <div class="row text-center p-3">
                        <h2>Star Reader</h2>
                    </div>
                    <div class="row align-items-center p-4">
                        <center>
                            <div class="col">
                                <img src={starimg} alt='goal' width="100px" height="100px"/>
                            </div>
                        </center>
                    </div>
                    <div class="row text-center p-3">
                    {(user.readCount >= user.goals.starGoal) ? <h2> Goal Achieved! </h2> : <h2>{user.readCount} of {user.goals.starGoal} Completed</h2>}
                    </div>
                </div>
            </div>

            <div class="col-6">
                <div class="container-md border">
                    <div class="row text-center p-3">
                        <h2>Challenge Goal</h2>
                    </div>
                    <div class="row align-items-center p-4">
                        <center>
                            <div class="col">
                                <img src={challengeGoal} alt='goal' width="100px" height="100px"/>
                            </div>
                        </center>
                    </div>
                    <div class="row text-center p-3">
                    {(user.readCount >= user.goals.challengeGoal) ? <h2> Goal Achieved! </h2> : <h2>{user.readCount} of {user.goals.challengeGoal} Completed</h2>}
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Goals;