#include <stdio.h>
#include <stdlib.h>
#include "mypilha.h"
#define TAM 3

typedef struct pilha{
    int valores[TAM];
    int topo;   
}Pilha;

Pilha* create(){
    Pilha *p = (Pilha*) malloc(sizeof(struct pilha));
    p->topo = -1;
    puts("Pilha criada com sucesso");
    return p;
    
}
void release(Pilha *p){
    free(p);
    puts("Pilha liberada");
}
int full(Pilha *p){
    if(p->topo == TAM-1){
        puts("A pilha está cheia");
        return 1;
        
    }    
    else{
        return 0;
    }
}
void push(Pilha *p, int valor){
    if(full(p)){
        printf("Sua pilha está cheia");
        return;
    }
    else{
        int aux;
        aux = p->topo = p->topo + 1;
        aux = p->valores[p->topo] = valor;
        
        printf("Valor inserido com sucesso %d\n", aux); 
    }
}
int empty(Pilha *p){
    if(p->topo == TAM-1){
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
        
    }
    else{
        valor = p->valores[p->topo];
        p->topo -= 1;
        printf("%d\n", valor);
        return valor;
    }
}
void display(Pilha *p){
    printf("Valor do topo é %d", p->valores[p->topo]);
}