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
        MusicPlayer player2 = (MusicPlayer) context.getBean("musicPlayer1", MusicPlayer.class);
        
        boolean temp = player == player2;
        
        System.out.println(temp);
        System.out.println(player);
        System.out.println(player2);
        
        player2.setVolume(74);
        
        System.out.println(player.getVolume());
        System.out.println(player2.getVolume());
        
        context.close();


    }
}
