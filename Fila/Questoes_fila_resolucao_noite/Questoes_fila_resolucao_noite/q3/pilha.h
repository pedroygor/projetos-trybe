typedef struct pilha Pilha;

Pilha* criar_pilha();

void inserir_pilha(Pilha *p, int valor);

int remover_pilha(Pilha *p);

int vazia_pilha(Pilha *p);

int cheia_pilha(Pilha *p);

void imprimir_pilha(Pilha *p);

void liberar_pilha(Pilha *p);
