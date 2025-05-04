package maven.example.com.dao;

import maven.example.com.models.Person;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class PersonDAO{

    private static int PEOPLE_COUNT;
    private List<Person> people;
    
    {
        people = new ArrayList<>();
        
        people.add(new Person(++PEOPLE_COUNT, "Ivan"));
        people.add(new Person(++PEOPLE_COUNT, "Petr"));
        people.add(new Person(++PEOPLE_COUNT, "Vasya"));
        people.add(new Person(++PEOPLE_COUNT, "Oleg"));
    }

    public List<Person> index(){
        return people;
    }
    
    public Person show(int id){
        return people.stream().filter(p -> p.getId() == id).findAny().orElse(null);
    }

    public void save(Person person){
        person.setId(++PEOPLE_COUNT);
        people.add(person);
    }

}
