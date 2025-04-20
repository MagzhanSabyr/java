import java.util.Arrays;

public class Main{
    public static void main(String[] args) {
        String a = "Hello123123there123213hey123213afdlj";
        String[] words = a.split("\\d+");
        System.out.println(Arrays.toString(words));
        
        String b = "Hello123123there123213hey123213a";
        String modifiedString = b.replaceAll("\\d+", "-");
        String modifiedString2 = b.replaceFirst("\\d+", "-");
        System.out.println(modifiedString);
        System.out.println(modifiedString2);
    
        
    }
}