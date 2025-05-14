#include <stdio.h>

main()
{
  float celcius, fahr;
  int lower, upper, step;

  lower = 0;
  upper = 180;
  step = 20;

  while(celcius <= upper){
    fahr = (celcius * 9.0/5.0) + 32;
    printf("%3.0f %6.0f \n", celcius, fahr);
    celcius = celcius + step;
  }

}