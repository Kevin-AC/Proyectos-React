import { TwitterFollowCard } from "./TwitterFollowCard"
export function App(){
    const format=(userName)=>`@${userName}`

    return(
        <section className='flex flex-col gap-3'>
            <TwitterFollowCard formatUserName={format} userName="midudev" >
                Miguel Ángel Durán
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={format} userName="Sdesalvaje" initialIsFollowing={true}>
                Salvaje
            </TwitterFollowCard>
            <TwitterFollowCard formatUserName={format} userName="SupraPixel" initialIsFollowing={true}>
                SupraPixel
            </TwitterFollowCard>
            
        </section>
    )
}