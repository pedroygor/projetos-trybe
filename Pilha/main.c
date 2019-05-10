#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include "pilha.h"
int main(){
   int i, j, aux = 0;
    srand( (unsigned)time(NULL) );
    Pilha *p1, *p2;
    p1 = criar();

//Inserindo elementos na pilha 1
do
{
    printf("Digite o valor desejado\n");
    scanf("%d", &aux);
    inserir(p1, aux);

    printf("Digite o valor desejado\n");
    scanf("%d", &aux);
    inserir(p2, aux); 
       
} while (p1 < 5 && p2 < 5);
getchar();


}
    