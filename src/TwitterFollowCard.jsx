
import { useState } from "react";

export function TwitterFollowCard({children,formatUserName, userName,initialIsFollowing}) {
    
    const [isFollowing,setIsFollowing]=useState(initialIsFollowing)

    const text = isFollowing ? 'Siguiendo':'Seguir'
    const buttonClassName= isFollowing
        ? "buton text-white butonhover group "
        :"buton bg-white hover:bg-opacity-95"

    const handleClick =()=>{
        setIsFollowing(!isFollowing)
    }   
        
    return (
        <article className="flex items-center justify-between ">
            <header className="text-white flex items-center mr-4 ">
                <img className="w-12 rounded-full" src={`https://unavatar.io/${userName}`} alt="avatar" />
                <div className="flex flex-col ml-2">
                    <strong className="leading-5 ">{children}</strong>
                    <span className="opacity-60">{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className="block  group-hover:hidden">{text}</span>
                    <span className="hidden  group-hover:block">Dejar de Seguir</span>
                </button>
            </aside>
        </article>
    )
}
