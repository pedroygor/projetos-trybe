#include <stdio.h>
#include <stdlib.h>
#include "lista.h"
#define TAM 10

struct lista{
    int v[TAM];
    int qtd_ele;
};

Lista* criar(){
    Lista *l = (Lista*) malloc(sizeof(Lista));
    l->qtd_ele = 0;
}

int cheia(Lista *l){
	if (l->qtd_ele == TAM){
		puts("Lista cheia");
		return 1;
	}
	else {
		puts("Lista não está cheia");
		return 0;
	}	
}

int vazia(Lista *l){
	if (l->qtd_ele == 0){
		puts("Lista vazia");
		return 1;
	}
	else {
		puts("Lista não está vazia");
		return 0;
	}
}

void inserir(Lista *l, int valor, int pos){
	if (cheia(l)){
		puts("Lista cheia");
		// code 
	}
	else{
		if(pos > l->qtd_ele+1 || (vazia(l) && pos == 1) || pos < 0){
			puts("Não pode inserir");
	}
		else{
			int aux = l->qtd_ele;
			while(aux > pos){
				l->v[aux] = l->v[aux - 1];
				aux--;
			}
			l->v[pos] = valor;
			l->qtd_ele++;
		}	
	}
}