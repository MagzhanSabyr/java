package org.example;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import java.util.List;

@Configuration
@ComponentScan("org.example")
@PropertySource("classpath:musicPlayer.properties")
public class SpringConfig{
    @Bean
    public ClassicalMusic classicalMusic() {
        return new ClassicalMusic();
    }
    
    @Bean
    public RockMusic rockMusic() {
        return new RockMusic();
    }
    
    @Bean
    public JazzMusic jazzMusic() {
        return new JazzMusic();
    }
    
    @Bean
    public MusicPlayer musicPlayer() {
        return new MusicPlayer(List.of(classicalMusic(), jazzMusic(), rockMusic()));
    }
    
    @Bean
    public Computer computer(){
        return new Computer(musicPlayer());
    }
    
}
