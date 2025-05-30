package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

public class MusicPlayer {
    
    private Music music1;
    private Music music2;
    
    public MusicPlayer(Music music1, Music music2) {
        this.music1 = music1;
        this.music2 = music2;
    }
    
    @Value("${musicPlayer.name}")
    private String name;
    @Value("${musicPlayer.volume}")
    private int volume;
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getVolume() {
        return volume;
    }
    
    public void setVolume(int volume) {
        this.volume = volume;
    }
    
   
    
    public void setMusic(@Qualifier("classicalMusic") Music music1,
                         @Qualifier("rockMusic") Music music2) {
        this.music1 = music1;
        this.music2 = music2;
        
    }
    
    public String playMusic(){
        return "Playing " + music1.getSong() + ",  " + music2.getSong();
    }
    
}
