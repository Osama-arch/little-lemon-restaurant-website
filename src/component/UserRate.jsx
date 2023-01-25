import React from 'react';
import userData from './userData';
import { ReactComponent as StarSvg } from '../assets/svg/Star.svg';
function UserRate() {
  return userData.map((item) => {
    const { id, name, stars, imageUrl, nickName, desc } = item;
    return (
      <div className='rate-card bg-gradient' key={id}>
        <div className='stars flex-sb'>
          {[...Array(Math.ceil(stars))].map((star, index) => {
            index += 1;
            return <StarSvg key={index} />;
          })}
        </div>
        <article className='flex-sb'>
          <div className='user-image'>
            <img src={imageUrl} alt={name} className='img' />
          </div>
          <div className='user-data'>
            <h6>{name}</h6>
            <p className='nick-name'>{nickName}</p>
          </div>
        </article>
        <p className='rate-desc'>{desc}</p>
      </div>
    );
  });
}

export default UserRate;
