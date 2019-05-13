#include <stdio.h>
#include "lista_encadeada.h"


Lista* criar(){
    Lista *l = (Lista*) malloc(sizeof(Lista));
    l->ini = NULL;
    l->fim = NULL;
    return l;
}
int vazia(Lista *l){
    if (l->ini == NULL){
		puts("Lista vazia");
		return 1;
	}
	else {
		puts("Lista não está vazia");
		return 0;
	}
}
void inserir(Lista *l, int pos, int valor){
	Lista nova_lista;
		
}