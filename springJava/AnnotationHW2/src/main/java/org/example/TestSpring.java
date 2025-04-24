package org.example;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestSpring {
    public static void main(String[] args) {
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(SpringConfig.class);
        
        
        
        MusicPlayer musicPlayer = (MusicPlayer) context.getBean("musicPlayer", MusicPlayer.class);
        
        System.out.println(musicPlayer.getName());
        System.out.println(musicPlayer.getVolume());
        
        ClassicalMusic classicMusic1 = (ClassicalMusic) context.getBean("classicalMusic", ClassicalMusic.class);
        
        
        Computer computer = (Computer) context.getBean("computer", Computer.class);
        
        for (int i = 0; i < 10 ; i++) {
            try {
                Thread.sleep(2000);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            System.out.println(computer);
            
        }
        
        context.close();


    }
}
