/*
public class Lesson24 {
    public static void main(String[] args) {
        String string = "Hello";
        System.out.println(string);
    }


}
*/

public class Lesson24{
    public static void main(String[] args) {
        Human h1 = new Human("Bob",40);
        h1.toString();
        System.out.println(h1.toString());
    }
}

class Human {
    private String name;
    private int age ;

    public Human(String name , int age){
        this.name = name;
        this.age  = age;

    }
    public String toString(){
        return "" + name + ", " + age;
    }



}