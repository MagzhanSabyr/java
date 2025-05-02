package maven.example.com.controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/first")
public class FirstController{
    
    
    //    @GetMapping("/hello")
//    public String helloPage(HttpServletRequest request){
//        String name = request.getParameter("name");
//        String surname = request.getParameter("surname");
    @GetMapping("/hello")
    public String helloPage(@RequestParam(value = "name", required = false) String name,
                            @RequestParam(value = "surname", required = false) String surname,
                            Model model) {
        
        System.out.println("Hello " + name + " " + surname + "");
        model.addAttribute("message", "Hello " + name + " " + surname + "");
        
        
        return "first/hello";
    }
    
    @GetMapping("/goodbye")
    public String goodByePage() {
        return "first/goodbye";
    }
    
    @GetMapping("/calculator")
    public String calculatorPage(@RequestParam(value = "a", required = false) double a,
                                 @RequestParam(value = "b", required = false) double b,
                                 @RequestParam(value = "action", required = false) String action,
                                 Model model) {
        double total = 0 ;
        if (action != null) {
            if (action.equals("addition")) {
                total = a + b;
            }else if (action.equals("division")) {
                total = a / b;
            }else if (action.equals("multiplication")) {
                total = a * b;
            }else if (action.equals("subtraction")) {
                total = a - b;
            }
        }
        model.addAttribute("message", "total = "+ total);
        
        
        return "first/calculator";
    }
    
}
