import React from 'react';
import Separator from './separator';

function PgHeader () {
    
    const HeaderContainerStyle = {
        display: 'flex',
        alignItems: 'center',
    };
    
    
    const backButtonStyle = {
        backgroundColor: '#FF5733',
        width: '55px',
        height: '55px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: '24px',
        marginLeft: '1.3cm',
    };
    
    const bookDetailsStyle = {
        marginLeft: '0.8cm',
        
    };
    
    const minMargin = {
        margin: 0,
        padding: 0,
    };

    const arrowStyle = {
        fontSize: '24px',
    };
    
    
    
    
    return(
        <div>
            <Separator />
            <div style={HeaderContainerStyle} >
                
                <div className="back-button" style={backButtonStyle}>
                    {/* Blue box with a white back arrow */}
                    <div className="arrow" style={arrowStyle}>&#8592;</div>
                </div>
                <div className="book-details" style={bookDetailsStyle}>
                    <h1 style={minMargin}>Book Details</h1>
                    <span style={minMargin}>(Unread Book)</span>
                </div>
            </div>
        </div>
    );
}
export default PgHeader;