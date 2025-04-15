import React from 'react'

function FeaturedLink({className}) {
    return (
        <div
            className={`flex gap-4 ${className}`}
        >
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href='/blog'>Blog</a>
            <a href='/projects'>Projects</a>
        </div>
    )
}

export default FeaturedLink