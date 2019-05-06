#include <stdio.h>
#include "deque.h"

int main(){
  int valor;
  Deque *d;
  d = criar();
  int opc = 5;
  do{
  printf("Digite a opção 1- Inserir inicio, 2- Inserir no final, 3-remover no inicio, 4- remover no final, 5- sair");
  scanf("%d", &opc);

  switch(opc){
    case 1: 
       printf("Digite o valor a ser inserido");
       scanf("%d", &valor);
       inserir_inicio(d, valor);
       break;

    case 2: 
       printf("Digite o valor a ser inserido");
       scanf("%d", &valor);
       inserir_final(d, valor);
       break;

    case 3: 
       valor = remover_inicio(d);
       printf("valor %d foi removido", valor);
       break;

    case 4: 
       valor = remover_final(d);
       printf("valor %d foi removido", valor);
       break;
    case 5: 
      printf("Saida do sistema");
  }
  }while(opc!=5);

  liberar(d);

  return(0);
}
