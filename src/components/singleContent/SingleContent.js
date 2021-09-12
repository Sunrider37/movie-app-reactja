import { Badge } from '@material-ui/core'
import React from 'react'
import { img_300, unavailable } from '../../config/Config'
import './SingleContent.css'
import ContentModal from '../contentModal/ContentModal'

const SingleContent = ({id,poster,date,title,media_type, vote_average}) => {
    return (
        <div className='media'>
            <ContentModal media_type={media_type} id={id}>
            <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"} />
           <img className='poster' src={ poster ? `${img_300}/${poster}` : {unavailable}} alt={title} />
           <b className="title">{title}</b>
           <span className='subtitle'>{media_type === "tv" ? "TV Series" : "Movie" }</span>
           <span className='subTitle'>{date}</span>
            </ContentModal>
        </div>
    )
}

export default SingleContent
