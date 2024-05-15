import { Play, Pause} from "./Player"
import { usePlayerStore } from '../store/playerStore'

export function CardPlayButton ({id}) {
    const {  } = usePlayerStore(state => state)   
    
    return (
        <div className="card-play-button rounded-full bg-green-500 p-4">
            <Play/>
        </div>

    )
}   