#include <malloc.h>
#include <stdio.h>
#include <stdlib.h>
#include "pilha.h"

int main(){
    int defeito, ordem;
    char nome;
    Peca *pe,*peca_remocao;
    
    Pilha *p1 = criar();
    Pilha *p2 = criar();
    do{
        printf("Digite o nome da peça a ser inserida na pilha");
        scanf(" %c", &nome);
        printf("Digite a ordem da peça a ser inserida na pilha");
        scanf("%d", &ordem);
        printf("A peça tem defeito? 1-sim, 0-não");
        scanf("%d", &defeito);
        
        pe = (Peca*) malloc(sizeof(struct peca));
    
        pe->nome = nome;
        pe->ordem = ordem;
        pe->defeito = defeito;
      
        // inserindo com ordem
        int ordem_topo=-1;
        if(!vazia(p1)){
                Peca *pe_temp = remover(p1);
                ordem_topo = pe_temp->ordem; // pegando a ordem do topo da pilha
                inserir(p1, pe_temp);
        }
        if(ordem_topo==-1 || pe->ordem == ordem_topo -1){
            inserir(p1, pe);
        }else{
            printf("Ordem incorreta");
        }
    }while(pe->ordem !=1);
    
    printf("Consertando as peças com defeito");
    //invertendo
    while(!vazia(p1)){
        peca_remocao = (Peca*) malloc(sizeof(Peca));
        peca_remocao = remover(p1);
        //consertando o defeito
        if(peca_remocao->defeito == 1){
            peca_remocao->defeito =0;
            printf("Defeito consertado na peça %c", peca_remocao->nome);
        }
        inserir(p2, peca_remocao);
    }
    
    printf("\nImprimindo o produto montado");
    //imprimindo o produto montado
    while(!vazia(p2)){
        peca_remocao = (Peca*) malloc(sizeof(Peca));
        peca_remocao = remover(p2);
        printf("\n %c", peca_remocao->nome);
        
    }
    
    liberar(p1);
    liberar(p2);
    
    return(0);
}
