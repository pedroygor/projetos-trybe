#include <stdio.h>
#include <amigo.h>
#define TAM 10
 struct Lista{
     Amigo amigos[TAM];
     int qtd_ele;
 };
 
 Lista* criar(){
    Lista *l = (Lista*) malloc(sizeof(struct Lista));
    l->qtd_ele = 0;
    return l;
}