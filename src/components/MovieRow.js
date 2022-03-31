/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items}) => {
    const [scrollX, setScrollX] = useState(-400)

    const handleLeftArrow = () => {
        // window.innerWidth get the width of the user monitor
        let x = scrollX + Math.round(window.innerWidth/2);
        if (x > 0) {
            x = 0
        }
        setScrollX(x)
    }

    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth)
        let listWidth = items.results.length * 150;
        if ((window.innerWidth - listWidth) > x) {
            // -60 because of the padding, 30px of each side
            x = (window.innerWidth - listWidth) - 60;
        }
        setScrollX(x)
    }

    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left" onClick={handleLeftArrow}>
                <NavigateBeforeIcon style={{fontSize: 50}} className=""/>
            </div>

            <div className="movieRow--right" onClick={handleRightArrow}>
                <NavigateNextIcon style={{fontSize: 50}} className=""/>
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollX,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300/${item.poster_path}`} alt={item.original_title}/> 
                        </div>
                    ))}    
                </div>
            </div>
        </div>
    )
}

// How can I have a list that moves from one side to the other?
// one div beeing the area, and the other div is the responsible to keep all the items, through the margin we can do the effect of moving