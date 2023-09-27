import java.sql.SQLOutput;
import java.util.HashMap;

public class test{
    public static void main(String[] args) {


        HashMap<String, String> contacts = new HashMap<String, String>();

        contacts.put("Антон", "+7(727)293-70-58");
        contacts.put("Одногруппник Магжантон", "+7(727)355-41-26");
        contacts.put("Апашка", "+7(727)224-21-11");
        contacts.put("Сантехник Антон", "+7(727)292-90-94");

        HashMap<String, String> result = searchPhonebook(contacts, "тон");

        for (String key : result.keySet())
            System.out.println(key + " " + result.get(key));

// Напечатает ↓
// Антон +7(727)293-70-58
// Сантехник Антон +7(727)292-90-94
    }

    /*{public static int[] findDuplicates(int[] array) {
        // Написать решение сюда ↓
        for(int i=0;i<array.length;i++){
            for(int j=0;j<array.length;j++){
                if(array[i]<array[j]){
                    int temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
        int n=0;
        for(int i=0;i< array.length-1;i++){
            int temp=0;
            for(int j = i+1; j< array.length;j++){
                if(array[i]==array[j]){
                    i=j;
                    temp=array[j];
                }
            }
            if(temp==array[i]){n++;}
        }

        int arr[] = new int[n];

        n=0;
        for(int i=0;i< array.length-1;i++){
            int temp=0;
            for(int j = i+1; j< array.length;j++){
                if(array[i]==array[j]){
                    i=j;
                    temp=array[j];
                }
            }
            if(temp==array[i]){
                arr[n] = temp;
                n++;
            }
        }

        return arr;
    }}*/

    /*        HashMap<String, Double> mapCopy = new HashMap<String,Double>();
        mapCopy = (HashMap<String, Double>) map.clone();
        System.out.println(mapCopy);
        System.out.println(map.containsValue(426.5));

        System.out.println(map);

        int array[] = new int[]{1,2,3};

        System.out.println(array.length);

        int n=0;
        for(int i=0;i< array.length;i++){
            int temp = 0;
            for(int j = 0; j< array.length;j++){
                if(array[j]==array[i]){temp++;}
            }
            if(temp==1){n++;}
        }
        System.out.println(n);

        int arr[] = new int[n];

        n=0;
        for(int i=0;i< array.length;i++){
            int temp = 0;
            for(int j = 0; j< array.length;j++){
                if(array[j]==array[i]){temp++;}
            }
            if(temp==1){
                arr[n] = array[i];
                n++;
            }
        }

        for(int i=0;i<arr.length;i++){
            System.out.println(arr[i]);
        }
*/

    public static HashMap<String, String> searchPhonebook(HashMap<String, String> phonebook, String value) {
        // Написать решение сюда ↓

        HashMap<String, String> hashmap = new HashMap<String, String>();
        System.out.println(phonebook.get(value));

        for(String s : phonebook.keySet()){
            if(s.contains(value)){
                hashmap.put(s,phonebook.get(s));
            }
        }
        return hashmap;

    }
    public static void set(HashMap<String, String> map, String key, String value) {
        // Написать решение сюда ↓


    }

    public static String get(HashMap<String, String> map, String key) {
        // Написать решение сюда ↓
        return map.get(key);
    }

    public static int[] toArray(Node node) {
        // Написать решение сюда ↓
        int s=0;
        for(Node tmp=node;tmp!=null;tmp=tmp.next){
            s++;
        }
        int[] numbers = new int[s];
        s=0;
        for(Node tmp=node;tmp!=null;tmp=tmp.next){
            numbers[s] = tmp.data;
            s++;
        }
        return numbers;
    }
    public static Node removeByIndex(Node node, int index) {
        // Написать решение сюда ↓
        int i=0;
        if(node == null){return null;}
        for(Node tmp=node;tmp!=null;tmp=tmp.next){
            if(i==index){
                if(node.next==null){ return null;}
                if(tmp.next==null){ return node;}
                tmp.data = tmp.next.data;
                if(tmp.next.next!=null){
                    tmp.next = tmp.next.next;
                }else{
                    tmp.next=null;
                }
            }
            if(tmp.next!=null){
                if(i+1==index && tmp.next.next==null){
                    tmp.next=null;
                }
            }
            i++;
        }

        return node;
    }

    public static Node addLast(Node node, int newData) {
        // Написать решение сюда ↓
        Node newdata = new Node(newData);
        for(Node tmp=node; tmp!=null; tmp=tmp.next){
            if(tmp.next == null){
                tmp.next = newdata;
                return node;
            }
        }
        return newdata;
    }
        // Написать решение сюда ↓

    public static boolean isAnagram(char[] str1, char[] str2) {
        // Написать решение сюда ↓
        if(str1.length != str2.length){return false;}
        if(str1.length == 0 || str2.length == 0 ){return false;}
        for(int i=0;i<str1.length;i++){
            for(int j=0;j<str1.length;j++){
                if(str1[i]<str1[j]){
                    char temp = str1[i];
                    str1[i] = str1[j];
                    str1[j] = temp;
                }
                if(str2[i]<str2[j]){
                    char temp = str2[i];
                    str2[i] = str2[j];
                    str2[j] = temp;
                }
            }
            if(str1[i]!=str2[i]){return false;}
        }
        return true;
    }

    public static String hashPass(String password) {
        int code = password.hashCode();
        System.out.println(code);
        String hashed = Integer.toString(code);
        System.out.println(hashed);
        return hashed;
    }

    public static String allowedChars = "01";

    public static String bruteforcePass1(String hashedPass) {
        String s ="";
        String str="";
        for (int i = 0; i < 100000; i++) {
            s = Integer.toString(i);

            while(s.length() < 5){
                int code = s.hashCode();
                str = Integer.toString(code);
                if(str.hashCode() == hashedPass.hashCode()){
                    return str = Integer.toString(i);
                }
                s = "0" + s;
            }
        }

        str = "";
        return s;
    }

    public static boolean isWhitespace(char c) {
        // Написать решение сюда ↓
        if(c==9){return true;}
        return c==32?true:false;
    }

    public static boolean isUpper(char c) {
        // Написать решение сюда ↓
        if(c>64 && c<91){return true;}
        return false;
    }

    public static boolean isLower(char c) {
        // Написать решение сюда ↓
        if(c>96 && c<123){return true;}
        return false;
    }

    public static boolean isNumeric(char c) {
        // Написать решение сюда ↓
        if(c>47 && c<58){return true;}
        return false;
    }

    public static boolean isLetter(char c) {
        // Написать решение сюда ↓
        if((c>64 && c<91)||(c>96 && c<123)){return true;}
        return false;
    }

    public static boolean isLetterOrDigit(char c) {
        // Написать решение сюда ↓
        if((c>64 && c<91)||(c>96 && c<123)||(c>47 && c<58)){return true;}
        return false;
    }

    public static int strlen(char[] word) {
        // Написать решение сюда ↓
        return word.length;
    }

    public static void printAlphabet() {
        // Написать решение сюда ↓
        for(char i='a';i<'z';i++){
            System.out.print(i);
        }
    }

    public static void printReverseAlphabet() {
        // Написать решение сюда ↓
        for(char i='z';i>='a';i--){
            System.out.print(i);
        }
    }

    public static int findChar(char[] str, char c) {
        // Написать решение сюда ↓
        for(int i=0;i<str.length; i++){
            if(str[i] == c){return i;}
        }
        return -1;
    }

    public static void toLowerCase(char[] str) {
        // Написать решение сюда ↓
        for(int i=0;i<str.length;i++){
            if(str[i]>64 && str[i]<91){
                str[i] = (char) (str[i]+' ');
            }
        }
    }

    public static char[] concat(char[] str1, char[] str2) {
        // Написать решение сюда ↓
        char[] temp = new char[str1.length + str2.length];
        for(int i=0;i<temp.length;i++){
            if(i<str1.length){
                temp[i] = str1[i];
            }else{
                temp[i] = str2[i-str1.length];
            }
        }
        return temp;
    }

    public static boolean contains(char[] str, char[] substr) {
        // Написать решение сюда ↓
        int k = 0;
        for(int i=0; i<str.length; i++){
            if(str[i] == substr[0] && (i+substr.length) < str.length){
                k=1;
                for(int j=1; j<substr.length;j++){
                    if(str[i+j] == substr[j] ){k++;}
                }
            }
            if(k==substr.length || substr.length == 0){return true;}
        }
        return false;
    }

    public static int parseInt(char[] str) {
        // Написать решение сюда ↓
        int num = 0;
        int max = 1;
        int sum = 0;
        for(int i=str.length-1; i>=0; i--){
            if(i==0 && str[0] == '-'){return -sum;}
            num = str[i]-48;
            num = num*max;
            max*=10;
            sum +=num;
        }
        return sum;
    }

//    public static boolean isAnagram(char[] str1, char[] str2) {
//        // Написать решение сюда ↓
//        if(str1.length != str2.length){return false;}
//        if(str1.length == 0 || str2.length == 0 ){return false;}
//        for(int i=0;i<str1.length;i++){
//            for(int j=0;j<str1.length;j++){
//                if(str1[i]<str1[j]){
//                    char temp = str1[i];
//                    str1[i] = str1[j];
//                    str1[j] = temp;
//                }
//                if(str2[i]<str2[j]){
//                    char temp = str2[i];
//                    str2[i] = str2[j];
//                    str2[j] = temp;
//                }
//            }
//        }
//        for(int i=0;i<str1.length;i++){
//            if(str1[i]!=str2[i]){return false;}
//        }
//        return true;
//    }

    public static boolean isPalindrome(char[] str1) {
        // Написать решение сюда ↓
        for(int i=0;i<str1.length;i++){
            if(str1[i]!=str1[str1.length-1-i]){return false;}
        }
        return true;
    }



}