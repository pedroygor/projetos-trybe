#include<stdio.h>
#include "fila.h"
int main(){
    int opc, valor;
    Fila *f;
    do{
        printf("Digite a opção desejada: \n 1- Criar Fila \n 2- Inserir \n 3- Remover \n 4- Imprimir \n 5- Verificar se a Fila está vazia \n 6- Verificar se a Fila está cheia \n 7-sair\n");
    	scanf("%d", &opc);
        switch (opc){
            case 1:
                f = criar();
                puts("Fila criada com sucesso");    
                break;
            case 2:
                printf("Digite o valor que deseja inserir\n");
                scanf("%d", &valor);
                inserir(f, valor);
                break;
            case 3:
                valor = remover(f);
                printf("Valor %d\n", valor); 
                break;
            case 4:           
                imprimir(f);
                break;
            case 5:
                if(vazia(f) == 0)
                    puts("Não está vazia");
                else 
                    puts("Fila Vazia"); 
                    break;
            case 6:
                if (cheia(f) == 0)
                    puts("Não está cheia");
                else 
                    puts("Está cheia");
                    break;
            case 7:
                liberar(f);
		        puts("Programa encerrado com sucesso");            
                break;               
            default: puts("Opção inválida");
                
        }
        
    } while (opc!=7);

    
    
}