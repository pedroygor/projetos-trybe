#include <malloc.h>
#include <stdio.h>
#include <stdlib.h>
#include "pilha.h"
#define N 20

struct pilha{
   int v[N];
   int topo;
};

Pilha* criar_pilha(){
   Pilha *p = (Pilha*) malloc(sizeof(Pilha));
   p->topo = -1;
    return(p);
}

int cheia_pilha(Pilha *p){
   if(p->topo == N-1) return 1;
   else return(0);
}

void inserir_pilha(Pilha *p, int valor){
   if(p->topo == N-1) printf("A pilha está cheia");
   else{
      p->topo = p->topo+1;
      p->v[p->topo] = valor;
   }
}

int vazia_pilha(Pilha *p){
  if(p->topo ==-1) return 1;
  else return 0;
}

int remover_pilha(Pilha *p){
   int valor;
   if(vazia_pilha(p)){ printf("A pilha está vazia, não é possivel fazer remoção");
    exit(1);
   }
   valor = p-> v[p->topo];
   p->topo = p->topo-1;
   return(valor); 
}

void imprimir_pilha(Pilha *p){
  printf("\nO elemento é  %d",p->v[p->topo]);
}

void liberar_pilha(Pilha *p){
  free(p);
}
