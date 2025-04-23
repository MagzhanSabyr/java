package org.example;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class TestSpring {
    public static void main(String[] args) {
        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext(
                "applicationContext.xml"
        );
        
//        Music music = (Music) context.getBean("musicBean", Music.class);
//
//        MusicPlayer musicPlayer = new MusicPlayer(music);
        
        MusicPlayer player = (MusicPlayer) context.getBean("musicPlayer1", MusicPlayer.class);
        player.playMusic();
        
        System.out.println(player.getName());
        System.out.println(player.getVolume());
        MusicPlayer player2 = (MusicPlayer) context.getBean("musicPlayer2", MusicPlayer.class);
        player2.playMusic();
        
        System.out.println(player2.getName());
        System.out.println(player2.getVolume());
        MusicPlayer player3 = (MusicPlayer) context.getBean("musicPlayer3", MusicPlayer.class);
        player3.playMusic();
        
        System.out.println(player3.getName());
        System.out.println(player3.getVolume());
        
        
        context.close();


    }
}
