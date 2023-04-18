import React from 'react';
import ShowsCard from './Cards/ShowsCard';
import UsersCard from './Cards/UsersCard';
import GenreCard from './Cards/GenreCard';

function ContentRowCards(){
    return (
    
        <div className="row">
            <ShowsCard />
            <UsersCard />
            <GenreCard />
        </div>
    )
}

export default ContentRowCards;