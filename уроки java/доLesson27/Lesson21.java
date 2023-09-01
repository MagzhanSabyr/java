/*
public class Lesson21 {
    public static void main(String[] args) {
*/
/*
        Human h1 = new Human ("Bob" , 40);
        Human h2 = new Human("Tom", 30);
        Human.description = "Nice";
        h1.getAllFields();
        h2.getAllFields();
        Human.description = "Bad";
        h1.getAllFields();
        h2.getAllFields();
*//*

        Human h1 = new Human ("Bob" , 40);
        Human h2 = new Human("Tom", 30);

        h1.printNumberOfPeople();
        h2.printNumberOfPeople();

        Human h3 = new Human("Rob" , 50);

        h1.printNumberOfPeople();
        h2.printNumberOfPeople();
        h3.printNumberOfPeople();


    }



}



class Human{
    private String name ;
    private int age;
    public static String description;
    private static int countPeople;



    public Human(String name, int age) {
        System.out.println("Привет из третьего конструктора");
        this.name = name ;
        this.age = age;
        countPeople++;
    }

    public void setName(String name) {this.name = name;    }
    public void setAge(int age ) { this.age = age ;}

    */
/*public void getAllFields(){
        System.out.println(name + "," + age+ "," + description);
    }
    public static void getDescription(){
        System.out.println(description);
    }*//*

    public void printNumberOfPeople(){
        System.out.println(" Number of people is " + countPeople );
    }



}
*/
