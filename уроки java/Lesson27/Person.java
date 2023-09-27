import java.io.Serial;
import java.io.Serializable;

public class Person implements Serializable {

    @Serial
    private static final long serialVersionUID = 5610619647711818652L;
    private transient int id;
    private String personName;
    private int age;
    private byte type;

    public Person(int id , String name){
        this.id = id;
        this.personName = name;

    }

    public int getId(){
        return id;
    }

    public String getName(){
        return personName;
    }

    public String toString(){
        return id + " " + personName;
    }




}
