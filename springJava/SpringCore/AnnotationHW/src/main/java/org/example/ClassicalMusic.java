package org.example;

import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Component
public class ClassicalMusic implements Music {
    private List<String> classicalMusicList ;
    
    public ClassicalMusic() {
        classicalMusicList = Arrays.asList(
                "Бетховен — Лунная соната",
                "Моцарт — Симфония №40",
                "Чайковский — Лебединое озеро"
        );
    }
    
    @Override
    public String getSong() {
        Random random = new Random();
        return classicalMusicList.get(random.nextInt(classicalMusicList.size()));
    }
}
