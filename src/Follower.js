import React from 'react'

const Follower = ({avatar_url: avatar, html_url: html, login}) => {
    return (
        <article className="card">
            <img src={avatar} alt={login}/>
            <h4>{login}</h4>
            <a href={html} className="btn">
                view profile
            </a>
        </article>
    )
}

export default Follower
