package org.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.Random;

@Component
public class Computer{
    private int id;
    private MusicPlayer musicPlayer;
    
    @Autowired
    public Computer(MusicPlayer musicPlayer) {
        this.id = 1;
        this.musicPlayer = musicPlayer;
    }
    
    @Override
    public String toString() {
        Random random = new Random();
        return "Computer " + id + " " + musicPlayer.playMusic(random.nextBoolean() ? Janr.CLASSICAL : Janr.ROCK);
    }
}
