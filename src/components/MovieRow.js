/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({title, items}) => {
    return (
        <div className="movieRow">
            <h2>{title}</h2>

            <div className="movieRow--left">
                <NavigateBeforeIcon style={{fontSize: 50}} className=""/>
            </div>

            <div className="movieRow--right">
                <NavigateNextIcon style={{fontSize: 50}} className=""/>
            </div>

            <div className="movieRow--listarea">
                <div className="movieRow--list">
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