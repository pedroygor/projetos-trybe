#define TAM 10  
struct lista{
     Amigo amigos[TAM];
     int qtd_ele;
 };
 struct amigo{
    char nome;
    int idade;
    char endereco;
};
typedef struct lista Lista;
typedef struct amigo Amigo;


Lista* criar();

void inserir(Lista *l, Amigo *am, int pos);

Amigo* remover(Lista *l);

int vazia(Lista *l);

int cheia(Lista *l);

void imprimir(Lista *l);

void liberar(Lista *l);
