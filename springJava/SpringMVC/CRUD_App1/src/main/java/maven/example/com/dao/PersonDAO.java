package maven.example.com.dao;

import maven.example.com.models.Person;
import org.springframework.stereotype.Component;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

@Component
public class PersonDAO{
    
    private static int PEOPLE_COUNT;
    
    private static final String URL = "jdbc:postgresql://localhost:5432/first_db";
    private static final String USERNAME = "postgres";
    private static final String PASSWORD = "postgres";
    
    private static Connection connection;
    
    static {
        try {
            Class.forName("org.postgresql.Driver");
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
        
        try {
            connection = DriverManager.getConnection(URL, USERNAME, PASSWORD);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
    
    
    
    
    
//    {
//        people = new ArrayList<>();
//
//        people.add(new Person(++PEOPLE_COUNT, "Tom", 24, "tom@mail.ru"));
//        people.add(new Person(++PEOPLE_COUNT, "Bob", 52, "bob@mail.ru"));
//        people.add(new Person(++PEOPLE_COUNT, "Mike", 18, "mike@yahoo.com"));
//        people.add(new Person(++PEOPLE_COUNT, "Katy", 34, "katy@gmail.com"));
//    }
    
    public List<Person> index() {
        List<Person> people = new ArrayList<>();
        
        try {
            Statement statement = connection.createStatement();
            String SQL = "SELECT * FROM person";
            ResultSet resultSet = statement.executeQuery(SQL);
            
            while(resultSet.next()){
                people.add(new Person(resultSet.getInt("id"), resultSet.getString("name"), resultSet.getInt("age"), resultSet.getString("email")));
            }
            
            return people;
            
            
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
        
    }
    
    public Person show(int id) {
        return null;
        //return people.stream().filter(person -> person.getId() == id).findAny().orElse(null);
    }
    
    public void save(Person person) {
    
//        person.setId(++PEOPLE_COUNT);
//        people.add(person);
        
        try {
            Statement statement = connection.createStatement();
            String SQL = "INSERT INTO person VALUES ("+1+",'"
                                 +person.getName()+"',"+person.getAge()+",'"+person.getEmail()+"')";
            
            statement.executeUpdate(SQL);
            
            
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
    
    public void update(int id, Person updatedPerson) {
//        Person personToBeUpdated = show(id);
//
//        personToBeUpdated.setName(updatedPerson.getName());
//        personToBeUpdated.setAge(updatedPerson.getAge());
//        personToBeUpdated.setEmail(updatedPerson.getEmail());
    }
    
    public void delete(int id) {
        //people.removeIf(p -> p.getId() == id);
    }
    
    

}
