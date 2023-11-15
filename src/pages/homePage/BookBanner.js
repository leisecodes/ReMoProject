import React from 'react';
import lifelingImage from '../../images/BookCovers/Lifeling.jpg';
import thirstImage from '../../images/BookCovers/Thirst.jpg';
import lifeAndCrimesImage from '../../images/BookCovers/Life and Crimes of Hoodie Rosen.jpg';
import voicesImage from '../../images/BookCovers/Voices of the People.jpg';
import wildRideImage from '../../images/BookCovers/Wild Ride.jpg';
import troublemakerImage from '../../images/BookCovers/Troublemaker.jpg';
import historyOfUnderwearImage from '../../images/BookCovers/A History of Underwear With Professor Chicken.jpg';
import millionViewsImage from '../../images/BookCovers/A Million Views.jpg';
import roversStoryImage from '../../images/BookCovers/A Rover\'s Story.jpg';
import answersInThePagesImage from '../../images/BookCovers/Answers in the Pages.jpg';
import attackOfTheBlackRectanglesImage from '../../images/BookCovers/Attack of the Black Rectangles.jpg';
import dungeonClubImage from '../../images/BookCovers/D&D Dungeon Club.jpg';
import differentFruitImage from '../../images/BookCovers/Different Kinds of Fruit.jpg';
import endlesslyEverAfterImage from '../../images/BookCovers/Endlessly Ever After.jpg';
import frizzyImage from '../../images/BookCovers/Frizzy.jpg';
import gabeInTheAfterImage from '../../images/BookCovers/Gabe In The After.jpg';
import highScoreImage from '../../images/BookCovers/High Score.jpg';
import betrayYouImage from '../../images/BookCovers/I Must Betray You.jpg';
import hopeInHopetownImage from '../../images/BookCovers/Last Hope In Hopetown.jpg';


function BookBanner() {
    const bookCovers = [
        { id: 1, src: lifelingImage},
        { id: 2, src: thirstImage},
        { id: 3, src: lifeAndCrimesImage},
        
        //{ id: 5, src: wildRideImage},
        { id: 6, src: troublemakerImage },
        //{ id: 7, src: historyOfUnderwearImage},
        //{ id: 8, src: millionViewsImage},
        //{ id: 9, src: roversStoryImage},
        { id: 4, src: voicesImage},
        { id: 10, src: answersInThePagesImage},
        { id: 11, src: attackOfTheBlackRectanglesImage},
        //{ id: 12, src: dungeonClubImage },
        //{ id: 13, src: differentFruitImage },
        { id: 14, src: endlesslyEverAfterImage },
        { id: 15, src: frizzyImage },
        { id: 16, src: gabeInTheAfterImage },
        { id: 17, src: highScoreImage },
        { id: 18, src: betrayYouImage },
        { id: 19, src: hopeInHopetownImage },
    ];


    return (
        <div className="book-banner">
        {bookCovers.map((cover) => (
            <img key={cover.id} src={cover.src} alt={`Book Cover ${cover.id}`} className="book-cover" />
        ))}
    </div>
);
}

export default BookBanner;