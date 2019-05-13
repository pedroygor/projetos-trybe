typedef struct no{
    int valor;
    No *prox;
    No *ant;
}No;

typedef struct lista_encadeada{
    No *ini;
    No *fim;
}Lista;


Lista* criar();

void inserir(Lista *l, int valor, int pos);

int remover(Lista *l, int pos);

int vazia(Lista *l);

int cheia(Lista *l);

void imprimir(Lista *l, int pos);

void liberar (Lista *l);