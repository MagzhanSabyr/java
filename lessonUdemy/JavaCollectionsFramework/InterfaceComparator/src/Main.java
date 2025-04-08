import java.util.*;

public class Main {
    public static void main(String[] args) {
        List<Person> people = new ArrayList<>();
        people.add( new Person(3, "Bob"));
        people.add( new Person(2, "Alice"));
        people.add( new Person(1, "Kate"));

        Collections.sort(people, new Comparator<Person>() {
            @Override
            public int compare(Person o1, Person o2) {
                if(o1.getId() > o2.getId()) {
                    return 1;
                }else if(o1.getId() < o2.getId()) {
                    return -1;
                }else{
                     return 0;
                }
            }
        });
        System.out.println(people.toString());



        List<String> animals = new ArrayList<>();

        animals.add("Horse");
        animals.add("Dog");
        animals.add("Cat");
        animals.add("Tiger");
        animals.add("Chicken");
        animals.add("F");

        Collections.sort(animals,  new StringLengthComparator());
        System.out.println(animals);

        List<Integer> numbers = new ArrayList<>();
        numbers.add(5);
        numbers.add(2);
        numbers.add(500);
        numbers.add(100);

        Collections.sort(numbers, new BackwardsIntegerComparator());
        System.out.println(numbers);




    }
}

class StringLengthComparator implements Comparator<String> {

    @Override
    public int compare(String o1, String o2) {
        /*
        * o1 > o2 => 1
        * o1 < o2 => -1
        * o1 == o2 => 0
        * compare(2,1) => 1
        * compare(1,2) => -1
        * compare(1,1) => 0
        * */
        if (o1.length() > o2.length()) {
            return 1;
        }else if (o1.length() < o2.length()) {
            return -1;
        }else{
            return 0;
        }
    }
}

class BackwardsIntegerComparator implements Comparator<Integer> {

    @Override
    public int compare(Integer o1, Integer o2) {
        if (o1.intValue() < o2.intValue()) {
            return 1;
        }else if (o1.intValue() > o2.intValue()) {
            return -1;
        }else {
            return 0;
        }
    }
}

class Person {
    private int id;
    private String name;

    public Person(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Person{" +
                "name='" + name + '\'' +
                ", id=" + id +
                '}';
    }
}
