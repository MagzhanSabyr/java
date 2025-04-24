package org.example;

import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Component
public class RockMusic implements Music {
    private List<String> rockMusicList;
    
    public RockMusic() {
        rockMusicList = Arrays.asList(
                "Nirvana — Smells Like Teen Spirit",
                "Queen — We Will Rock You",
                "AC/DC — Thunderstruck"
        );
    }
    
    @Override
    public String getSong() {
        Random random = new Random();
        return rockMusicList.get(random.nextInt(rockMusicList.size()));
    }
    
}
