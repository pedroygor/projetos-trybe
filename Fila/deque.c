#include <malloc.h>
#include <stdio.h>
#include <stdlib.h>
#include "deque.h"
#define N 10

struct deque{
   int v[N];
   int qtd_elem;
};

Deque* criar(){
   Deque *d = (Deque*) malloc(sizeof(Deque));
   d->qtd_elem = 0;
   return(d);
}

int cheio(Deque *d){
   if(d->qtd_elem == N) return 1;
   else return(0);
}

void inserir_inicio(Deque *d, int valor){
   if(cheio(d)) printf("O Deque está cheio");
   else{
      int p = d->qtd_elem;
      // movendo os elementos do deque uma posição para frente de modo que a posição inicial (0) fique disponível
      while(p>=1){
          d->v[p] = d->v[p-1];
          p--;
      }
      // inserção do novo valor
      d->v[0] = valor;
      d->qtd_elem += 1;	
   }
}

void inserir_final(Deque *d, int valor){
   if(d->qtd_elem == N) printf("O Deque está cheio");
   else{
      d->v[d->qtd_elem] = valor;
      d->qtd_elem += 1;	
   }
}

int vazio(Deque *d){
  if(d->qtd_elem ==0) return 1;
  else return 0;
}

int remover_inicio(Deque *d){
   int i, valor;
   if(vazio(d)){ printf("O deque está vazio, não é possivel fazer remoção");
    exit(1);
   }
   valor = d-> v[0];
   for(i=1;i<d->qtd_elem; i++)
       d->v[i-1] = d->v[i];
   d->qtd_elem -= 1;
   return(valor); 
}

int remover_final(Deque *d){
   int i, valor;
   if(vazio(d)){ printf("O deque está vazio, não é possivel fazer remoção");
    exit(1);
   }
   valor = d-> v[d->qtd_elem-1];
   d->qtd_elem -= 1;
   return(valor); 
}

void imprimir_inicio(Deque *d){
    printf("%d", d->v[0]);

}

void imprimir_final(Deque *d){
    printf("%d", d->v[d->qtd_elem-1]);

}

void liberar(Deque *d){
  free(d);
}
