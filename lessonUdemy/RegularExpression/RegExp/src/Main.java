public class Main{
    public static void main(String[] args) {
    
        /*
        *   \\d - одна цифра
            \\w - одна буква
            \\w = [a-zA-Z]
            + - 1 или более
            * - 0 или более
            ? - 0 или 1 символов до
            
            ( x|y|z ) - одна строка из множество строк
            (a|s|d|f|g|h|j|k|l) = [asdfghjkl]
            [a-zA-Z] - все английские буквы
            [0-9] - \\d
            [^abc] - мы хотим все символы кроме [abc]
            . - Любой символ
            
            {2} - два символа до (\\d{2})
            {2, } - два и более символа (\\d{2, })
            {2,4} - от 2 до 4 символов (\\d{2,4})
            
        * */
    
        String a = "1213";
        String b = "-1213";
        String c = "+1213";
        System.out.println(a.matches("(-|\\+)?\\d*"));
        System.out.println(b.matches("(-|\\+)?\\d*"));
        System.out.println(c.matches("(-|\\+)?\\d*"));
        String d = "f1234123";
        System.out.println(d.matches("[a-zA-Z]+\\d*"));
        String e = "Hello";
        System.out.println(e.matches("[^abc]*"));
        String url = "http://www.google.com";
        String url2 = "http://www.yandex.ru";
        System.out.println(url.matches("http://www\\..+\\.(com|ru)"));
        System.out.println(url2.matches("http://www\\..+\\.(com|ru)"));
        
        String f = "11123213";
        System.out.println(f.matches("\\d{2,}"));
        
        
    }
}