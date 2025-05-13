#include <stdio.h>

main()
{
  int c;
  while((c = getchar())!= EOF)
  {
    putchar(c);
      printf("%3d %6d\n",getchar() != EOF, EOF);
  }

  printf("%3d %6d\n",getchar() != EOF, EOF);
}