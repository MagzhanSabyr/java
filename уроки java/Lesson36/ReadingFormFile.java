import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.Scanner;

public class ReadingFormFile {
    public static void main(String[] args) throws FileNotFoundException {

//        String separator = File.separator;
//        String path = "C:"+separator+"Users"+separator+"m.sabyr"+separator+"Desktop" + separator +
//        "уроки java"+separator+"Lesson36"+separator+"test.txt";
        File file = new File("test.txt");

        Scanner scanner = new Scanner(file);
//        while(scanner.hasNextLine()){
//            System.out.println(scanner.nextLine());
//        }
        String line = scanner.nextLine();
        String[] numbersString = line.split(" ");
        int[] numbers = new int[18];
        int counter = 0;


        for(String number : numbersString){
            numbers[counter++] =  Integer.parseInt(number);

        }

        System.out.println(Arrays.toString(numbers));

        scanner.close();
    }
}
