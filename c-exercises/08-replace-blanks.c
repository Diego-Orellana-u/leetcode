#include <stdio.h>

main() {
    int c;
    int in_blank = 0;     

    while ((c = getchar()) != EOF) {
        if (c == ' ') {
            if (!in_blank) {
                putchar(c);   
                in_blank = 1;
            }
        } else {
            putchar(c);     
            in_blank = 0;   
    }
  }
    return 0;
}