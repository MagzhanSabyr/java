public class Multidimensional_arrays {
    public static void main(String[] args ){
        /*int[] number = {1,2,3};
        System.out.println(number[1]);*/

        /**
         *
         * 1,2,3,4,5,0,-1,-2,   // одномерный
         *
         * 156                  // двухмерный
         * 376 [1][1]
         * 268
         *
         *
         */

        /*int[][] matrice = { {1,2,3},
                            {4,5,6},
                            {7,8,9}};
        System.out.println(matrice[2][2]);
        System.out.println(matrice[1][0]);*/

/*
        String[][] strings = new String[2][3];
        strings[0][1] = "Привет";

        System.out.println(strings[0][1]);
*/

        int[] number = {1,2,3};

        int[][] matrice = { {1,2,3},
                            {4,5,6},
                            {7,8,9}};

        for(int i=0; i<matrice.length; i++){
            for(int j = 0; j < matrice[i].length; j++){
                System.out.print(matrice[i][j] + " ");
            }
            System.out.println();
        }





    }



}
