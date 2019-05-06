#include <stdio.h>

#include "fila.h"
#include "pilha.h"

int main(){
  int opc=0;
  int valor=0;
  Fila *f;
  Pilha *p1;
  Pilha *p2;
  do{
      printf("a");
	printf("Digite a opção desejada: \n 1- Criar Fila \n2- Inserir \n 3- Remover \n 4- Imprimir \n5- Verificar se a fila está vazia \n 6- sair");    
    	scanf("%d", &opc);
	
	switch(opc){
	  case 1:              
              p1 = criar_pilha();
              p2 = criar_pilha();
              f = criar(p1,p2);
	      break;
	  case 2:
    	      printf("Digite o valor a ser inserido na fila");
 	      scanf("%d", &valor);             
    	      inserir(f, valor);
 	      break;
	  case 3:
              valor = remover(f);
	      printf("O valor removido foi %d", valor);
	      break;
	  case 4:
              imprimir(f);		
              break;
	  case 5:
	      if(vazia(f)) printf("A fila está vazia");
  		  else printf("A fila não está vazia");
	      break;
	  case 6:
              liberar(f);
              printf("Programa encerrado com sucesso");
  	      break;
          default: printf("Opção Inválida");
	}
  }while(opc != 6);
  return(0);
}
