import java.util.LinkedList;
import java.util.Queue;
import java.util.concurrent.ArrayBlockingQueue;

public class Main {
    public static void main(String[] args) {
        Person person1 = new Person(1);
        Person person2 = new Person(2);
        Person person3 = new Person(3);
        Person person4 = new Person(4);

//        Queue<Person> people = new LinkedList<>();
//        people.add(person3);
//        people.add(person2);
//        people.add(person4);
//        people.add(person1);
//
//        // person 3, person 2, person 4, person 1
//
//        for (Person person : people) {
//            System.out.println(person);
//        }
       Queue<Person> people = new ArrayBlockingQueue<Person>(3);
//        people.add(person3);
//        people.add(person2);
//        people.add(person4);
//        people.add(person1);

//        System.out.println(people.remove());
//        System.out.println(people.peek());
//        System.out.println(people);

        System.out.println(people.offer(person3));
        System.out.println(people.offer(person2));
        System.out.println(people.offer(person4));
        System.out.println(people.offer(person1));

    }
}

class Person{
    private int id;

    public Person(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Person{" +
                "id=" + id +
                '}';
    }
}