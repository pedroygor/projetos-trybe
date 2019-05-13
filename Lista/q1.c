#include <stdio.h>
#include "amigo.h"

Lista* criar(){
    Lista *l = (Lista*) malloc(sizeof(Lista));
    l->qtd_ele = 0;
    return l;
}
// Imprimir Endereco, nome e idade

Amigo* remover(Lista *l){
    int i = 0;
    Amigo valor;
}