import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> animals = new ArrayList<>();
        animals.add("Dog");
        animals.add("Cat");
        animals.add("Tiger");
        animals.add("Bird");

        Collections.sort(animals);
        System.out.println(animals);

        List<Integer> numbers = new ArrayList<>();
        numbers.add(1);
        numbers.add(500);
        numbers.add(2);
        numbers.add(455);
        Collections.sort(numbers);
        System.out.println(numbers);

    }
}

class StringLenghtComparator implements Comparator<String> {

    @Override
    public int compare(String o1, String o2) {
        return 0;
    }



}

