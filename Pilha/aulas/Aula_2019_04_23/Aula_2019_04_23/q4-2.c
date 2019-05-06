#include <stdio.h>
#include "pilha.h"
#include <stdlib.h>
#include <time.h>

int main(){
    
    int valor, num_gerado, i=0;
    Pilha *jogador1 = criar();
    Pilha *jogador2 = criar();
    
    Pilha *aux1 = criar();
    Pilha *aux2 = criar();
    
    while(!cheia(jogador1) && !cheia(jogador2)){
        printf("Digite o valor [%d] do jogador 1", i);
        scanf("%d", &valor);
        inserir(jogador1, valor);
        
        printf("Digite o valor [%d] do jogador 2", i);
        scanf("%d", &valor);
        inserir(jogador2, valor);
        i++;
    }
    
    //invertendo as pilhas
    while(!vazia(jogador1)&& !vazia(jogador2)){
        inserir(aux1, remover(jogador1));
        inserir(aux2, remover(jogador2));
        
    }
    
    srand(time(NULL));
    
    num_gerado = 1 + rand()%10;
    
    printf("\nO número gerado foi %d", num_gerado);
    
    while(!vazia(aux1) && !vazia(aux2)){
        valor = remover(aux1);
        printf("\nJogador 1: %d", valor);
        if(valor==num_gerado) printf(" -- O jogador 1 acertou");
        
        valor = remover(aux2);
        printf("\nJogador 2: %d", valor);
        if(valor==num_gerado) printf(" -- O jogador 2 acertou");
    }
    
    liberar(jogador1);
    liberar(jogador2);
    liberar(aux1);
    liberar(aux2);
}
