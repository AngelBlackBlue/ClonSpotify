import {create } from "zustand"

export const usePlayerStore = create((set)=>({
    isPlaying: false,
    currentMusic: { playlist: null, song: null, songs:[]},
    setisPlaying: (isPlaying)=>set({isPlaying}),
    setcurrentMusic: (currentMusic)=>set({currentMusic})
}))