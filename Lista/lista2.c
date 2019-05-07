#include <stdio.h>
#include <stdlib.h>
#include "lista.h"
#define N 10

struct lista{
    int v[N];
    int qtd_elem;
};

Lista* criar(){
    Lista *l = (Lista*) malloc(sizeof(Lista));
    l->qtd_elem = 0;
    return(l);
}

void inserir(Lista *l, int valor, int pos){
    int i;
    if(cheia(l)) printf("A lista está cheia");
    else{
        if(pos>l->qtd_elem || pos<0) printf("A posição de inserção é inválida");
        else{
            for(i=l->qtd_elem;i>pos;i--){
                l->v[i] = l->v[i-1];
            }
            l->v[pos] = valor;
            l->qtd_elem +=1;
        }
    }
}

int remover(Lista *l, int pos){
    int valor;
    if(vazia(l)) printf("A lista está vazia não é possível remover");
    else{
        if(pos >=l->qtd_elem || pos<0) printf("Posição inválida");
        else{
            valor = l->v[pos];
            
            for(int i=pos+1;i<l->qtd_elem;i++)
                l->v[i-1] = l-> v[i];
            l->qtd_elem--;
            return(valor);
        }
        
    }
}

int vazia(Lista *l){
    if(l->qtd_elem ==0) return 1;
    else return 0;
}

int cheia(Lista *l){
    if(l->qtd_elem ==N) return 1;
    else return 0;
}

void imprimir(Lista *l, int pos){
    if(pos>=0 && pos<l->qtd_elem)
        printf("O elemento %d da lista é %d", pos, l->v[pos]);
    else printf("Posição inválida");
}

void liberar(Lista *l){
    free(l);
}

