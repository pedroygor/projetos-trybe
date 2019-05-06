#include <stdio.h>
#include "mypilha.h"
int main(){
    Pilha *p1;
    char sair;
    int valor, i, j = 0;
    p1 = create();
   /* do
    {   
        printf("Insira o valor\n");
        scanf("%d", &valor);
        push(p1, valor);

        printf("Deseja encerrar a leitura a inserção nas pilhas (S/N)?\n");
        scanf(" %c", &sair);
    } while (sair != 'S' && sair != 's');*/
    push(p1, 3);
    push(p1, 4);
    push(p1, 5);
    push(p1, 6);
    
    display(p1);
    
    
    
    /*while(!empty(p1)){
        j = pop(p1);
        printf("Valor é %d\n", j);
    }*/
    release(p1);
    return 0;
}  