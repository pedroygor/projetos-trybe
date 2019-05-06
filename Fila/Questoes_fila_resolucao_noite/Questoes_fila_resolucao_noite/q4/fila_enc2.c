#include <stdio.h>
#include <stdlib.h>
#include "fila.h"

typedef struct no{
    int valor;
    struct no *prox;
}No;

struct fila{
    No *ini, *fim;
    int qtd_elem;
};

Fila* criar(){
    Fila *f = (Fila*) malloc(sizeof(struct fila));
    f->ini = NULL;
    f->fim = NULL;
    f-> qtd_elem = 0;
    return f;
}

void inserir(Fila *f, int valor){
    No *n = (No*) malloc(sizeof(No));
    n->valor = valor;
    n->prox = NULL;
    
    if(vazia(f)){
        f-ini = n;
        f->fim = n;
    }else{
        f->fim->prox = n;
        f->f = n;
    }
    f->qtd_elem++;
    
}

int remover(Fila *f){
    if(!vazia(f)){
        int valor = f->ini->valor;
        No *temp = f->ini;
        f->ini = f->ini->prox;
        free(temp);
        f->qtd_elem--;
        return(valor);
    }else{
        printf("A fila está vazia");
        exit(1);
    }
}

int vazia(Fila *f){
    if(f->qtd_elem == 0) return 1;
    else return 0;
}

int cheia(Fila *f){
    return 0;
}

void imprimir(Fila *f){
    if(!vazia(f)) printf("%d", f->ini->valor);
    else printf("Fila vazia");
}

void liberar(Fila *f){
    free(f);
}

