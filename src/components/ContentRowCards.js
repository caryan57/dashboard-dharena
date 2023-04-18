import React from 'react';
import ShowsCard from './Cards/ShowsCard';
import UsersCard from './Cards/UsersCard';

function ContentRowCards(){
    return (
    
        <div className="row">
            <ShowsCard />
            <UsersCard />
        </div>
    )
}

export default ContentRowCards;