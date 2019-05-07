#include <stdio.h>
#include "pilha.h"

int main(){
    int iguais = 1, opc_pilha, valor;
    char sair;
    
    Pilha *p1;
    Pilha *p2;
    Pilha *aux;
    
    p1 = criar();
    p2 = criar();
    aux = criar();
    
    //populando as pilhas 1 e 2
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
    
    //invertendo a pilha 2
    while(!vazia(p2))
        inserir(aux, remover(p2));
    
    // testando se p1 é igual a p2 invertida (aux)
    while(!vazia(p1) && !vazia(aux)){
        if(remover(p1) != remover(aux)) iguais =0;
    }
    
    // imprimindo se são inversamente iguais
    if(iguais  && vazia(p1) && vazia(aux)) printf("As pilhas são inversamente iguais");
    else printf("As pilhas são inversamente diferentes");
    
    liberar(p1);
    liberar(p2);
    liberar(aux);
    
    return(0);
}
