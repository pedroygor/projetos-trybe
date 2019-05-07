//#include <malloc.h>
#include <stdio.h>
#include <stdlib.h>
#include "pilha.h"

typedef struct no{
	Peca *pec;
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

void inserir(Pilha *p, Peca *pe){
	   No *n= (No*) malloc(sizeof(struct no));
       n->pec = pe;
      // falta atualizar o defeito
      n->prox = p->topo;
      p->topo =  n;
}

int vazia(Pilha *p){
   if(p->topo == NULL) return 1;
   else return 0; 
}

Peca* remover(Pilha *p){
   if(!vazia(p)){
      No *temp = p->topo;
      p->topo = p->topo->prox;
      return(temp->pec);
   }else{
     printf("A pilha está vazia");
     exit(1);
   }
}


int cheia(Pilha *p){
    return 0;
}

void imprimir(Pilha *p){
    printf(" %c", p->topo->pec->nome);
    if(p->topo->pec->defeito) printf("\nTem defeito");
    else printf("\nNão tem defeito");
}

void liberar(Pilha *p){
  free(p);
}
