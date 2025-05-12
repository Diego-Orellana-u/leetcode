#include <stdio.h>

main()
{
  int c;
  while((c = getchar())!= EOF)
  {
    putchar(c);
    printf("%3d\n",getchar() != EOF);
  }

  printf("%3d\n",getchar() != EOF);
}