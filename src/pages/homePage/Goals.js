import React from 'react';
import goalImg from "../../images/goal.jpg";
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
                                <img src={goalImg} alt='goal' width="100px" height="100px"/>
                            </div>
                        </center>
                    </div>
                    <div class="row text-center p-3">
                        <h2>X of 3 Completed</h2>
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
                        <h2>X of Y Completed</h2>
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
                                <img src={goalImg} alt='goal' width="100px" height="100px"/>
                            </div>
                        </center>
                    </div>
                    <div class="row text-center p-3">
                        <h2>X of 10 Completed</h2>
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
                                <img src={goalImg} alt='goal' width="100px" height="100px"/>
                            </div>
                        </center>
                    </div>
                    <div class="row text-center p-3">
                        <h2>X of Z Completed</h2>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Goals;