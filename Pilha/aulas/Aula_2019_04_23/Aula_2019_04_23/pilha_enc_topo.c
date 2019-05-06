//#include <malloc.h>
#include <stdio.h>
#include <stdlib.h>
#include "pilha.h"

typedef struct no{
	int valor;
	struct no *prox;
}No;

struct pilha{
   No *topo;
};

Pilha* criar(){
   Pilha *p = (Pilha*) malloc(sizeof(struct pilha));
   p->topo = NULL;
   return p;
}

void inserir(Pilha *p, int valor){
	No *n= (No*) malloc(sizeof(struct no));
    n->valor = valor;
    n->prox = p->topo;
    p->topo =  n;
}

int vazia(Pilha *p){
   if(p->topo == NULL) return 1;
   else return 0; 
}

int remover(Pilha *p){
   if(!vazia(p)){
      int valor=p->topo->valor;
      No *temp = p->topo;
      p->topo = p->topo->prox;
      free(temp);
      return(valor);
   }else{
     printf("A pilha está vazia");
     exit(1);
   }
}


int cheia(Pilha *p){
    return 0;
}

void imprimir(Pilha *p){
    printf("%d", p->topo->valor);
}

void liberar(Pilha *p){
  free(p);
}
