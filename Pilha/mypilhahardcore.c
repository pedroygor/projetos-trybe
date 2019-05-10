#include <stdio.h>
#include <stdlib.h>
#include "mypilha.h"

typedef struct pilha{
    int *valores;
    int *topo;   
}Pilha;
Pilha *p;

Pilha* create(){
    p->topo = p = (int) malloc(TAM*sizeof(int));
    puts("Pilha criada com sucesso");
    return &p;
    
}
void release(Pilha *p){
    free(p);
    puts("Pilha liberada");
}
int full(Pilha *p){
    if(p->topo == sizeof(int)){
        puts("A pilha está cheia");
        return 1;
    }    
    else{
        puts("A pilha não está cheia");
        return 0;
    }
}
void push(Pilha *p, int valor){
    if(p->topo == TAM){
        puts("Sua pilha está cheia");
    }
    else{
        p->topo = p->topo + 1;
        p->valores[p->topo] = valor;
        printf("Valor inserido com sucesso %d\n", valor); 
    }
}
int empty(Pilha *p){
    if(p->topo == 0){
        puts("Sua pilha está vazia");
        return 1;
    }
    else{
        return 0;
    }
}
int pop(Pilha *p){
    int valor;
    if(empty(p) == -1){
        puts("Sua pilha está vazia");
        exit(1);
    }
    else{
        valor = p->valores[p->topo];
        p->topo -= 1;
        return valor;
    }
}
void display(Pilha *p){
    printf("Valor do topo é %d", p->valores[p->topo]);
}