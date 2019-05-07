typedef struct lista Lista;
typedef struct amigo Amigo;

struct amigo{
    char nome;
    int idade;
    char endereco;
};

Lista* criar();

void inserir(Lista *l, Amigo *am);

Amigo* remover(Lista *l);

int vazia(Lista *l);

int cheia(Lista *l);

void imprimir(Lista *l);

void liberar(Lista *l);
