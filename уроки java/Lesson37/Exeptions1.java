import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;

public class Exeptions1{
    public static void main(String[] args){
//        File file = new File ("Test.txt");
//        try {
//            Scanner scanner = new Scanner(file);
//
//            System.out.println("После Scanner'a");
//        } catch (FileNotFoundException e) {
////            throw new RuntimeException(e);;
////            e.printStackTrace();
//            System.out.println("Файл не найден");
//        }
//
//        System.out.println("После блока try catch");
        try {
            readFile();
        } catch (FileNotFoundException e) {
            System.out.println("Обработка исключения в методе main.");
        }

    }

    public static void readFile() throws FileNotFoundException {
        File file = new File("Test");
        Scanner scanner = new Scanner(file);
    }





}
