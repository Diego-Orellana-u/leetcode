#include <stdio.h>

main()
{
  long nc;

  nc = 0;
  while(getchar() != EOF)
  {
    ++nc;
  }
  printf("%3ld\n",nc - 1);
}