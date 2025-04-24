package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

@Component
public class MusicPlayer {
    
    private Music music1;
    private Music music2;
    
    @Autowired
    public void setMusic(@Qualifier("classicalMusic") Music music1,
                         @Qualifier("rockMusic") Music music2) {
        this.music1 = music1;
        this.music2 = music2;
        
    }
    
    public String playMusic(Janr janr){
        if(janr == Janr.CLASSICAL){
            return "Playing " + music1.getSong() ;
        }else if(janr == Janr.ROCK){
            return "Playing  " + music2.getSong();
        }else{
            return "Playing nothing ";
        }
    }
    
}
