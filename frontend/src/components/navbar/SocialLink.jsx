import React from 'react'

function SocialLink({className}) {
    return (
        <div className={`flex gap-4 ${className}`}>
            <div
                
            ><i className="ri-linkedin-box-fill text-2xl"></i></div>
            <div><i class="ri-github-fill text-2xl"></i></div>
            <div><i class="ri-external-link-line text-2xl"></i></div>
            <div><i class="ri-moon-fill text-xl rounded-full border p-1"></i></div>

        </div>
    )
}

export default SocialLink