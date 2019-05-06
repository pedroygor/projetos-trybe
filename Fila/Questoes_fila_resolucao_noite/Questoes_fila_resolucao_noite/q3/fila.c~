#include <malloc.h>
#include <stdio.h>
#include <stdlib.h>
#include "fila.h"
#include "pilha.h"

struct fila{
   Pilha *p;
   Pilha *p_aux;
};

Fila* criar(Pilha *p1, Pilha *p2){
   Fila *f = (Fila*) malloc(sizeof(Fila));
   f->p = p1;
   f->p_aux = p2;
}

int cheia(Fila *f){
   if(cheia_pilha(f->p)) return 1;
   else return(0);
}

void inserir(Fila *f, int valor){
   if(cheia_pilha(f->p)) printf("A fila está cheia");
   else{
      inserir_pilha(f->p, valor);
   }
}

int vazia(Fila *f){
  if(vazia_pilha(f->p)) return 1;
  else return 0;
}

int remover(Fila *f){
   if(vazia_pilha(f->p)){
     printf("A fila está vazia");
     exit(1);
   }
   // retirando os elementos da pilha p
   while(!vazia_pilha(f->p)){
        inserir_pilha(f->p_aux, remover_pilha(f->p));
   }

   // removendo o elemento
   int valor = remover_pilha(f->p_aux); 

   // inserindo os elementos na pilha p
   while(!vazia_pilha(f->p_aux)){
        inserir_pilha(f->p, remover_pilha(f->p_aux));
   }

  return(valor);

}

void imprimir(Fila *f){
  if(!vazia_pilha(f->p)){ 
    // retirando os elementos da pilha p
    while(!vazia_pilha(f->p)){
         inserir_pilha(f->p_aux, remover_pilha(f->p));
    }

    // capturando o elemento do topo da pilha auxiliar (primeiro da fila)
    imprimir_pilha(f->p_aux); 

    // inserindo os elementos de volta na pilha p
    while(!vazia_pilha(f->p_aux)){
         inserir_pilha(f->p, remover_pilha(f->p_aux));
    }
  }else printf("A Fila está vazia");
}

void liberar(Fila *f){
  free(f);
}
