typedef struct pilha Pilha;
typedef struct peca Peca;

struct peca{
    char nome;
    int ordem;
    int defeito;
};

Pilha* criar();

void inserir(Pilha *p, Peca *pe);

Peca* remover(Pilha *p);

int vazia(Pilha *p);

int cheia(Pilha *p);

void imprimir(Pilha *p);

void liberar(Pilha *p);
