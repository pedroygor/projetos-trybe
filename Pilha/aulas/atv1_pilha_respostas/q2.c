#include <stdio.h>
#include "pilha.h"

int main(){
    int iguais = 1, opc_pilha, valor;
    char sair;
    
    Pilha *p1;
    Pilha *p2;
    
    p1 = criar();
    p2 = criar();
    
    do{
        printf("Qual pilha você deseja inserir (1 ou 2)?");
        scanf("%d", &opc_pilha);
        printf("Digite o valor a ser inserido");
        scanf("%d", &valor);
        if(opc_pilha == 1) inserir(p1, valor);
        else inserir(p2, valor);
        
        printf("Deseja encerrar a leitura a inserção nas pilhas (S/N)?");
        scanf(" %c", &sair);
    }while(sair != 'S' && sair != 's');
    
    while(!vazia(p1) && !vazia(p2)){
        if(remover(p1) != remover(p2)) iguais =0;
    }
    
    if(iguais  && vazia(p1) && vazia(p2)) printf("As pilhas são iguais");
    else printf("As pilhas são diferentes");
    
    liberar(p1);
    liberar(p2);
    
    return(0);
}
