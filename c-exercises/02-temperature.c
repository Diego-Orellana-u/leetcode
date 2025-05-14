#include <stdio.h>

main()
{
  float fahr, celsius;
  int lower, upper, step;
  int c;

  c = getchar();

  lower = 0;
  upper = 300;
  step = 20;

  fahr = upper;
  printf("%s \n", "List of temperatures");
  while (fahr >= lower){
    celsius = (5.0/9.0) * (fahr-32.0);
    printf("%3.0f %6.1f %c\n", fahr, celsius, c);
    fahr = fahr - step;
  }
}